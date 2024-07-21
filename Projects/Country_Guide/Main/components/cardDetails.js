import countries from "../main";
import verifyCapital, {
  cardCountry,
  filterCountryByAltName,
  getLanguages,
  getNativeName,
} from "../modules/functions";
const borderCountries = (sortedCountries, country) => {
  let borders = ``;
  if (country.borders === undefined) {
    return `
      <span class="border border-country">I do not have any borders!</span>
    `;
  } else {
    country.borders.forEach((border) => {
      const countryBorders = filterCountryByAltName(sortedCountries, border);
      countryBorders.forEach((border) => {
        borders =
          `<span class="border border-country">${border.name.common}</span>` +
          borders;
      });
    });
  }
  return borders;
};
function cardDetail(sortedCountries, country) {
  return `
  <div class="flag col-lg-6 text-center">
        <img
          src=${country.flags.png}
          class="card-img-top"
          alt=${country.flags.alt}
        />
      </div>
      <div class="content col-lg-6 col-md-12 text-start">
        <div class="row my-3">
          <h1 class="col-lg-12 fw-bold  country-name">${
            country.name.common
          }</h1>
        </div>
        <div class="row my-0">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="my-2">
              <span class="fw-bold native-name">Native Name: </span>
              <span class="native">${getNativeName(country)}</span>
            </div>
            <div class="my-2">
              <span class="fw-bold region-name">Region: </span>
              <span class="region">${country.region}</span>
            </div>
            <div class="my-2">
              <span class="fw-bold capital-name">Capital: </span>
              <span class="capital">${verifyCapital(country)}</span>
            </div>
            <div class="my-2">
              <span class="fw-bold currency-name">Currencies: </span>
              <span class="currency">${
                country.currencies === undefined
                  ? "Undefined"
                  : Object.values(country.currencies)[0].name
              }</span>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="my-2">
              <span class="fw-bold population-size">Population: </span>
              <span class="population">${country.population}</span>
            </div>
            <div class="my-2">
              <span class="fw-bold sub-region-name">Sub Region: </span>
              <span class="sub-region">${country.subregion}</span>
            </div>
           <!--  <div class="my-2">
              <span class="fw-bold top-level-domain-name"
                >Top Level Domain:
              </span>
             <span class="top-level-domain">${
                country.tld === undefined ? "undefined" : country.tld[0]
              }</span> 
            </div> -->
            <div class="my-2">
              <span class="fw-bold language-name">Languages: </span>
              <span class="Language">${getLanguages(country)}</span>
            </div>
          </div>
        </div>
       <!-- <div class="border-countries row my-3">
          <div class="col-lg-12 d-flex gap-3 flex-wrap align-items-center" id="border-countries">
            <span class="fw-bold me-4 border-country-names"
            console.log(document.querySelectorAll(".border-country"));     >Border Countries:
            </span>
                  ${borderCountries(sortedCountries, country)}
          </div> -->
        </div>
      </div>
  `;
}

function cardInformation(sortedCountries, country) {
  return `
  <button class="back">Back</button>
  <div class="row country-details">
      ${cardDetail(sortedCountries, country)}
      
    </div>
    
    `;
}

function cardDetails(sortedCountries, cards, section, borderCountries = "") {
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const country = card.querySelector("h6").textContent;
      const countryDetails = cardCountry(sortedCountries, country);
      countryDetails.forEach((country) => {
        section.classList.remove("cards");
        section.classList.add("card-display", "container-fluid");
        section.innerHTML = cardInformation(sortedCountries, country);
        borderCountries = document.querySelectorAll(".border-country");
      });
      // adding the country details when border is clicked

      const countryDetail = document.querySelector(".country-details");

      borderCountries.forEach((borderCountry) => {
        borderCountry.addEventListener("click", (e) => {
          e.preventDefault();
          const country = borderCountry.innerHTML;

          const countryDetails = cardCountry(sortedCountries, country);

          countryDetails.forEach((country) => {
            countryDetail.innerHTML = cardDetail(sortedCountries, country);
            borderCountries = document.querySelectorAll(".border-country");
          });
        });
      });
      // back button functionality added here
      // if we press the back button, we want to alter the section not the inner html incase their is a value of the search input presented
      const backButton = document.querySelector(".back");
      backButton.addEventListener("click", () => {
        countries();
      });
    });
  });
}

export default cardDetails;
