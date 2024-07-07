# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

## Typography

### Body Copy

- Homepage Items: 14px
- Detail Page: 16px

### Fonts

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 600, 800

font-family: 'Nunito Sans', sans-serif;

## Icons

For the icons, you can use a font icon library. Don't worry if the icons that you choose don't look exactly like they do on the design.

Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

Done with setting up the development environment -->
it is time to start working on the layout and how it will appear using bootstra

we need more than one pages that will be displayed for our data and these pages include
detail page to display the details for one country
the home page that will be used to display all the countries from the API and this is the homepage for the site
Questions to ask myself, can the two pages be displayed in a single page by updating the data in the page?

<!-- we shall have one html file to display all of the required information -->

asynchronously update data in a webpage html -> https://medium.com/geekculture/asynchronously-updating-a-webpage-in-a-standard-html-css-js-frontend-8496a3388c01

<!-- link to the copy website  -->

https://heuristic-johnson-cf1cc8.netlify.app/

<!-- We are designing the front end cards first -->
<!-- read about the select html element -->

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

Accessibility
https://www.accessibility-developer-guide.com/

<!--next we are now goint to load all the data from the API to the web page -->

all data has been loaded into the page and well sorted

Next part is working on the search bar to work effectively but will do this next week

<!-- what we are missing for our project to work out well to our expectations -->

1 - If back button is clicked, we cannot re click on the card to display its details
2 - If page is loaded with a searched or filtered Input value, we cannot reclick on the card to display its details

<!-- Expected solution -->

1 - let back button load only content for the section and then keep track of the inner contents
2 - make the page read the contents of the section when the page loads. do this in the functions used to filter and display the content
