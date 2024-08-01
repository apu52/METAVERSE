// Event handler for Pressing enter in search box and click in search button
document.getElementById('search-music').addEventListener('click', searchMusic);

const inputMusic = document.getElementById('input-music');

inputMusic.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        searchMusic();
    }
})

let storedData;

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
                                                                        <a href="#lyrics-or-details"><button onClick="getLyrics('${artistName.replace(/'/g, "\\'")}', '${title.replace(/'/g, "\\'")}')" class="btn btn-success">Get Lyrics</button></a>
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
            const hour = parseInt(duration/3600);
            const min = parseInt((duration%3600)/60);
            const sec = parseInt((duration%3600)%60);
            const songTitle = storedData.data[i].title;
            const artistName = storedData.data[i].artist.name;
            const img = storedData.data[i].album.cover_big;
            const download = storedData.data[i].link;
            const preview = storedData.data[i].preview;
            document.getElementById('lyrics-or-details').innerHTML = `<div class="details">
                                                                        <h2 class="text-success mb-4">Song Details</h2>
                                                                        <img src="${img}" alt="">
                                                                        <h3>Song ID: ${songID}</h3>
                                                                        <h3>Song Title: ${songTitle}</h3>
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

async function getLyrics(artistName, songTitle) {
    const apiUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(songTitle)}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        document.getElementById('lyrics-or-details').innerHTML = (`<div class="lyrics-content"><h2><strong>${artistName}</strong> - ${songTitle}</h2>
        <p>${lyrics}</p></div>`);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
