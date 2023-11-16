let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                        && currYear === new Date().getFullYear() ? "today" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.textContent = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
    // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

// For dark mode
const modeToggle = document.getElementById("mode-toggle");
const bodyElements = document.querySelectorAll("body *");
modeToggle.addEventListener("change", () => {
    // put dark class on evelry element inside body tag
    document.body.classList.toggle("dark");
})

const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        toggle.style.color = "black";
    }else{
        toggle.style.color = "white";
    }
});
// Update your existing JavaScript code

// ... (your existing code)

// Function to get weather data from the OpenWeatherMap API
async function getWeatherData(date) {
    const apiKey = 'b919eeb30fda3163d1cc0826d5032f07';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=city_name&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
  
  // Function to update the UI with weather information
  function updateWeatherUI(weatherData) {
    const weatherInfoElement = document.querySelector('.weather-info');
    const temperatureElement = weatherInfoElement.querySelector('.temperature');
    const descriptionElement = weatherInfoElement.querySelector('.description');
    const iconElement = weatherInfoElement.querySelector('.weather-icon');
  
    // Use the appropriate properties from the API response
    const temperature = weatherData.list[0].main.temp;
    const description = weatherData.list[0].weather[0].description;
    const icon = weatherData.list[0].weather[0].icon;
  
    temperatureElement.textContent = `${temperature}°C`;
    descriptionElement.textContent = description;
    iconElement.src = `http://openweathermap.org/img/w/${icon}.png`;
  }
  
  // Function to handle errors during weather data retrieval
  function handleWeatherError(error) {
    console.error('Error fetching weather data:', error);
    // Display an error message to the user or use a default weather icon
  }
  
  // ... (your existing code)
  
  // Inside the click event listener for prev and next icons
  icon.addEventListener("click", async () => {
    // ... (your existing code)
  
    try {
      // Fetch weather data for the current date
      const weatherData = await getWeatherData(date);
      // Update the UI with weather information
      updateWeatherUI(weatherData);
    } catch (error) {
      // Handle errors during weather data retrieval
      handleWeatherError(error);
    }
  
    // ... (your existing code)
  });
  
  // ... (your existing code)
  