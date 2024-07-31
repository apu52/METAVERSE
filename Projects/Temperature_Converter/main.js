// Logic for the digital watch
function currentTime() {
    let p1 = document.getElementById("p1");
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    let current_time = `${hr}:${mn}:${ss}`;
    p1.innerHTML = current_time;
    setTimeout(currentTime, 1000);
}
currentTime();

// Logic for temperature converter
function temperature() {
    let inputValue = parseFloat(document.querySelector("#inputValue").value);
    let type1 = document.querySelector("#type1").value;
    let type2 = document.querySelector("#type2").value;
    let result = document.querySelector("#result");

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    let convertedValue;
    switch (type1) {
        case "celsius":
            if (type2 === "fahrenheit") convertedValue = (inputValue * 9 / 5) + 32;
            else if (type2 === "kelvin") convertedValue = inputValue + 273.15;
            else if (type2 === "rankine") convertedValue = (inputValue * 9 / 5) + 491.67;
            else convertedValue = inputValue;
            break;
        case "fahrenheit":
            if (type2 === "celsius") convertedValue = (inputValue - 32) * 5 / 9;
            else if (type2 === "kelvin") convertedValue = (inputValue - 32) * 5 / 9 + 273.15;
            else if (type2 === "rankine") convertedValue = inputValue + 459.67;
            else convertedValue = inputValue;
            break;
        case "kelvin":
            if (type2 === "celsius") convertedValue = inputValue - 273.15;
            else if (type2 === "fahrenheit") convertedValue = (inputValue - 273.15) * 9 / 5 + 32;
            else if (type2 === "rankine") convertedValue = inputValue * 9 / 5;
            else convertedValue = inputValue;
            break;
        case "rankine":
            if (type2 === "celsius") convertedValue = (inputValue - 491.67) * 5 / 9;
            else if (type2 === "fahrenheit") convertedValue = inputValue - 459.67;
            else if (type2 === "kelvin") convertedValue = inputValue * 5 / 9;
            else convertedValue = inputValue;
            break;
    }

    result.innerHTML = `${convertedValue.toFixed(3)} ${type2 === "kelvin" ? "K" : type2 === "celsius" ? "&deg;C" : type2 === "fahrenheit" ? "&deg;F" : "&deg;R"}`;
}
