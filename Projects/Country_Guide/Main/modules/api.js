// adding the country guide api to the website
const url = "https://restcountries.com/v3.1/all";
async function getCountries() {
  try {
    const response = await fetch(url);
    const countries = await response.json();

    // sorting the countries using a function
    const sortedCountries = countries.sort((a, b) => {
      const countryA = a.name.common.toLowerCase();
      const countryB = b.name.common.toLowerCase();
      if (countryA < countryB) return -1;
      if (countryA > countryB) return 1;
      return 0;
    });
    return sortedCountries;
  } catch (err) {
    document.write(err);
  }
}
export default getCountries;
