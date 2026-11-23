# Special HTML Form Elements: `<fieldset>` and `<legend>`

The `<fieldset>` and `<legend>` elements organize related form controls into clearly labeled sections. They are especially useful for improving the readability and accessibility of large forms.

## Learning Objectives

After completing this section, you should be able to:

1. Use `<fieldset>` to group related form controls.
2. Use `<legend>` to provide a caption for each group.

## The `<fieldset>` Element

The `<fieldset>` element groups related elements inside a form. Browsers typically display a border around the grouped controls.

```html
<fieldset>
  <!-- Related form controls -->
</fieldset>
```

A fieldset can contain different HTML elements, but it is most commonly used to group related `<label>` and `<input>` elements.

### Common Attributes

| Attribute | Purpose |
|---|---|
| `disabled` | Disables the form controls belonging to the fieldset. |
| `form` | Identifies the `<form>` associated with the fieldset by its `id`. |
| `name` | Assigns a name to the fieldset. |

## The `<legend>` Element

The `<legend>` element provides a caption describing the purpose of a fieldset.

```html
<fieldset>
  <legend>Personal Details</legend>
  <!-- Related controls -->
</fieldset>
```

The `<legend>` should be the first child inside `<fieldset>`. It makes the relationship between the grouped controls easier to understand.

## Complete Example

This form separates personal and professional information into two logical sections:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fieldset Example</title>
</head>
<body>
  <h1>The fieldset element</h1>

  <form>
    <fieldset name="personal_details">
      <legend>Personal Details</legend>

      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname">
      <br>

      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname">
      <br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <br>

      <label for="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone">
    </fieldset>

    <br>

    <fieldset name="professional_details">
      <legend>Professional Details</legend>

      <label for="occupation">Occupation:</label>
      <input type="text" id="occupation" name="occupation">
      <br>

      <label for="company">Company:</label>
      <input type="text" id="company" name="company">
      <br>

      <label for="start">Start date:</label>
      <input type="date" id="start" name="start">
      <br>

      <label for="end">End date:</label>
      <input type="date" id="end" name="end">
    </fieldset>

    <br>

    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

![form1](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/_3853a3125e1d4b65838be637a3ce4e40_legendtag2.png?expiry=1795035592986&hmac=caw_2r1Ylc2AKHw7EEwqC4HNOBt4bZ0z5PmrnE8jjKc)
## Visual Difference

- Without `<legend>`, each fieldset appears as an unlabeled bordered group.
- With `<legend>`, a caption such as **Personal Details** or **Professional Details** appears in the fieldset border.
- These captions explain why the controls have been grouped together.

## Key Takeaway

Use `<fieldset>` to create logical groups of related form controls and place `<legend>` first inside each fieldset to identify the group. Together, these elements make complex forms clearer, more organized, and easier to navigate.
