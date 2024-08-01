const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const country = "in";
const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

let requestURL;
let articles = [];

// Create cards from data
const generateUI = (articles) => {
  container.innerHTML = "";
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <div class="news-image-container">
        <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
      </div>
      <div class="news-content">
        <div class="news-title">${item.title}</div>
        <div class="news-description">${item.description || item.content || ""}</div>
        <a href="${item.url}" target="_blank" class="view-button">Read More</a>
      </div>`;
    container.appendChild(card);
  }
};

// Fetch and update news articles
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  articles = data.articles;
  generateUI(articles);
};

// Search functionality
const searchArticles = (query) => {
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.description?.toLowerCase().includes(query.toLowerCase()) ||
    article.content?.toLowerCase().includes(query.toLowerCase())
  );
  generateUI(filteredArticles);
};

// Category Selection
const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  e.target.classList.add("active");
  getNews();
};

// Options Buttons
const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${
      i == "general" ? "active" : ""
    }" onclick="selectCategory(event,'${i}')">${i}</button>`;
  }
};

const init = () => {
  optionsContainer.innerHTML = "";
  createOptions();
  getNews();
};

window.onload = () => {
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
  init();
};

// Event listeners for search
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  searchArticles(query);
});

// Optional: Search when pressing Enter key
searchInput.addEventListener('keyup', (event) => {
    searchButton.click();
  
});
searchInput.addEventListener('change', (event) => {
    searchButton.click();
  
});
