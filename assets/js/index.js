// Function to fetch project data from the JSON file
const fetchProjectData = async () => {
  try {
    const response = await fetch('projectData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const projectsData = await response.json();
    return projectsData;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    // Return a default dataset or an empty object
    return {}; // or return a default dataset if you have one
  }
};

// Fetch the project data and update the UI
fetchProjectData().then(projectsData => {
  const projectListContainer = document.querySelector('.project-list');
  if (Object.keys(projectsData).length === 0) {
    projectListContainer.innerHTML = '<p>No projects available. Please check back later.</p>';
  } else {
    projectListContainer.innerHTML = generateLiTags(projectsData);
    getPageNumbers();
    getProjectsInPage();
  }
});

// Generate <li> tags dynamically
const generateLiTags = projectsData => {
  const liTags = [];
  // Loop through all project entries in the projectsData
  for (const key in projectsData) {
    const projectData = projectsData[key];

    if (projectData) {
      const { projectTitle, folderName, thumbnailName } = projectData;

      const liTag = `
          <li class="project-item active" data-filter-item data-category="open source">
            <a href="/Projects/${folderName}" target="_blank" aria-label="${projectTitle}">
              <figure class="project-img">
                <img src="/assets/img/${thumbnailName}" alt="${projectTitle}" loading="lazy">
              </figure>
              <h3 class="project-title"><a href="https://github.com/apu52/METAVERSE/tree/main/Projects/${folderName}" target="_blank" aria-label="${projectTitle}">${key}. ${projectTitle} 🔗</a></h3>
              <p class="project-category">Take a Look and Learn!</p>
            </a>
          </li>
        `;

      liTags.push(liTag);
    }
  }

  return liTags.join('\n');
};

window.addEventListener('scroll', function() {
  var scrollToTopButton = document.getElementById('progress');
  if (window.pageYOffset > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

const searchContainer = document.getElementById("search-container-id");
const searchInput = document.getElementById("searchbar");

searchContainer.addEventListener("click", function () {
  searchInput.focus();
});
