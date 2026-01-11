let activeTag = '';

// Get all tag buttons
const tagButtons = document.querySelectorAll('.tag-button');

tagButtons.forEach(button => {
  button.addEventListener('click', function () {
    tagButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    activeTag = this.textContent.trim().toLowerCase();
    const searchbar = document.getElementById('searchbar');
    if (searchbar) searchbar.value = '';
    fetchAndFilterProjects();
  });
});

// ---------- FUZZY MATCH ----------
function fuzzyMatch(tag, activeTag, threshold = 2) {
  return levenshteinDistance(tag, activeTag) <= threshold;
}

function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[a.length][b.length];
}

// ---------- FETCH + FILTER ----------
function fetchAndFilterProjects() {
  fetch('./projectData.json') // ✅ FIXED PATH
    .then(res => {
      if (!res.ok) throw new Error('Failed to load project data');
      return res.json();
    })
    .then(data => {
      const projectList = document.querySelector('.project-list');
      if (!projectList) return;

      const html = generateFilteredLiTags(data);
      projectList.innerHTML = html;

      const noResults = document.getElementById('noResults');
      if (html.trim() === '') {
        noResults && (noResults.style.display = 'block');
        projectList.style.display = 'none';
      } else {
        noResults && (noResults.style.display = 'none');
        projectList.style.display = 'grid';
      }

      getPageNumbers();
      getProjectsInPage();
    })
    .catch(err => console.error(err));
}

// ---------- GENERATE PROJECT CARDS ----------
function generateFilteredLiTags(projectsData) {
  const liTags = [];

  for (let i = 1; i <= 666; i++) {
    const project = projectsData[i.toString()];
    if (!project) continue;

    if (
      activeTag &&
      !(project.tags && project.tags.some(t => fuzzyMatch(t.toLowerCase(), activeTag)))
    ) continue;

    const { projectTitle, folderName, thumbnailName } = project;

    liTags.push(`
      <li class="project-item active">
        <a 
          href="./Projects/${folderName}/index.html"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <figure class="project-img">
            <img 
              src="./assets/img/${thumbnailName}" 
              alt="${projectTitle}" 
              loading="lazy"
              onerror="this.src='./assets/img/placeholder.png'"
            >
          </figure>
          <h3 class="project-title">
            ${i}. ${projectTitle}
          </h3>
        </a>

        <p class="project-category">Take a Look and Learn!</p>

        <a 
          href="https://github.com/apu52/METAVERSE/tree/main/Projects/${folderName}" 
          target="_blank"
          class="github-link"
        >
          View Source 🔗
        </a>
      </li>
    `);
  }

  return liTags.join('\n');
}

// ---------- FILTER TOGGLE ----------
const filterButton = document.getElementById('filter-button');
const tagsContainer = document.getElementById('tags-container');

if (filterButton && tagsContainer) {
  filterButton.addEventListener('click', () => {
    tagsContainer.classList.toggle('hidden');
  });
}

// ---------- INIT ----------
fetchAndFilterProjects();
