// Logic for the digital watch
function currentTime() {
    let p1 = document.getElementById("p1")
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    let current_time = hr + ":" + mn + ":" + ss;
    p1.innerHTML = current_time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();



// Logic for temperature converter
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    if (inputValue == "") {
        alert("Please Enter any Number....")
        location.reload()
    }
    else if (type1.value == "celcius" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) * 1
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "celcius" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) + 273.15
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "celcius" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * (9 / 5) + 491.67
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
    else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 32 * (5 / 9)
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * 1
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) - 32 * (5 / 9) + 273.15
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "fahrenheit" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) + 459.67
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
    else if (type1.value == "kelvin" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 273.15
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "kelvin" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) * 1
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "kelvin" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * 1.8
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
    else if (type1.value == "rankine" && type2.value == "celcius") {
        let Celcius = Number.parseInt(inputValue) - 491.67 * (5 / 9)
        result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "rankine" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) - 495.67
        result.innerHTML = Fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "rankine" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) * (5 / 9)
        result.innerHTML = Kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "rankine" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * 1
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
}
