import { prepareWithSegments, layoutNextLine } from "./pretext.js";

const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const currentPhase = document.body.dataset.phase;
if (currentPhase) {
  document.querySelectorAll(`[data-phase-link="${currentPhase}"]`).forEach((link) => {
    link.setAttribute("aria-current", "page");
  });
} else {
  document.querySelectorAll('[data-nav-home]').forEach((link) => link.setAttribute("aria-current", "page"));
}

function termAliases(label) {
  const clean = label.trim();
  const withoutParenthetical = clean.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  const parenthetical = [...clean.matchAll(/\(([^)]+)\)/g)].map((match) => match[1].trim());
  const aliases = [clean, withoutParenthetical, ...parenthetical].filter((value) => value.length > 1);

  if (/[^aeiou]y$/i.test(withoutParenthetical)) {
    aliases.push(`${withoutParenthetical.slice(0, -1)}ies`);
  } else {
    aliases.push(`${withoutParenthetical}s`, `${withoutParenthetical}es`);
  }

  return [...new Set(aliases)];
}

function blockUsesTerm(block, label) {
  const text = block.textContent.toLocaleLowerCase();
  return termAliases(label).some((alias) => {
    const escaped = alias.toLocaleLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, "i").test(text);
  });
}

function placeContextualTerms() {
  const source = document.querySelector("#terms, #glossary");
  if (!source) return;

  const definitions = [...source.querySelectorAll(".term")].map((term) => ({
    name: term.querySelector("dt")?.textContent.trim(),
    meaning: term.querySelector("dd")?.textContent.trim(),
  })).filter((term) => term.name && term.meaning);

  const sections = [...document.querySelectorAll(".content-section, main > .section")]
    .filter((section) => section !== source && !source.contains(section));
  const placements = new Map();

  definitions.forEach((definition) => {
    let target = null;
    for (const section of sections) {
      const blocks = [...section.children].filter((child) =>
        !child.matches(".section-label, .context-terms")
      );
      target = blocks.find((block) => blockUsesTerm(block, definition.name));
      if (target) break;
    }
    if (!target) return;
    if (!placements.has(target)) placements.set(target, []);
    placements.get(target).push(definition);
  });

  placements.forEach((terms, target) => {
    const aside = document.createElement("aside");
    aside.className = "context-terms";
    aside.setAttribute("aria-label", "Terminology explained here");

    const label = document.createElement("span");
    label.className = "context-terms-label";
    label.textContent = terms.length === 1 ? "Term used here" : "Terms used here";
    aside.append(label);

    const list = document.createElement("dl");
    terms.forEach(({ name, meaning }) => {
      const item = document.createElement("div");
      item.className = "context-term";
      const termName = document.createElement("dt");
      termName.textContent = name;
      const termMeaning = document.createElement("dd");
      termMeaning.textContent = meaning;
      item.append(termName, termMeaning);
      list.append(item);
    });
    aside.append(list);
    target.after(aside);
  });

  document.querySelector('a[href="#terms"]')?.closest("li")?.remove();
  source.remove();
}

placeContextualTerms();

const editableText = [...document.querySelectorAll("[data-pretext]")];
const prepared = new Map();

function prepareElement(element) {
  const font = getComputedStyle(element).font;
  prepared.set(element, prepareWithSegments(element.textContent.trim(), font));
}

function editorialHeight(element, handle) {
  const style = getComputedStyle(element);
  const lineHeight = Number.parseFloat(style.lineHeight) || Number.parseFloat(style.fontSize) * 1.55;
  const width = Math.max(120, element.clientWidth);
  const inset = Number.parseFloat(element.dataset.pretextInset || "0");
  let state = { segmentIndex: 0, graphemeIndex: 0 };
  let lines = 0;

  while (lines < 500) {
    const available = Math.max(96, width - (lines < 3 ? inset : 0));
    const line = layoutNextLine(handle, state, available);
    if (!line) break;
    state = line.end || line.state;
    lines += 1;
    if (!state) break;
  }

  return Math.ceil(lines * lineHeight);
}

function relayout() {
  prepared.forEach((handle, element) => {
    const measured = editorialHeight(element, handle);
    if (measured > 0) element.style.minHeight = `${measured}px`;
  });
}

async function initializeTextLayout() {
  if (document.fonts?.ready) await document.fonts.ready;
  editableText.forEach((element) => {
    prepareElement(element);
    if (element.contentEditable === "true") {
      new MutationObserver(() => {
        prepareElement(element);
        relayout();
      }).observe(element, { characterData: true, childList: true, subtree: true });
    }
  });
  relayout();
  document.documentElement.classList.add("pretext-ready");
}

initializeTextLayout();

if ("ResizeObserver" in window) {
  new ResizeObserver(() => relayout()).observe(document.body);
} else {
  window.addEventListener("resize", relayout, { passive: true });
}
