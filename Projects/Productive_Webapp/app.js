//to-do list

let button = document.querySelector(".task button");
let input = document.querySelector(".task input");
let ul = document.querySelector("ul");
let h3 = document.querySelector("h4");
let count = 1;
button.addEventListener("click", function () {
    if (input.value != "") {
        count++;
        h3.innerText = `TOTAL TASK : ${count}`;
        let li = document.createElement("li");
        ul.appendChild(li);
        let div = document.createElement("div");
        div.innerHTML = ` <div>
<button class="notify"><span class="material-symbols-outlined"
        style="font-size: 20px;font-weight: 700; margin: 0px; padding: 0px;">
        notifications_active
    </span></button>
<h2>${input.value}</h2>
</div>
<button>Done</button>`;
        div.setAttribute("class", "task1");
        li.appendChild(div);
        let a = Math.floor(Math.random() * 155 + 100);
        let b = Math.floor(Math.random() * 155 + 100);
        let c = Math.floor(Math.random() * 155 + 100);
        div.style.backgroundColor = `rgb(${a},${b},${c})`;
        input.value = "";
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.innerText == "Done") {
        ul.removeChild(event.target.parentElement.parentElement);
        count--;
        h3.innerText = `TOTAL TASK : ${count}`;
    }
});


//date time
let h2 = document.querySelector(".date");
let h = document.querySelector(".time");
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
h2.innerText = `${arr[date.getDay()]}, ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `;
h.innerText = `Time ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
setInterval(() => {
    const date = new Date();
    h.innerText = `Time ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

//Alarm
ul.addEventListener("click", function (event) {

    if (event.target.innerText == "notifications_active") {
       let time=prompt("Enter Time : hh:mm:ss");
       const date2 = new Date();
       let nexthour=Number(time.substring(0,2))-date2.getHours();
       let nextminit=Number(time.substring(3,5))-date2.getMinutes();
       let nextsec=Number(time.substring(6,8))-date2.getSeconds();
       let delay=(nexthour*3600+nextminit*60+nextsec)*1000
       setTimeout(async function(){
        event.target.parentElement.parentElement.parentElement.style.backgroundColor="red";
        let audio=new Audio("asset/Ringtones.mp3");
        await audio.play();
        alert(`Its Time to ${event.target.parentElement.parentElement.innerText}`);
        audio.pause();
       },delay);
    }
});

//Weather API
let place = document.querySelector(".weather h3");
let temp = document.querySelector(".temp");
let img = document.querySelector(".weather-temp img");
let weat = document.querySelector(".weather h2");
let p = document.querySelector(".weather p");
let get = document.querySelector(".get");
let change = document.getElementById("search");


const url = "http://api.weatherapi.com/v1/current.json?key=dd35b36d343049bdad990057232009&q=";
let q = "jalpaiguri";
async function Weather(q) {
    try {
        let res = await axios(url + q);
        let data = res.data.current;
        place.innerText = q;
        temp.innerHTML = `${data.feelslike_c}&deg;C`;
        img.src = `https:${data.condition.icon}`;
        weat.innerText = data.condition.text;
        p.innerHTML = `pressure: ${data.pressure_mb} millibars
        <br>
        Humidity: ${data.humidity} %
        <br>
        Wind: ${data.wind_dir} , ${data.wind_kph} kph`;
    }
    catch (err) {
        console.log("Invalid City");
    }
}
Weather(q);

get.addEventListener("click",()=>{
if(change.value!=""){
    q=change.value;
    Weather(q);
    q="";
}
});