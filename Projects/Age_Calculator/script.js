let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

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
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
    result.style.color = '#fff';
    result.style.fontWeight = 600;
    result.style.lineHeight = '30px';
}

function getDayInMonth(year,month){
    return (new Date(year, month, 0)).getDate();
}
function calculateAge() {
    var inputDate = document.getElementById('date').value;
    var unit = document.getElementById('unitSelector').value;

    var birthDate = new Date(inputDate);
    var currentDate = new Date();

    var timeDiff = currentDate - birthDate;

    switch (unit) {
        case 'years':
            var age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
            displayResult(age);
            break;
        case 'months':
            var ageInMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
            displayResult(ageInMonths);
            break;
        case 'days':
            var ageInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            displayResult(ageInDays);
            break;
        case 'dogYears':
            var ageInDogYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25) * 7); // Assuming 1 human year = 7 dog years
            displayResult(ageInDogYears);
            break;
        default:
            alert('Invalid unit selected');
    }
}

function displayResult(age) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Your age is: ' + age;
}

