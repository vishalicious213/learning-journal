# Learning Journal

This was a Scrimba solo project that completed Module 6: Responsive Design in the Frontend Developer's Path. We were given a Figma design and had to build a blog site / learning journal. The requirements were to build each page from scratch, make all pages responsive, use relative units, employ mobile-first design, media queries and the viewport meta tag. The Figma design included photo assets and other design information, such as fonts, sizing and spacing of elements, color information and so on.

After completing the project, I looked at implementations from other Scrimba students and was surprised to see that the majority of them built out static pages for every page on the site and didn't make use of `CSS Grid` when they built out the project. I took a modular and more programmatic approach than static HTML pages, to make myself use JavaScript where I could, both to test my JavaScript ability as well as make the code as DRY (Don't Repeat Yourself) as I could without using a library like React.js.

The article/blog post pages have their content rendered using a JavaScript function that reads HTML from an array of objects. Because this project uses vanilla JavaScript instead of a library or framework like React, Vue or Angular, I relied on updating the innerHTML of various elements and styling them from a CSS file. Building the site in this manner helped with understanding what's happening behind-the-scenes if I were to make use of tools like React and helps to give a greater appreciation for the complexity of their abstraction of the JavaScript through JSX.

Deployed at: https://vish213-learning-journal.netlify.app/

## JavaScript concepts

- variables
- arrays
    - .filter()
    - forEach()
- objects
- functions
    - return
- key/value pairs
- if conditionals
- string template literals
    - JavaScript variables in HTML
- module imports & exports
- element.innerHTML
- document.getElementById()
- window.location
    - window.location.pathname

## CSS concepts

- display: flex
    - align-items
    - justify-content
- display: grid
    - grid-template-columns
        - repeat
        - minmax
    - grid-template-rows
    - grid-template-areas
    - gap
    - row-gap
- grid-area
- grid-column
    - span
- align-self
- box-sizing: border-box
- text-transform
- text-decoration
- background-position
- background-repeat
- background-size
- media queries

## HTML concepts

- Semantic HTML
    - header
    - main
    - nav
    - section
    - footer
- classes
- IDs
- anchor tags
- importing Google fonts
- script tags
    - type="module"