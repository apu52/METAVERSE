# [Country Guide](https://ssaava.github.io/40-JavaScript-Projects/ProjectsFolder/CountryGuide/index.html) Website Documentation

# Table of Contents

[Introduction](#introduction)

- [Description](#description)
- [Features Of The Website](#features-of-the-website)

[REST Countries API](#rest-countries-aPI)

- [Overview](#Overview)
- [Features of The API](#features-of-the-api)

[Getting Started](#getting-started)

- [How to Clone This Repository](#how-to-clone-this-repository)

- [How to Run the app on your local machine](#how-to-run-the-app-on-your-local-machine)

[Featues and Functionality of the Website](#featues-and-functionality-of-the-website)

[My Process](#my-process)

- [Built with](#built-with)
- [Useful resources](#useful-resources)
  [Author](#author)
  [Conclusion](#conclusion)

## Introduction

### Description

The Country Guide website is a comprehensive platform designed to help individuals search for specific country information and retrieve essential details, including the country's general information and its flag. Users can easily search for their desired country using the search bar, and the website will display the relevant information on the page.

## Features Of The Website

- Country Information: The website provides users with detailed information about a specific country, including its name, population, capital, languages spoken, currency, timezones, and regional blocs. Users can gain a comprehensive understanding of the country's attributes.

- Flag Display: Alongside the country information, the website prominently displays the flag of the searched country. This visual representation enhances the user experience and allows users to quickly identify and associate the flag with the corresponding country.

- User-Friendly Interface: The website is built using HTML, CSS, and JavaScript, with the integration of libraries like Bootstrap to create a visually appealing and responsive user interface. Users can easily navigate through the website, search for countries, and access the desired information effortlessly.

- Search Functionality: The search bar enables users to input the name or code of the country they are interested in. Upon submitting the search query, the website fetches the relevant country data from the countries API and displays it in an organized and user-friendly manner.

- Integration with Countries API: The website utilizes a countries API to retrieve the necessary data about countries. By leveraging the API's endpoints and query parameters, the website can fetch accurate and up-to-date information for display.

- Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes. Users can access the country information and explore the website's features from their desktop computers, tablets, or mobile devices.

With the combined power of **HTML, CSS, JavaScript**, and libraries like **Bootstrap**, the Country Guide website provides users with an intuitive and interactive platform to search for and explore detailed information about countries worldwide.

# Rest Countries API

### Overview

The REST Countries API is a powerful resource that enables us to retrieve comprehensive information about countries worldwide. By utilizing this API, we can seamlessly fetch country data for our website.

API Documentation: [REST Countries API Documentation](https://restcountries.com/v3.1/all)

### Features of The API

- Country Information: The API provides extensive information about countries, including details such as country codes, names, capitals, currencies, languages spoken, timezones, regional blocs, and much more. This wealth of data allows us to present a holistic view of each country on our website.

- Search Capability: With the REST Countries API, we can search for countries based on various parameters, including country codes, names, and capitals. This search functionality enables users to find specific countries quickly and efficiently.

For our project, we will primarily utilize the country code and name to retrieve the desired country information. These parameters will serve as the main search criteria for fetching the relevant country data.

By leveraging the **REST Countries API**, we can access a vast repository of country data, enabling us to present accurate and up-to-date information to our website users. Please refer to the provided [API documentation](https://restcountries.com/v3.1/all) for more details on the available endpoints, query parameters, and response formats.

# Getting Started

## How to Clone This Repository

To get a local copy of this repository on your computer, follow these steps:

1. **Install Git:** If you don't have Git installed on your computer, you can download and install it from [Git's official website](https://git-scm.com/downloads).

2. **Open your Terminal (Linux/macOS) or Command Prompt (Windows):** You'll use your command line interface to run Git commands.

3. **Navigate to your desired directory:** Use the `cd` command to move to the directory where you want to clone the repository. For example:

   ```bash
   cd path/to/your/directory
   ```

4. **Clone the Repository:** Copy the repository URL from the "Clone or download" button on this GitHub page. It should look like this:

   ```bash
   git clone https://github.com/Ssaava/country-guide-app.git
   ```

5. **Done!** The repository is now cloned to your local machine. You can navigate into the cloned directory with:

   ```bash
   cd country-guide-app
   ```

Now you have a local copy of the repository on your computer that you can work with. Happy coding!

## How to Run the app on your local machine

This guide will walk you through the steps to run the application locally on your machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

Follow these steps to get your application up and running:

1. **Install Dependencies:** In your working directory, run the following command to install the necessary dependencies:

```bash
npm install
```

2. **Run Development server**
   After installing the dependencies, run the following command to start the development server

```bash
npm run dev
```

```bash
  git clone https://github.com/Ssaava/country-guide-app.git
```

This command will launch the application locally, and you can access it in your web browser at http://localhost:5173/.

3. **Go Production mode:**
   If you want to build the app for production and preview it locally, you can use these commands:

```bash
npm run build
# This sets up the production server
npm run preview
# This opens the production server locally
```

By following these steps, you will be able to access the Country Guide website and explore its features in your browser.

# Featues and Functionality of the Website

- Home Page:
  Provide a search input where users can enter a country name or code.
  Display a list of countries matching the search query, along with basic information like flag, population, and capital.

- Country Details Section:
  Show comprehensive details about a specific country, including its name, flag, population, capital, languages spoken, currency, and more.
  Display additional information like area, timezones, calling code, and regional blocs.

Optionally, showcase additional data like borders, neighboring countries, and regional information.

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/responsive-country-guide-app-using-javascript-sass-and-vite--N8fNUAH7-)
- Live Site URL: [here](https://country-guide-app.pages.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Bootstrap
- Sass
- Mobile-first workflow
- Node Modules
- fontawesome icons
- [Styled Components](https://styled-components.com/) - For styles

### Useful resources

- [Link To Finished Project](https://heuristic-johnson-cf1cc8.netlify.app/) - This helped me as a reference to what I am supposed to be doing as my final project.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Ssaava Emmanuel](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@ssava-Ema⚡](https://www.twitter.com/ssava-Ema)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

# Conclusion

    Summarize the key points covered in the documentation.
    Encourage users to explore the REST Countries API documentation for additional information and advanced features.
