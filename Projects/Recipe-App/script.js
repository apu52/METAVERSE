const searchForm = document.querySelector('form'); // Assuming the form is the only one on your page

// Now, use querySelector on the form to get the input field
const searchBox = searchForm.querySelector('.searchBox');
const searchBtn = searchForm.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseButton = document.querySelector('.recipe-close-btn');
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <!-- Other content goes here -->
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}</span> Category</p>

        `;
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);
        //Adding eventListener to recipe
        button.addEventListener('click', () => {
            openRecipePopup(meal);
        });


        recipeContainer.appendChild(recipeDiv);
    });
}
const fetchIngredents = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }
        else {
            break;
        }
    }
    return ingredientsList;
}
const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientsList">${fetchIngredents(meal)}</ul>
    <div>
        <h3>Instructions:</h3>
        <p class="recipeInstructions">${meal.strInstructions}</p>
        </div>
    `
    recipeDetailsContent.parentElement.style.display = "block";
}
recipeCloseButton.addEventListener('click', () => {
    recipeDetailsContent.parentElement.style.display = "none";
});
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (!searchInput) {
        recipeContainer.innerHTML = `<h2>Type the meal in searchBox</h2>`;
        return;
    }
    fetchRecipes(searchInput);
    // console.log("Button clicked");
});
/*

javascript
Copy code
const searchForm = document.querySelector('form');
const searchBox = searchForm.querySelector('.searchBox');
const searchBtn = searchForm.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseButton = document.querySelector('.recipe-close-btn');
searchForm: Selects the first <form> element on the page.
searchBox: Selects the element with the class searchBox within the searchForm.
searchBtn: Selects the element with the class searchBtn within the searchForm.
recipeContainer: Selects the element with the class recipe-container.
recipeDetailsContent: Selects the element with the class recipe-details-content.
recipeCloseButton: Selects the element with the class recipe-close-btn.
Fetching Recipes Function:

javascript
Copy code
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        // Creating a recipe card for each meal
        // ...
    });
}
Uses the fetch function to get recipe data from "https://www.themealdb.com/" API based on the provided search query.
Displays a loading message while fetching.
Clears the recipe container (recipeContainer.innerHTML = "";) before displaying new recipes.
Iterates over the fetched meals and creates a recipe card for each meal.
Creating Recipe Cards:

javascript
Copy code
const recipeDiv = document.createElement('div');
recipeDiv.classList.add('recipe');
recipeDiv.innerHTML = `
    <!-- Recipe content goes here -->
`;
Creates a div element for each recipe.
Adds the recipe class to the created div.
Populates the div with HTML content, including an image, meal name, area, category, and a "View Recipe" button.
Appends the recipe div to the recipeContainer.
Fetching Ingredients Function:

javascript
Copy code
const fetchIngredents = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
        // Iterates over ingredients and measures
        // ...
    }
    return ingredientsList;
}
Takes a meal object as an argument and generates an HTML list of ingredients and measures.
Loops through ingredient and measure properties (strIngredient1, strMeasure1, etc.) up to 20.
Appends each ingredient and measure to the ingredientsList.
Opening Recipe Popup:

javascript
Copy code
const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <!-- Recipe details content goes here -->
    `;
    recipeDetailsContent.parentElement.style.display = "block";
}
Takes a meal object as an argument and populates the recipeDetailsContent with the meal's details (name, ingredients, instructions).
Sets the display property of the parent element to "block" to show the recipe details popup.
Closing Recipe Popup:

javascript
Copy code
recipeCloseButton.addEventListener('click', () => {
    recipeDetailsContent.parentElement.style.display = "none";
});
Adds a click event listener to the recipe close button.
Sets the display property of the parent element to "none" to hide the recipe details popup when the button is clicked.
Search Button Event Listener:

javascript
Copy code
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (!searchInput) {
        recipeContainer.innerHTML = `<h2>Type the meal in searchBox</h2>`;
        return;
    }
    fetchRecipes(searchInput);
});
Adds a click event listener to the search button.
Prevents the default form submission behavior.
Retrieves the trimmed value from the search box.
Displays a message if the search input is empty.
Calls the fetchRecipes function with the search input to fetch and display recipes.
This JavaScript code is designed to create an interactive recipe search feature, fetch recipes from an external API, and display detailed information about selected recipes in a popup. The code makes good use of asynchronous functions, event listeners, and DOM manipulation to achieve its functionality.
*/




