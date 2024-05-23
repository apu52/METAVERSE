const apiKey = "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";
const imageCount = 4; // how many images we want
let selectImageNumber = null;

document.addEventListener("DOMContentLoaded", () => {
  const recentSearchesDiv = document.querySelector(".rec");

  const generateButton = document.getElementById("generate");
  const userPromptInput = document.getElementById("user-prompt");
  const imageGrid = document.getElementById("image-grid");
  const loadingDiv = document.getElementById("loading");

  // Hide the loading animation initially
  loadingDiv.style.display = "none";

  // Function to get recent searches from local storage
  const getRecentSearches = () => {
    const searches = localStorage.getItem("recentSearches");
    return searches ? JSON.parse(searches) : [];
  };

  // Function to save a new search to local storage
  const saveSearch = (search) => {
    let searches = getRecentSearches();
    if (!searches.includes(search)) {
      searches.unshift(search); // Add to the beginning
      if (searches.length > 5) {
        searches = searches.slice(0, 5); // Keep only the last 5 searches
      }
      localStorage.setItem("recentSearches", JSON.stringify(searches));
    }
  };

  // Function to display recent searches
  const displayRecentSearches = () => {
    const searches = getRecentSearches();
    recentSearchesDiv.innerHTML = "<h2>Recent Searches:</h2>";
    const list = document.createElement("ul");
    searches.forEach((search) => {
      const listItem = document.createElement("li");
      listItem.textContent = search;
      list.appendChild(listItem);
    });
    recentSearchesDiv.appendChild(list);
  };

  // Display recent searches on page load
  displayRecentSearches();

  // Event listener for the generate button
  generateButton.addEventListener("click", () => {
    const prompt = userPromptInput.value.trim();
    if (prompt) {
      saveSearch(prompt);
      displayRecentSearches();
      generateImages(prompt);
    }
  });

  // Disable generate button
  const disableGenerateButton = () => {
    generateButton.disabled = true;
  };

  // Enable generate button
  const enableGenerateButton = () => {
    generateButton.disabled = false;
  };

  // Clear image grid
  const clearImageGrid = () => {
    imageGrid.innerHTML = "";
  };

  // Generate images
  const generateImages = async (input) => {
    disableGenerateButton();
    clearImageGrid();

    loadingDiv.style.display = "block";

    const imageUrls = []; // array to store all the image links
    for (let i = 0; i < imageCount; i++) {
      const randomNum = getRandomNum(1, 1000);

      // all code below explaination at - https://huggingface.co/docs/api-inference/quicktour
      const prompt = `${input} ${randomNum}`;
      const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );
      if (!response.ok) {
        alert("Unable to generate images...");
        enableGenerateButton();
        return;
      }

      const result = await response.blob(); // blob is to get the response as promise
      const imageUrl = URL.createObjectURL(result); // URL returns a newly created url which was given by response
      imageUrls.push(imageUrl);

      // Creating image elements
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = `art-${i + 1}`;
      img.onclick = () => downloadImage(imageUrl, i);
      imageGrid.appendChild(img);
    }
    loadingDiv.style.display = "none";
    enableGenerateButton();

    selectImageNumber = null;
  };

  // Generate random number between min and max
  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Download image
  const downloadImage = (imageUrl, imageNumbers) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `image-${imageNumbers + 1}.png`;
    link.click();
  };
});

// event listener for generate button
document.getElementById("generate").addEventListener("click", () => {
  const input = document.getElementById("user-prompt").value;
  generateImages(input);
});

// state management for the sign up and sign in
function useEffect() {
  if (
    document.referrer.includes("signup.html") ||
    document.referrer.includes("signin.html")
  ) {
    const text = document.getElementById("up");
    const text1 = document.getElementById("in");
    text.innerHTML = "Signed-in";
    text1.innerHTML = "";
    text1.style.background = "#900c3f";
  }
}
useEffect();
