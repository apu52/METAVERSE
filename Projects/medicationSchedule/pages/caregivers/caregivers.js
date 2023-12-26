contacts = [
  {
    name: "Rakesh",
    position: "Friend",
  },
  {
    name: "Mr Otto",
    position: "Neighbour",
  },
  {
    name: "Lorem Ipsum",
    position: "Daughter",
  },
];
doctors = [
  {
    name: "Dr. D. Sahoo",
    position: "Paediatrician",
    star: 4.3,
  },
  {
    name: "Dr. R.K. Verma",
    position: "Physician",
    star: 4.3,
  },
  {
    name: "Dr. Lorem Ipsum",
    position: "Paediatrician",
    star: 4.3,
  },
];

function updateContacts() {
  let contactsDiv = document.querySelector(".contacts");
  let contactsHTML = "";
  for (let contact of contacts) {
    contactsHTML += `<div class="contact">
          <div class="name">${contact.name}</div>
          <div class="position">${contact.position}</div>
          <div class="message-container">
              <button class='message'>
                <i class="fas fa-video-camera"></i>
                </button>
              <button class='video-call'>
                <i class="fas fa-comment-alt"></i>
              </button>
          </div>
      </div>`;
  }
  contactsDiv.innerHTML = contactsHTML;
}

function updateDoctors() {
  let doctorsDiv = document.querySelector(".doctors");
  let doctorsHTML = "";
  for (let doctor of doctors) {
    doctorsHTML += `<div class="contact">
            <div class="name">${doctor.name}</div>
            <div class="position">${doctor.position}</div>
            <div class="star-container">${doctor.star}<i class="fa fa-star"></i></div>
                <button class='appointment'>
                    Request Appointment
                </button>
            
        </div>`;
  }
  doctorsDiv.innerHTML = doctorsHTML;
}

updateContacts();
updateDoctors();
