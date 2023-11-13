// Fetch the project data from the JSON file
fetch('./projectData.json')
  .then(response => response.json())
  .then(projectsData => {
    const projectListContainer = document.querySelector('.project-list');
    projectListContainer.innerHTML = generateLiTags(projectsData);
    getPageNumbers();
    getProjectsInPage();
  })


// Generate <li> tags dynamically
const generateLiTags = projectsData => {
  const liTags = [];

  for (let tagNumber = 1; tagNumber <= 666; tagNumber++) {
    const projectData = projectsData[tagNumber.toString()];

    if (projectData) {
      const { projectTitle, folderName, thumbnailName } = projectData;

      const liTag = `
          <li class="project-item active" data-filter-item data-category="open source">
            <a href="./Projects/${folderName}" target = "_blank" aria-label=${projectTitle}>
              <figure class="project-img">

                <img src="./assets/img/${thumbnailName}" alt="${projectTitle}" loading="lazy">
              </figure>
              <h3 class="project-title"><a href="https://github.com/apu52/METAVERSE/tree/main/Projects/${folderName}" target="_blank" aria-label=${projectTitle}>${tagNumber}. ${projectTitle} 🔗</a></h3>
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
  // Focus on the input field when the div is clicked
  searchInput.focus();
});
