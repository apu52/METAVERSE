// Event handler for Pressing enter in search box and click in search button
document.getElementById('search-music').addEventListener('click', searchMusic);

const inputMusic = document.getElementById('input-music');

inputMusic.addEventListener('keypress', function(){
    if(event.keyCode === 13){
        searchMusic();
    }
})

function searchMusic(){
    // Clearing the song list and about/lyrics section
    document.getElementById('all-results').innerHTML = '';
    document.getElementById('lyrics-or-details').innerHTML = '';
    const keyword = inputMusic.value;
    fetch(`https://api.lyrics.ovh/suggest/${keyword}`)
    .then(res => res.json())
    .then(data => {   
        // Data is stored for using in getDetails and getLyrics function
        storedData = data;
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
            const title = data.data[i].title;
            const artistName = data.data[i].artist.name;
            const id = data.data[i].id;
            document.getElementById('all-results').innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                                                    <div class="col-md-6">
                                                                        <h3 class="lyrics-name">${title}</h3>
                                                                        <p class="author lead">Album by <span>${artistName}</span></p>
                                                                    </div>
                                                                    <div class="col-md-6 text-md-right text-center">
                                                                        <a href="#lyrics-or-details"><button onClick="getDetails(${id})" class="btn btn-success">Get Details</button></a>
                                                                        <a href="#lyrics-or-details"><button onClick="getLyrics(${id})" class="btn btn-success">Get Lyrics</button></a>
                                                                    </div>
                                                                </div>`
            // Not to show more than 10 songs
            if(i == 9){
                break;
            }   
        }
        
    })
}

function getDetails(id){
    for (let i = 0; i < 10; i++) {
        if(storedData.data[i].id == id){
            const songID = storedData.data[i].album.id;
            const duration = storedData.data[i].duration;
            // const duration = 15000;
            const hour = parseInt(duration/3600);
            const min = parseInt((duration%3600)/60);
            const sec = parseInt((duration%3600)%60);
            // console.log(hour, min, sec);
            const songTitle = storedData.data[i].title;
            const artistName = storedData.data[i].artist.name;
            const img = storedData.data[i].album.cover_big;
            const download = storedData.data[i].link;
            const preview = storedData.data[i].preview;
            console.log(preview);
            document.getElementById('lyrics-or-details').innerHTML = `<div class="details">
                                                                        <h2 class="text-success mb-4">Song Details</h2>
                                                                        <img src="${img}" alt="">
                                                                        <h3>Song ID: ${songID}</h3>
                                                                        <h3>Song Title: ${songTitle}</>
                                                                        <h3>Artist Name: ${artistName}</h3>
                                                                    </div>`
            if(hour == 0 && min == 0){
                document.getElementById('lyrics-or-details').innerHTML += `<div class="details">
                                                                            <h3>Duration: ${sec} sec</h3>
                                                                        </div>`
            }
            else if(hour == 0){
                document.getElementById('lyrics-or-details').innerHTML += `<div class="details">
                                                                            <h3>Duration: ${min} min ${sec} sec</h3>
                                                                        </div>`
            }
            else{
                document.getElementById('lyrics-or-details').innerHTML += `<div class="details">
                                                                            <h3>Duration: ${hour} hour ${min} min ${sec} sec</h3>
                                                                        </div>`
            }
                                                                        
            document.getElementById('lyrics-or-details').innerHTML += `<div class="details">
                                                                        <h3><a target="_blank" href="${download}">Click me for song download</a></h3>
                                                                        <h3 class="preview"><a target="_blank" href="${preview}">Click me for song preview</a></h3>
                                                                    </div>`
        }
    }
}




function getLyrics(id) {
    // Assuming storedData is defined somewhere in your code
    for (let i = 0; i < storedData.data.length; i++) {
      if (storedData.data[i].id == id) {
        const artistName = storedData.data[i].artist.name;
        const songTitle = storedData.data[i].title;
  
        // Use encodeURIComponent to handle special characters in the artistName and songTitle
        const apiUrl = `https://api.genius.com/search?q=${encodeURIComponent(artistName)}%20${encodeURIComponent(songTitle)}`;
  
        fetch(apiUrl, {
          headers: {
            Authorization: 'Bearer Mpl0oNNxN6yaXZaCNufbH_7-yP3uwdtaUVQdYvs2cQjk4XV7WJMUAE8VyNAsTH_t',
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch lyrics. Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            // Assuming the first search result contains the desired song information
            const hit = data.response.hits[0];
  
            if (hit) {
              const lyricsUrl = hit.result.url;
  
              // You can further fetch the lyrics from the provided URL if needed
              // For simplicity, I'm just setting the URL as the lyrics in this example
              const lyrics = `<a href="${lyricsUrl}" target="_blank">View Lyrics on Genius</a>`;
  
              document.getElementById('lyrics-or-details').innerHTML = `<div class="single-lyrics text-center">
                                                                            <button class="btn go-back">&lsaquo;</button>
                                                                            <h2 class="text-success mb-4">Song Lyrics</h2>
                                                                            <h5>${lyrics}</h5>
                                                                        </div>`;
            } else {
              throw new Error('Song not found on Genius.');
            }
          })
          .catch((error) => {
            console.error(error);
            // Handle error, for example, display an error message to the user
          });
      }
    }
  }
  
  