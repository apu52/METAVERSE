// Constants
const apiKey = 'b919eeb30fda3163d1cc0826d5032f07';
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=city_name';

// DOM Elements
const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span');
const modeToggle = document.getElementById('mode-toggle');
const bodyElements = document.querySelectorAll('body *');
const toggle = document.getElementById('toggleDark');
const weatherInfoElement = document.querySelector('.weather-info');

// Date Initialization
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// Months Array
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

// Render Calendar Function
const renderCalendar = () => {
    // ... (your existing renderCalendar function)
};

// Get Weather Data Function
const getWeatherData = async () => {
    try {
        const response = await fetch(`${apiUrl}&appid=${apiKey}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

// Update Weather UI Function
const updateWeatherUI = (weatherData) => {
    // ... (your existing updateWeatherUI function)
};

// Handle Weather Error Function
const handleWeatherError = (error) => {
    console.error('Error fetching weather data:', error);
    // Display an error message to the user or use a default weather icon
};

// Toggle Theme Function
const toggleTheme = () => {
    document.body.classList.toggle('dark');
};

// Event Listeners
prevNextIcon.forEach(icon => {
    icon.addEventListener('click', async () => {
        // ... (your existing click event listener code)

        try {
            const weatherData = await getWeatherData();
            updateWeatherUI(weatherData);
        } catch (error) {
            handleWeatherError(error);
        }

        // ... (your existing code)
    });
});

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        toggle.style.color = 'black';
    } else {
        toggle.style.color = 'white';
    }
});

// Initial Render
renderCalendar();
