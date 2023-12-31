let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

// function calculateAge(){
//     let birthDate = new Date(userInput.value);

//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth()+1;
//     let y1 = birthDate.getFullYear();

//     let today = new Date();

//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     let d3,m3,y3;

//     y3 = y2 - y1;

//     if(m2 >= m1){
//         m3 = m2 - m1;
//     }
//     else{
//         y3--;
//         m3 = 12 + m2 - m1;
//     }
//     if(d2>=d1){
//         d3 = d2 - d1;
//     }
//     else{
//         m3--;
//         d3 = getDayInMonth(y1,m1)+d2-d1;
//     }
//     if(m3<0){
//         m3 = 11;
//         y3--;
//     }
//     result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
//     result.style.color = '#fff';
//     result.style.fontWeight = 600;
//     result.style.lineHeight = '30px';
// }

// function getDayInMonth(year,month){
//     return (new Date(year, month, 0)).getDate();
// }

function calculateAge() {
    var inputDate = document.getElementById('date').value;
    var unit = document.getElementById('unitSelector').value;

    var birthDate = new Date(inputDate);
    var currentDate = new Date();

    var timeDiff = currentDate - birthDate;

    switch (unit) {
        case 'years':
            var age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
            var units = 'years';
            displayResult(age,units); 
            break;
        case 'months':
            var ageInMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
            var units = 'months';
            displayResult(ageInMonths,units);
            break;
        case 'days':
            var ageInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            var units = 'days';
            displayResult(ageInDays,units);
            break;
        case 'dogYears':
            var ageInDogYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25) * 7); // Assuming 1 human year = 7 dog years
            var units = 'dog years';
            displayResult(ageInDogYears,units);
            break; 
        case 'ymd': 

            let d1 = birthDate.getDate();
            let m1 = birthDate.getMonth()+1;
            let y1 = birthDate.getFullYear();

            let d2 = currentDate.getDate();
            let m2 = currentDate.getMonth() + 1;
            let y2 = currentDate.getFullYear();

            let d3,m3,y3;

            y3 = y2 - y1;

            if(m2 >= m1){
                m3 = m2 - m1;
            }
            else{
                y3--;
                m3 = 12 + m2 - m1;
            }
            if(d2>=d1){
                d3 = d2 - d1;
            }
            else{
                m3--;
                d3 = getDayInMonth(y1,m1)+d2-d1;
            }
            if(m3<0){
                m3 = 11;
                y3--;
            }
            result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old!`; 
            if (y3 === undefined || m3 === undefined || d3 === undefined ) {
                var ageymd = NaN;
                var units = "years, months and days"; 
                displayResult(ageymd, units);
            }
            break;
        default:
            alert('Invalid unit selected');
    }
}

function displayResult(age, units) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'You are ' + age + ' ' + units + ' old!';
}

function resetFields() {
    const result = document.getElementById('result');
    result.innerText = '';
    document.getElementById('date').value = ''; 
    document.getElementById('unitSelector').value = 'ymd';
  }