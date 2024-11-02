
  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:3000/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("Your message has been sent successfully!");
      document.getElementById("contact-form").reset();
    } else {
      alert("There was an issue sending your message. Please try again later.");
    }
  });
