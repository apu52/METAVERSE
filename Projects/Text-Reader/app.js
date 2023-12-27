//Getting DOM Elements
const textElem = document.getElementById('text');
const wpmElem = document.getElementById('wpm');
const readerElem = document.querySelector('.reader');

//variables
let words, speed, current, interval;

//Event listener
document.addEventListener('click', clickHandler);

function clickHandler(event){ //passing the event object
    startReader(event);
    stopReader(event);
    // pauseReader(event);
}

//Start the Reader
function startReader(event){
    //only run on #start button
    if(event.target.id !== 'start')
        return;

    // If there's no text to read, do nothing
    if (!textElem.value.length) 
        return;
        
    //store the words in words array
    words = 
        textElem.value.split(' ') //divide the space separated words into words array
        .filter(function(individualWord){ //filters empty array elements
            return individualWord.length; 
        });
        
    //get the words per minute
    speed = (60 / parseInt(wpmElem.value, 10)) * 1000; //speed of a word in milliseconds   
    
    //set the current item to the first word
    current = 0;

    //Run the reader
    run();
}

//Stop the Reader
function stopReader(event){
    //only run on #stop button
    if(event.target.id !== 'stop')
        return;

    end();
}

function end(){
    //clear the interval
    clearInterval(interval);
}

function run(){
    //run the reader
    interval = setInterval(function(){

        // If there are no more words, stop
		if (!words[current]) {
			end();
			return;
		}

        //display the words to ui
        readerElem.textContent = words[current];

        //go to next word
        current++;

    }, speed);
}