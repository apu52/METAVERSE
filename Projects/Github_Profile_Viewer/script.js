const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const profileContainer = document.getElementById("profile");

const showUserProfile = async (username, options) => {
  try {
    const [userData, reposData] = await Promise.all([
      axios(APIURL + username),
      axios(APIURL + username + "/repos?sort=" + options.sort + "&per_page=" + options.per_page + "&type=" + options.type)
    ]);

    displayUserProfile(userData.data);
    displayUserRepos(reposData.data, options);
  } catch (error) {
    displayError("User not found");
  }
};

const displayUserProfile = (user) => {
  const profileHTML = `
    <div class="profile">
      <img src="${user.avatar_url}" alt="${user.login}" />
      <h2>${user.login}</h2>
      <p id ="lol">${user.bio || "No bio available"}</p>
      <p id ="lol">Followers: ${user.followers}</p>
      <p id ="lol">Following: ${user.following}</p>
      <p id ="lol">Public Repositories: ${user.public_repos}</p>
      <a href="${user.html_url}" target="_blank">View on GitHub</a>
    </div>
  `;
  profileContainer.innerHTML = profileHTML;
};

const displayUserRepos = (repos, options) => {
  const reposContainer = document.createElement("div");
  reposContainer.classList.add("repos");

  repos.forEach((repo) => {
    const repoElement = document.createElement("div");
    repoElement.classList.add("repo");

    repoElement.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description available"}</p>
      <p>Language: ${repo.language || "Unknown"}</p>
      <p>Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count} | Watchers: ${repo.watchers_count}</p>
      <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;

    reposContainer.appendChild(repoElement);
  });

  profileContainer.appendChild(reposContainer);
};

const displayError = (message) => {
  profileContainer.innerHTML = `<p class="error">${message}</p>`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const sortOption = document.getElementById("sort").value;
  const typeOption = document.getElementById("type").value;
  const perPageOption = document.getElementById("per_page").value;

  const options = {
    sort: sortOption,
    type: typeOption,
    per_page: perPageOption
  };

  if (username) {
    showUserProfile(username, options);
  }
});

