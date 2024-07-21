// arrayOperations(sortedCountries);the getCountries function return a promise
// thus need to work with it the right way using .then() to get the resolved value
import { verifyCapital } from "../modules/functions.js";
function generateCard(country) {
  return `
    <div class = "card countryCard light-mode">
        <img
        src=${country.flags.png}
        class="card-img-top"
        alt= flag of ${country.name.common}
        />
        <div class="card-body p-4">
            <h6 class="card-title fw-bold w-100">${country.name.common}</h6>
            <ul class="card-text fw-light">
                <li>Population: <span>${country.population}</span></li>
                <li>Region: <span>${country.region}</span></li>
                <li>Capital: <span>${verifyCapital(country)}</span></li>
            </ul>
        </div>
    </div>
`;
}
function Card(sortedCountries) {
  const cardHtml = sortedCountries.map(generateCard).join("");
  return `
    <section class="cards">
    <!-- this is the second navigation bar --> 
        <form class="navbar justify-content-between px-5 my-5 gap-3">
            <input
            type="search"
            name="search"
            id="search"
            value = ""
            class="border-0 ps-3"
            placeholder="Search for a country..."
        />
            <select
                name="country"
                id="continent"
                class="px-2"
                placeholder="Filter by Region"
            >
                <option value="placeholder" disabled="" selected="">
                Filter by Region
                </option>
                <option value="All Countries">All Countries</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                
            </select>
        </form>
        <!-- this part is for the cards to be displayed --> 
        <div class="container-fluid row justify-content-center cards-container countries-container">
        <!-- new  card  -->
            ${cardHtml}
        <!-- card end --> 
        </div>
    </section>
  `;
}

export default Card;
export { generateCard };
