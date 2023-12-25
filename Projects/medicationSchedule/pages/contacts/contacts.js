contacts = [
  {
    name: "Dr. Hemant Kumar",
    position: "Paediatrician",
    phone: "+91-1234-5678",
  },
  {
    name: "Dr. William Osler",
    position: "Physician",
    phone: "+91-2131-1123",
  },
  {
    name: "Rakesh",
    position: "Brother",
    phone: "+91-5321-5678",
  },
  {
    name: "Otto",
    position: "Neighbour",
    phone: "+91-1234-5678",
  },
  {
    name: "Lorem Ipsum",
    position: "Neighbour",
    phone: "+91-1234-5678",
  },
  {
    name: "Dolor Sitamet",
    position: "Friend",
    phone: "+91-1234-5678",
  },
];

function updateContacts() {
  let contactsDiv = document.querySelector(".contacts");
  let contactsHTML = "";
  for (let contact of contacts) {
    contactsHTML += `<div class="contact">
        <div class="name">${contact.name}</div>
        <div class="position">${contact.position}</div>
        <div class="phone">${contact.phone}</div>
        <button class='call'>
          <i class="fa fa-phone"></i>
        </button>
    </div>`;
  }
  contactsDiv.innerHTML = contactsHTML;
}

updateContacts();
