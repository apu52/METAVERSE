let url = 'https://kontests.net/api/v1/all';
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    ihtml = "";
    for (item in contests) {
        ihtml += `<div class="card" style="margin:20px;">
             <img src="https://www.highspot.com/wp-content/uploads/Hackathon-blog-header.png" alt="...">
             <div class="card-body">
              <h2 class="card-text">${contests[item].name}</h5>
              <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
              <p class="card-text">In 24 Hours? ${contests[item].in_24_hours} </p>
              <p class="card-text">Starts at: ${contests[item].start_time} </p>
              <p class="card-text">Ends at: ${contests[item].end_time} </p>
              <a href = "${contests[item].url}" target = ".blank" class="card-text btn">Visit Contest</a>
        </div>
    </div>`
    }
    hackathons.innerHTML = ihtml;
})