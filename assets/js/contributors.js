document.addEventListener("DOMContentLoaded", function () {
    const contributorsContainer = document.getElementById('contributors');
    const statsContainer = document.getElementById('stats');
    const loadingIndicator = document.getElementById('loading');

    // Fetch contributors and repo stats
    async function fetchData() {
        loadingIndicator.style.display = 'flex';

        try {
            const contributorsResponse = await axios.get('https://api.github.com/repos/apu52/METAVERSE/contributors');
            const contributorsData = contributorsResponse.data;

            const repoResponse = await axios.get('https://api.github.com/repos/apu52/METAVERSE');
            const repoData = repoResponse.data;

            populateStats(repoData, contributorsData);
            populateContributors(contributorsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            loadingIndicator.style.display = 'none';
        }
    }

    function populateStats(repoData, contributors) {
        const stats = [
            { label: "Contributors", value: contributors.length, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>' },
            { label: "Total Contributions", value: contributors.reduce((sum, contributor) => sum + contributor.contributions, 0), icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002  0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>' },
            { label: "GitHub Stars", value: repoData.stargazers_count, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>' },
            { label: "Forks", value: repoData.forks_count, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>' },
        ];

        statsContainer.innerHTML = '';
        stats.forEach((stat, index) => {
            const statCard = document.createElement('div');
            statCard.className = "stat-card";
            statCard.innerHTML = `
                <div class="stat-icon">${stat.icon}</div>
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            `;
            statCard.style.opacity = '0';
            statCard.style.transform = 'translateY(20px)';
            statsContainer.appendChild(statCard);

            setTimeout(() => {
                statCard.style.transition = 'opacity 0.5s, transform 0.5s';
                statCard.style.opacity = '1';
                statCard.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    function populateContributors(contributors) {
        contributorsContainer.innerHTML = '';
        contributors.forEach((contributor, index) => {
            const contributorCard = document.createElement('div');
            contributorCard.className = "contributor-card";
            contributorCard.innerHTML = `
                <img src="${contributor.avatar_url}" alt="${contributor.login}" />
                <h3>${contributor.login}</h3>
                <p>${contributor.type}</p>
                <div class="contributions">${contributor.contributions} contributions</div>
                <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    View Profile
                </a>
            `;
            contributorCard.style.opacity = '0';
            contributorsContainer.appendChild(contributorCard);

            setTimeout(() => {
                contributorCard.style.transition = 'opacity 0.5s';
                contributorCard.style.opacity = '1';
            }, index * 100);
        });
    }

    fetchData();
});