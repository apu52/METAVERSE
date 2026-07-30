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
    .catch(err => console.error(err))