// Function to generate QR code
function generateQRCode(text) {
    // Clear existing content
    $("#qrCode").empty();

    var qrcode = new QRCode(document.getElementById("qrCode"), {
        text: text,
        width: 128,
        height: 128
    });
}

// Initial Demo data
var userData = {
    name: "DEMO",
    employeeId: "DEMO123",
    profileImage: "demo.png" // Default profile image
};

// Display user data
$("#name").text(userData.name);
$("#employeeId").text(userData.employeeId);
$("#profileImg").attr("src", userData.profileImage);

// Generate QR code with user data
var qrText = "Name: " + userData.name + "\nEmployee ID: " + userData.employeeId;
generateQRCode(qrText);

// Function to update ID card
function updateIDCard() {
    var newName = $("#newName").val();
    var newEmployeeId = $("#newEmployeeId").val();
    var newProfileImage = $("#profileImage").val() || "demo.png"; // Use default if not provided

    // Update user data
    $("#name").text(newName);
    $("#employeeId").text(newEmployeeId);
    $("#profileImg").attr("src", newProfileImage);

    // Generate QR code with updated user data
    var updatedQrText = "Name: " + newName + "\nEmployee ID: " + newEmployeeId;
    generateQRCode(updatedQrText);
}
