import getCountries from "./modules/api";
import Navigation from "./components/navigation";
import card from "./components/card";
import cardDetails from "./components/cardDetails";
import switchMode from "./modules/switchMode";
import Layout from "./components/loader";
import {
  searchCountry,
  searchedCountry,
  filterCountry,
  filteredCountry,
} from "./modules/functions";
import "./node_modules/normalize.css";
// import "./sass/style.scss";
import "./css/style.css";

app.innerHTML = Layout();
async function countries() {
  const app = document.getElementById("app");
  const searchInputValue = localStorage.getItem("searchInput") || "";
  const filteredListValue = localStorage.getItem("filterInput") || "";
  try {
    const sortedCountries = await getCountries();
    app.innerHTML = Navigation() + card(sortedCountries);

    // get contents of the DOM after they are loaded
    const countriesContainer = document.querySelector(".cards-container");
    const searchInput = document.querySelector("input[name='search']");
    const filteredList = document.querySelector("#continent");
    const cards = document.querySelectorAll(".card");
    const section = document.querySelector("section");
    // search for a country
    if (searchInputValue !== "") {
      searchInput.value = searchInputValue;
      searchedCountry(
        sortedCountries,
        countriesContainer,
        searchInputValue,
        section
      );
    }

    searchCountry(
      countriesContainer,
      searchInput,
      sortedCountries,
      filteredList,
      section
    );

    // filter countries by region
    if (filteredListValue !== "" && filteredListValue !== "All Countries") {
      filteredList.value = filteredListValue;
      filteredCountry(
        sortedCountries,
        countriesContainer,
        filteredListValue,
        section
      );
    }
    filterCountry(
      countriesContainer,
      filteredList,
      sortedCountries,
      searchInput,
      section
    );
    // display a single country on click
    cardDetails(sortedCountries, cards, section);

    switchMode();
  } catch (error) {
    document.write(`make sure your correct the error ${error.message}`);
  }
}
window.addEventListener("load", (e) => {
  countries();
});

export default countries;
/**
 * Key features of the Country Guide website
            * country name
            * population
            * capital
            * language spoken 
            *currency used
            * timezones
            * regional blocs
            * The flags of the country
            * 
* The search bar functionality
*    users shall be inposition to search for country by country code or country name

*The link to the country API https://restcountries.com/v3.1/all


Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*
 */
// the variables that we are gonna use in the app
