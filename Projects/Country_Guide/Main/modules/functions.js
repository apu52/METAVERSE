import { generateCard } from "../components/card";
import cardDetails from "../components/cardDetails";
let cardsContainerValue = [];
const verifyCapital = (country) => {
  if (country.capital === undefined) {
    return "No capital";
  }
  return country.capital[0];
};

// search operations
// function will be used for filter functionality
const searchedCountry = (
  sortedCountries,
  countriesContainer,
  query,
  section
) => {
  const filteredCountries = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  verifySearchedCountry(
    countriesContainer,
    filteredCountries,
    sortedCountries,
    section
  );
};
const verifySearchedCountry = (
  countriesContainer,
  newArray,
  sortedCountries,
  section
) => {
  if (newArray.length <= 0) {
    countriesContainer.innerHTML =
      "<h3 class='text-danger'>There is no such country<h3>";
  } else {
    countriesContainer.innerHTML = "";
    const cardHtml = newArray.map(generateCard).join("");
    countriesContainer.innerHTML = cardHtml;
    const cards = document.querySelectorAll(".card");
    cardDetails(sortedCountries, cards, section);
  }
};

// function to be used for search only
const searchCountry = (
  countriesContainer,
  searchInput,
  sortedCountries,
  filteredList,
  section
) => {
  searchInput.addEventListener("input", (e) => {
    e.preventDefault();
    localStorage.setItem("filterInput", "");
    localStorage.setItem("searchInput", searchInput.value);
    filteredList.value = "All Countries";
    searchedCountry(
      sortedCountries,
      countriesContainer,
      searchInput.value,
      section
    );
  });
};

// filtering countries

const filteredCountry = (
  sortedCountries,
  countriesContainer,
  query,
  section
) => {
  const filteredCountries = sortedCountries.filter((country) =>
    country.region.toLowerCase().includes(query.toLowerCase())
  );
  verifyFilteredCountry(
    countriesContainer,
    filteredCountries,
    sortedCountries,
    section
  );
};
const verifyFilteredCountry = (
  countriesContainer,
  newArray,
  sortedCountries,
  section
) => {
  if (newArray.length <= 0) {
    countriesContainer.innerHTML =
      "<h3 class='text-danger'>There is no such country<h3>";
  } else {
    countriesContainer.innerHTML = "";
    const cardHtml = newArray.map(generateCard).join("");
    countriesContainer.innerHTML = cardHtml;
    const cards = document.querySelectorAll(".card");
    cardDetails(sortedCountries, cards, section);
  }
};

function filterCountry(
  countriesContainer,
  filteredList,
  sortedCountries,
  searchInput,
  section
) {
  filteredList.addEventListener("change", (e) => {
    e.preventDefault();

    if (filteredList.value.includes("All Countries")) {
      const cardHtml = sortedCountries.map(generateCard).join("");
      countriesContainer.innerHTML = "";
      countriesContainer.innerHTML = cardHtml;
    } else {
      countriesContainer.innerHTML = "";
      filteredCountry(
        sortedCountries,
        countriesContainer,
        filteredList.value,
        section
      );
    }
    // clear the input fields
    localStorage.setItem("filterInput", filteredList.value);
    localStorage.setItem("searchInput", "");
    searchInput.value = "";
  });
}
export {
  verifyCapital,
  verifySearchedCountry,
  searchedCountry,
  searchCountry,
  filterCountry,
  filteredCountry,
};
// cardDetails
const cardCountry = (sortedCountries, query) => {
  const filteredCountry = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  return filteredCountry;
};
const getNativeName = (country) => {
  const nativeNameArray = Object.values(country.name.nativeName);
  if (nativeNameArray === undefined) {
    return "There is no native name";
  }
  return nativeNameArray[nativeNameArray.length - 1].common;
};
const getLanguages = (country) => {
  let languages = "";
  const languagesArray = Object.values(country.languages);
  languagesArray.forEach((language) => {
    languages = language + ", " + languages;
  });
  if (languages === "") {
    return "No languages Spoken";
  }
  // remove the last comma and whitespace in the languages array then return the results
  return languages.slice(0, length - 2);
};
const filterCountryByAltName = (arr, query) => {
  return arr.filter((country) =>
    country.cca3.toLowerCase().includes(query.toLowerCase())
  );
};
export default verifyCapital;
export {
  cardCountry,
  getNativeName,
  getLanguages,
  filterCountryByAltName,
  cardsContainerValue,
};
