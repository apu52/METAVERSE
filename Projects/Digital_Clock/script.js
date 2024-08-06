const hrs = document.getElementById('hrs');
const min = document.getElementById('mins');
const sec = document.getElementById('secs');
const date = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const arr = ["Sunday","Monday",'Tuesday','Wednesday','Thursday','Friday','Saturday'];
const dayName = document.getElementById('dayName');
let time = new Date();
const day = time.getDay();
date.innerHTML = time.getDate();
month.innerHTML = time.getMonth()+1;
year.innerHTML = time.getFullYear();
dayName.innerHTML = arr[day];
setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
}, 1000);

