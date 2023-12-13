let text = '{ "contests" : [' +
'{ "name":"Neon Hack" , "is24":"No","start":"16 Jan 2024 @ 3:30am","link":"https://forms.gle/er3RUkN7jSHECU7M8" },' +
'{ "name":"MLH Month-long hackathon" , "is24":"No","start":"1st Jan,2024 @ 1:00am","link":"https://mlh-december-hackathon.devpost.com/register?flow%5Bdata%5D%5Bchallenge_id%5D=19875&flow%5Bname%5D=register_for_challenge"},' +
'{ "name":"SolCha Ideathon" , "is24":"No","start":"20th Jan,2024 @ 2:30am","link":"https://solcha-24-idea-thon.devpost.com/register?flow%5Bdata%5D%5Bchallenge_id%5D=19816&flow%5Bname%5D=register_for_challenge"},' +
'{ "name":"Aura Hackathon" , "is24":"Yes","start":"14h Dec,2023 @ 1:30am","link":"https://practice.geeksforgeeks.org/hackathon/aura-hackfest" } ]}'; 
const obj=JSON.parse(text)
let ihtml=''

    for (item in obj.contests) {
        console.log(item)
        ihtml += `<div class="card" style="margin:20px;">
             <img src="https://www.highspot.com/wp-content/uploads/Hackathon-blog-header.png" alt="...">
             <div class="card-body">
              <h2 class="card-text">${obj.contests[item].name}</h5>
              
              <p class="card-text">In 24 Hours? ${obj.contests[item].is24} </p>
              <p class="card-text">Starts at: ${obj.contests[item].start} </p>
              <a href = "${obj.contests[item].link}" target = ".blank" class="card-text btn">Visit Contest</a>
        </div>
    </div>`
    }
    hackathons.innerHTML = ihtml;
