function fetchAPI() {
    fetch("https://meme-api.com/gimme")
      .then((data) => {
        if (!data.ok) throw new Error("Not Coming Error");

        return data.json();
      })
      .then((data) => {
        const imageElement = document.getElementById("meme");
        imageElement.setAttribute("src", data.url);
      })
      .catch((error) => {
        fetchAPI();
      });
  }

  fetchAPI();