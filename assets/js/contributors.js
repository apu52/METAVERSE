// Constants and configurations
const CONFIG = {
    owner: 'apu52',
    repoName: 'METAVERSE',
    perPage: 100,
    baseApiUrl: 'https://api.github.com',
    retryAttempts: 3,
    retryDelay: 1000,
    rateLimit: {
        remaining: null,
        resetTime: null
    }
};

class GitHubContributorsFetcher {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.loadingElement = this.createLoadingElement();
        this.errorElement = this.createErrorElement();
    }

    // Create loading spinner
    createLoadingElement() {
        const loading = document.createElement('div');
        loading.className = 'loading-spinner';
        loading.innerHTML = `
            <div class="spinner"></div>
            <p>Loading contributors...</p>
        `;
        return loading;
    }

    // Create error message element
    createErrorElement() {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.display = 'none';
        return error;
    }

    // Handle rate limiting
    async checkRateLimit() {
        if (CONFIG.rateLimit.remaining === 0) {
            const now = Date.now();
            if (now < CONFIG.rateLimit.resetTime) {
                const waitTime = CONFIG.rateLimit.resetTime - now;
                throw new Error(`Rate limit exceeded. Please wait ${Math.ceil(waitTime / 1000)} seconds.`);
            }
        }
    }

    // Update rate limit info from response headers
    updateRateLimit(headers) {
        CONFIG.rateLimit.remaining = parseInt(headers.get('x-ratelimit-remaining'), 10);
        CONFIG.rateLimit.resetTime = parseInt(headers.get('x-ratelimit-reset'), 10) * 1000;
    }

    // Fetch with retry logic
    async fetchWithRetry(url, attempt = 1) {
        try {
            await this.checkRateLimit();
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            this.updateRateLimit(response.headers);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Repository not found');
                }
                throw new Error(`GitHub API error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            if (attempt < CONFIG.retryAttempts) {
                await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay * attempt));
                return this.fetchWithRetry(url, attempt + 1);
            }
            throw error;
        }
    }

    // Fetch contributors for a specific page
    async fetchContributors(pageNumber) {
        const url = `${CONFIG.baseApiUrl}/repos/${CONFIG.owner}/${CONFIG.repoName}/contributors?page=${pageNumber}&per_page=${CONFIG.perPage}`;
        return this.fetchWithRetry(url);
    }

    // Create contributor card with lazy loading
    createContributorCard(contributor) {
        const card = document.createElement('div');
        card.className = 'contributor-card';
        card.innerHTML = `
            <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
                <img 
                    loading="lazy"
                    src="${contributor.avatar_url}"
                    alt="${contributor.login}'s avatar"
                    title="${contributor.login}\nContributions: ${contributor.contributions}"
                />
                <div class="contributor-info">
                    <span class="login">${contributor.login}</span>
                    <span class="contributions">${contributor.contributions} commits</span>
                </div>
            </a>
        `;
        return card;
    }

    // Display error message
    showError(message) {
        this.errorElement.textContent = message;
        this.errorElement.style.display = 'block';
        this.loadingElement.style.display = 'none';
    }

    // Main fetch function
    async fetchAllContributors() {
        if (!this.container) {
            throw new Error('Container element not found');
        }

        this.container.appendChild(this.loadingElement);
        this.container.appendChild(this.errorElement);

        try {
            let allContributors = [];
            let pageNumber = 1;
            
            // Use IntersectionObserver for infinite scrolling
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && this.hasMoreContributors) {
                        this.loadMoreContributors();
                    }
                });
            });

            while (true) {
                const contributors = await this.fetchContributors(pageNumber);
                if (contributors.length === 0) break;
                
                allContributors = allContributors.concat(contributors);
                pageNumber++;
            }

            // Sort contributors by contributions
            allContributors.sort((a, b) => b.contributions - a.contributions);

            // Create and append contributor cards efficiently
            const fragment = document.createDocumentFragment();
            allContributors.forEach(contributor => {
                const card = this.createContributorCard(contributor);
                fragment.appendChild(card);
            });

            // Remove loading spinner and append all cards at once
            this.loadingElement.remove();
            this.container.appendChild(fragment);

            // Add fade-in animation to cards
            requestAnimationFrame(() => {
                this.container.querySelectorAll('.contributor-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 50);
                });
            });

        } catch (error) {
            this.showError(`Failed to load contributors: ${error.message}`);
            console.error('Error fetching contributors:', error);
        }
    }
}

// CSS styles for the components
const styles = `
    .contributor-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .contributor-card.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .error-message {
        color: #721c24;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        padding: 12px;
        margin: 10px 0;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Initialize and use the fetcher
document.addEventListener('DOMContentLoaded', () => {
    const fetcher = new GitHubContributorsFetcher('contributor');
    fetcher.fetchAllContributors();
});