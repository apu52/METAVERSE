// This Function is used to take realtime date and time from the system.
function updatetill() {
    const currentDatetime = new Date();
    const year = currentDatetime.getFullYear();
    const month = String(currentDatetime.getMonth() + 1).padStart(2, "0");
    const day = String(currentDatetime.getDate()).padStart(2, "0");
    const hours = String(currentDatetime.getHours()).padStart(2, "0");
    const minutes = String(currentDatetime.getMinutes()).padStart(2, "0");
    const formattedDatetime = `${year}-${month}-${day}T${hours}:${minutes}`;

    document.getElementById("ip2").value = formattedDatetime;
}

// When the webpage reloads, the current time gets updated automatically
window.onload = function () {
    updatetill();
    setDefaultDOB(); // Call the function to set the default DOB when the page loads
};

// Function to set the default value for the date of birth input field
function setDefaultDOB() {
    const currentYear = new Date().getFullYear();
    const defaultDOB = `${currentYear}-01-01T00:00`;
    document.getElementById("ip1").value = defaultDOB;
}

// This function is used to calculate the actual age using given inputs
function calculateage() {
    const birthDateInput = document.getElementById("ip1").value;
    const currentDateInput = document.getElementById("ip2").value;
    const currentDatetime = new Date(currentDateInput);
    const year = currentDatetime.getFullYear();
    const month = currentDatetime.getMonth() + 1;
    const day = currentDatetime.getDate();
    console.log(day);

    // Here we check if user doesn't give any input, it will not work further anymore.
    if (
        birthDateInput === "" ||
        currentDateInput === "" ||
        !birthDateInput ||
        !currentDateInput ||
        !birthDateInput.trim() ||
        !currentDateInput.trim()
    ) {
        showAlert("Please Enter a Valid Date/Time !");
        return;
    }

    // Getting data that user submitted to it
    const userip = new Date(birthDateInput);
    const birthYear = userip.getFullYear();
    const monthip = userip.getMonth() + 1;

    const ageInMilliseconds = currentDatetime - userip;
    const fyear = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const remainingMilliseconds =
        ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
    const fmonth = Math.floor(
        remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
    );
    const fmonth1 = 12 * fyear + fmonth;

    document.getElementById("op1").innerHTML =
        "Age = " + fyear + " Years " + fmonth + " Months";
    document.getElementById("op2").innerHTML = "~ " + fmonth1 + " Months";

    var timeDifference = Math.abs(currentDatetime - userip);

    // custom alert function:
    function showAlert(message) {
        const alertBox = document.getElementById("custom-alert");
        const alertMessage = document.getElementById("alert-message");
        alertMessage.innerText = message;
        alertBox.style.display = "block";

        const closeButton = document.getElementById("close-alert");
        closeButton.addEventListener("click", function () {
            alertBox.style.display = "none";
        });
    }

    // If the user gives a date/time of the future, it will show 0 in all fields.
    if (currentDatetime < userip) {
        timeDifference = 0;
        document.getElementById("op1").innerHTML = "Age = 0 Years 0 Months";
        document.getElementById("op2").innerHTML = "- 0 Months";
        document.getElementById("op3").innerHTML = "- 0 Days";
        document.getElementById("op7").innerHTML = "~ 0 Weeks";
        document.getElementById("op4").innerHTML = "- 0 Hours";
        document.getElementById("op5").innerHTML = "- 0 Minutes";
        document.getElementById("op6").innerHTML = "- 0 Seconds";
        document.getElementById("photo").src = "./assets/error.svg";
        showAlert("Please enter a valid date!");
        return;
    }

    const fday = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("op3").innerHTML = "- " + fday + " Days";

    const fweeks = (fday / 7).toFixed(1);

    document.getElementById("op7").innerHTML = "~ " + fweeks + " Weeks";

    const fhours = Math.floor(timeDifference / (1000 * 60 * 60));

    document.getElementById("op4").innerHTML = "- " + fhours + " Hours";

    const fminute = Math.floor(timeDifference / (1000 * 60));

    document.getElementById("op5").innerHTML = "- " + fminute + " Minutes";

    const fsecond = Math.floor(timeDifference / 1000);

    document.getElementById("op6").innerHTML = "- " + fsecond + " Seconds";

    // Here we just check for age group so that we can show images according to it.
    if (fyear < 5 && fyear >= 0) {
        document.getElementById("photo").src = "./assets/child1.svg";
    }
    if (fyear < 10 && fyear >= 5) {
        document.getElementById("photo").src = "./assets/child2.svg";
    }
    if (fyear < 15 && fyear >= 10) {
        document.getElementById("photo").src = "./assets/teen1.svg";
    }
    if (fyear < 20 && fyear >= 15) {
        document.getElementById("photo").src = "./assets/teen2.svg";
    }
    if (fyear < 25 && fyear >= 20) {
        document.getElementById("photo").src = "./assets/20to25.svg";
    }
    if (fyear < 30 && fyear >= 25) {
        document.getElementById("photo").src = "./assets/25to30.svg";
    }
    if (fyear < 40 && fyear >= 30) {
        document.getElementById("photo").src = "./assets/30to40.svg";
    }
    if (fyear < 50 && fyear >= 40) {
        document.getElementById("photo").src = "./assets/40to50.svg";
    }
    if (fyear <= 100 && fyear >= 50) {
        document.getElementById("photo").src = "./assets/50plus.svg";
    }
    if (fyear >= 100) {
        document.getElementById("photo").src = "./assets/god.svg";
    }
}

//PDF Generation code 
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const age = document.getElementById('op1').innerText;
    const months = document.getElementById('op2').innerText;
    const weeks = document.getElementById('op7').innerText;
    const days = document.getElementById('op3').innerText;
    const hours = document.getElementById('op4').innerText;
    const minutes = document.getElementById('op5').innerText;
    const seconds = document.getElementById('op6').innerText;

    // Add the rest of the content
    doc.setFontSize(12);
    doc.text(age, 10, 40);
    doc.text(months, 10, 50);
    doc.text(weeks, 10, 60);
    doc.text(days, 10, 70);
    doc.text(hours, 10, 80);
    doc.text(minutes, 10, 90);
    doc.text(seconds, 10, 100);

    // Save the PDF
    doc.save('Age_Calculator_Results.pdf');
}
