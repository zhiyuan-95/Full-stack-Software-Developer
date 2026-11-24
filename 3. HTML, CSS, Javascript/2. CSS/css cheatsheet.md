## **HTML Elements Reference Table**

| Element           | Description                                                                                                                                          | Example                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `<!DOCTYPE html>` | Declares the document type as HTML5. Must appear at the beginning of every HTML document. No closing tag.                                            | `<!DOCTYPE html>`                                                                                  |
| `<html>`          | Root element of an HTML document. Contains all other HTML elements.                                                                                  | `<html>...</html>`                                                                                 |
| `<head>`          | Contains document metadata, including the title, stylesheets, and character encoding.                                                                | `<head><title>Document Title</title></head>`                                                       |
| `<title>`         | Defines the title displayed in the browser tab. Required within the `<head>` element.                                                                | `<title>Document Title</title>`                                                                    |
| `<body>`          | Contains the visible content of an HTML document.                                                                                                    | `<body><p>Document body here</p></body>`                                                           |
| `<header>`        | Container for introductory content, such as headings, logos, navigation, or author information.                                                      | `<header><h1>Welcome</h1><p>Introduction</p></header>`                                             |
| `<footer>`        | Defines footer content, typically including author information, copyright, contact details, or related links.                                        | `<footer><p>Author: Christopher Moore</p></footer>`                                                |
| `<nav>`           | Defines a section containing navigation links.                                                                                                       | `<nav><a href="home.html">Home</a><a href="about.html">About</a></nav>`                            |
| `<section>`       | Defines a thematic section of a document, typically with a heading.                                                                                  | `<section><h2>Introduction</h2><p>Section content</p></section>`                                   |
| `<article>`       | Defines self-contained content that can stand independently, such as a blog post or news article.                                                    | `<article><h2>HTML</h2><p>HTML stands for Hypertext Markup Language.</p></article>`                |
| `<aside>`         | Defines content indirectly related to the surrounding content, such as a sidebar or additional information.                                          | `<aside><p>Related information</p></aside>`                                                        |
| `<div>`           | Generic block-level container used to group elements, often for CSS styling or JavaScript manipulation. Has no inherent semantic meaning.            | `<div class="container"><p>Content</p></div>`                                                      |
| `<h1>`            | Defines a level-one heading. HTML supports headings from `<h1>` to `<h6>`.                                                                           | `<h1>Thomas J. Watson</h1>`                                                                        |
| `<p>`             | Defines a paragraph of text. Browsers typically display paragraphs as blocks with spacing between them.                                              | `<p>Thomas J. Watson built IBM into a major technology company.</p>`                               |
| `<a href="path">` | Creates a hyperlink using the `href` attribute to specify the destination URL or file path.                                                          | `<a href="https://www.ibm.com">IBM</a>`                                                            |
| `<img>`           | Embeds an image. Uses `src` for the image path, `alt` for alternative text, and optional `width` and `height` attributes.                            | `<img src="durham.jpg" alt="Durham, NC" width="300" height="300">`                                 |
| `<figure>`        | Represents self-contained content, such as an image, diagram, or illustration, optionally with a caption.                                            | `<figure><img src="durham.jpg" alt="Durham"><figcaption>Fig. 1 - Durham, NC</figcaption></figure>` |
| `<figcaption>`    | Defines a caption for content within a `<figure>` element.                                                                                           | `<figcaption>Fig. 1 - Durham, NC</figcaption>`                                                     |
| `<form>`          | Creates an HTML form for collecting and submitting user input.                                                                                       | `<form action="/script.php"><input type="text" name="fname"><input type="submit"></form>`          |
| `<fieldset>`      | Groups related form controls and typically displays a border around them.                                                                            | `<fieldset><legend>User:</legend><input type="text" name="fname"></fieldset>`                      |
| `<input>`         | Creates an input control. The `type` attribute specifies the control type, such as `text`, `email`, `number`, `date`, `color`, `range`, or `submit`. | `<input type="text" id="fname" name="fname">`                                                      |
| `<ul>`            | Creates an unordered (bulleted) list. Uses `<li>` for list items.                                                                                    | `<ul><li>Bullet 1</li><li>Bullet 2</li></ul>`                                                      |
| `<ol>`            | Creates an ordered (numbered) list. Uses `<li>` for list items.                                                                                      | `<ol><li>First</li><li>Second</li></ol>`                                                           |
| `<li>`            | Defines a list item inside an ordered or unordered list.                                                                                             | `<li>List item</li>`                                                                               |
| `<table>`         | Defines a table containing rows (`<tr>`), data cells (`<td>`), and optional header cells (`<th>`).                                                   | `<table><tr><th>Name</th></tr><tr><td>John</td></tr></table>`                                      |
| `<tr>`            | Defines a row within an HTML table.                                                                                                                  | `<tr><td>Cell 1</td><td>Cell 2</td></tr>`                                                          |
| `<td>`            | Defines a standard data cell within a table row.                                                                                                     | `<td>First row, first cell</td>`                                                                   |
| `<th>`            | Defines a header cell within a table, usually displayed in bold and centered by default.                                                             | `<th>Header cell</th>`                                                                             |
| `<link>`          | Links external resources, most commonly CSS stylesheets, to an HTML document. Usually placed inside `<head>`.                                        | `<link rel="stylesheet" href="styles.css">`                                                        |
| `<meta>`          | Provides metadata about an HTML document, such as author, description, character encoding, or viewport settings.                                     | `<meta name="author" content="Christopher Moore">`                                                 |
| `<style>`         | Defines internal CSS rules directly within an HTML document.                                                                                         | `<style>p { color: red; }</style>`                                                                 |
| `<script>`        | Embeds or references JavaScript code in an HTML document.                                                                                            | `<script>alert("Hello World");</script>`                                                           |

### **Complete HTML5 Document Example**

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>

    <nav>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
    </nav>

    <main>
        <section>
            <h2>Introduction</h2>
            <p>This is a paragraph of text.</p>
        </section>

        <article>
            <h2>About HTML</h2>
            <p>HTML stands for Hypertext Markup Language.</p>
        </article>

        <aside>
            <p>Additional related information.</p>
        </aside>
    </main>

    <footer>
        <p>Author: Christopher Moore</p>
    </footer>
</body>

</html>
```

**Note:** I condensed repetitive code examples, retained all 31 elements from your original material, and refined a few descriptions for HTML5 accuracy. I also included `<main>` in the complete example, which identifies the primary content of the page.
