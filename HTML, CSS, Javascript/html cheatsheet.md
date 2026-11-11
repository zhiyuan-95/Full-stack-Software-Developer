## HTML Elements Reference Table

| Element           | Description                                                                                                   | Example                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `<!-- -->`        | Defines an HTML comment. Comments are not displayed in the browser and are useful for documenting code.       | `<!-- This is a comment -->`                                   |
| `<!DOCTYPE html>` | Declares the document type as HTML5. Must appear at the beginning of an HTML document. Has no closing tag.    | `<!DOCTYPE html>`                                              |
| `<html>`          | Root element of an HTML document. Contains all other HTML elements.                                           | `<html>...</html>`                                             |
| `<head>`          | Contains document metadata, such as the title, character encoding, stylesheets, and scripts.                  | `<head><title>My Page</title></head>`                          |
| `<body>`          | Contains the visible content of an HTML document, such as text, images, links, and tables.                    | `<body><h1>Hello World</h1></body>`                            |
| `<title>`         | Defines the document title displayed in the browser tab. Must be placed inside `<head>`.                      | `<title>Document Title</title>`                                |
| `<meta>`          | Provides metadata about the HTML document, including character encoding, author, and viewport settings.       | `<meta name="author" content="Christopher Moore">`             |
| `<link>`          | Links an external resource, commonly a CSS stylesheet, to the HTML document.                                  | `<link rel="stylesheet" href="styles.css">`                    |
| `<script>`        | Embeds or references JavaScript code in an HTML document.                                                     | `<script>alert("Hello World");</script>`                       |
| `<h1>`            | Defines a level-one heading, typically the main heading of a page.                                            | `<h1>Thomas J. Watson</h1>`                                    |
| `<p>`             | Defines a paragraph of text. Browsers typically add spacing before and after paragraphs.                      | `<p>This is a paragraph of text.</p>`                          |
| `<div>`           | Generic block-level container used to group elements for styling or layout. Has no specific semantic meaning. | `<div><p>Some content</p></div>`                               |
| `<a>`             | Creates a hyperlink using the `href` attribute to specify the destination URL or path.                        | `<a href="https://www.ibm.com">IBM</a>`                        |
| `<img>`           | Embeds an image using the `src` attribute. Optional attributes include `width`, `height`, and `alt`.          | `<img src="image.jpg" width="300" height="300" alt="Example">` |
| `<ul>`            | Creates an unordered (bulleted) list. Contains `<li>` elements.                                               | `<ul><li>Item 1</li><li>Item 2</li></ul>`                      |
| `<ol>`            | Creates an ordered (numbered) list. Contains `<li>` elements.                                                 | `<ol><li>First</li><li>Second</li></ol>`                       |
| `<li>`            | Defines a list item within an ordered or unordered list.                                                      | `<li>Bullet point 1</li>`                                      |
| `<table>`         | Creates a table containing rows (`<tr>`) and cells (`<td>` or `<th>`).                                        | `<table><tr><td>Data</td></tr></table>`                        |
| `<tr>`            | Defines a row within an HTML table.                                                                           | `<tr><td>Cell 1</td><td>Cell 2</td></tr>`                      |
| `<th>`            | Defines a header cell within a table. Header text is typically bold and centered by default.                  | `<th>Column Header</th>`                                       |
| `<td>`            | Defines a standard data cell within a table row.                                                              | `<td>Cell Content</td>`                                        |

## Complete HTML Document Example

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <h1>Welcome to My Website</h1>

    <p>This is my first HTML webpage.</p>

    <div>
      <h2>About Me</h2>
      <p>I am learning HTML.</p>
    </div>

    <a href="https://www.ibm.com">Visit IBM</a>

    <img src="image.jpg" width="300" alt="Example">

    <h2>My Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <h2>Learning Plan</h2>
    <ol>
      <li>Learn HTML</li>
      <li>Learn CSS</li>
      <li>Learn JavaScript</li>
    </ol>

    <table>
      <tr>
        <th>Language</th>
        <th>Difficulty</th>
      </tr>
      <tr>
        <td>HTML</td>
        <td>Easy</td>
      </tr>
      <tr>
        <td>JavaScript</td>
        <td>Intermediate</td>
      </tr>
    </table>

    <script>
      console.log("Hello World");
    </script>
  </body>
</html>
```
