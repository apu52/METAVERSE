let activeTag = '';

// Get all tag buttons
const tagButtons = document.querySelectorAll('.tag-button');

// Add click event listeners to all tag buttons
tagButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    tagButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    // Store the tag name (not the value)
    activeTag = this.textContent.trim().toLowerCase();
    // Reset the search input
    document.getElementById('searchbar').value = '';
    // Refetch and filter projects
    fetchAndFilterProjects();
  });
});

// Fuzzy match function based on Levenshtein distance
function fuzzyMatch(tag, activeTag, threshold = 2) {
  const distance = levenshteinDistance(tag, activeTag);
  return distance <= threshold; // Adjust threshold for fuzzy tolerance
}

// Levenshtein distance function
function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
      );
    }
  }

  return matrix[a.length][b.length];
}

// Modified fetch function to include filtering
function fetchAndFilterProjects() {
  fetch('../../projectData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(projectsData => {
      const projectListContainer = document.querySelector('.project-list');
      // Filter projects based on active tag using fuzzy matching
      const filteredLiTags = generateFilteredLiTags(projectsData);
      projectListContainer.innerHTML = filteredLiTags;
      
      // Show/hide no results message
      const noResults = document.getElementById('noResults');
      if (filteredLiTags.trim() === '') {
        noResults.style.display = 'block';
        projectListContainer.style.display = 'none';
      } else {
        noResults.style.display = 'none';
        projectListContainer.style.display = 'grid';
      }
      
      // Update pagination
      getPageNumbers();
      getProjectsInPage();
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Modified generate function to include fuzzy tag matching
const generateFilteredLiTags = projectsData => {
  const liTags = [];
  
  for (let tagNumber = 1; tagNumber <= 666; tagNumber++) {
    const projectData = projectsData[tagNumber.toString()];
    
    if (projectData) {
      // Check if project should be included based on active tag with fuzzy matching
      if (!activeTag || (projectData.tags && projectData.tags.some(tag => fuzzyMatch(tag.toLowerCase(), activeTag)))) {
        const { projectTitle, folderName, thumbnailName } = projectData;
        
        const liTag = `
          <li class="project-item active" data-filter-item data-category="open source">
            <a href="/Projects/${folderName}" target="_blank" aria-label="${projectTitle}">
              <figure class="project-img">
                <img src="/assets/img/${thumbnailName}" alt="${projectTitle}" loading="lazy">
              </figure>
              <h3 class="project-title">
                <a href="https://github.com/apu52/METAVERSE/tree/main/Projects/${folderName}" 
                   target="_blank" 
                   aria-label="${projectTitle}">
                   ${tagNumber}. ${projectTitle} 🔗
                </a>
              </h3>
              <p class="project-category">Take a Look and Learn!</p>
            </a>
          </li>
        `;
        
        liTags.push(liTag);
      }
    }
  }
  
  return liTags.join('\n');
};

// Add CSS for active tag button
const style = document.createElement('style');
style.textContent = `
  .tag-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #e5e7eb;
    transition: all 0.3s ease;
  }
  
  .tag-button.active {
    background-color: #4a90e2;
    color: white;
  }
`;
document.head.appendChild(style);

// Initialize the page with all projects
fetchAndFilterProjects();
