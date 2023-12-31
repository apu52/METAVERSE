// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js
  var options = {
    strings: ["Welcome to the Country Guide", "Have fun with geography"],
    typeSpeed: 50, // typing speed in milliseconds
    backSpeed: 25, // backspacing speed in milliseconds
    showCursor: false, // hide the cursor
    onComplete: function (self) {
      // You can add any code that should run after the typing animation is complete
    },
  };

  var typed = new Typed("#result", options);

  // Add event listener for the search button
  document.getElementById("search-btn").addEventListener("click", function () {
    // Get the country name from the input field
    var countryName = document.getElementById("country-inp").value;

    // You can perform your search logic here and update the #result accordingly
    // For now, let's just update the result with the country name
    document.getElementById("result").innerHTML = "Country Name: " + countryName;
  });
});


let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
                <hr>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
                <hr>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
                <hr>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
                <hr>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
                  <hr>
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});