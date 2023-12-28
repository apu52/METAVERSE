import React from "react";
import useSound from 'use-sound';
import boopSfx from './audio.mp3';

export default function Inputcard(){
    const [inputValue, setInputValue] = React.useState('');
    // State to hold the displayed text
      const [displayedText, setDisplayedText] = React.useState('');
      const [displayedText1, setDisplayedText1] = React.useState('');
      const [istext, setIstext] = React.useState(false);
      function play(){
        new Audio(boopSfx).play();
        document.getElementById("cont1").style.backgroundImage="url('https://memes.co.in/Uploads/Media/Dec23/Wed13/1002/3b37a044.jpg')";
        document.getElementById("cont2").style.backgroundImage="url('https://i.kym-cdn.com/photos/images/original/002/573/889/a64.png')";
        document.getElementById("cont3").style.backgroundImage="url('https://memes.co.in/Uploads/Media/Dec23/Wed13/1002/3b37a044.jpg')";
        
      }
      const handleInputChange = (e) => {
        const text = e.target.value;
        setInputValue(text);
        setDisplayedText(text);
        console.log("running");
        let length = text.length;
        if(length===7){
            setDisplayedText1(" is a 7 lettered word 👋👋 !!!");
            
            

        }
        else{
            setDisplayedText1(" is not accepted.Try again!!!")

        }
      };

    return(
        <>
        <div className="container" >
            <input id="input" value={inputValue} onChange={handleInputChange} type="text" placeholder="Thala here 👀" />
            <button id="btn1" onClick={()=>{setIstext(true);(displayedText1===" is a 7 lettered word 👋👋 !!!")?play():console.log();}} > Submit</button>
            <p id="result">{(istext)?`${displayedText}${displayedText1}`:""}</p>
           
            <div className="box">
            <div id="cont1"></div>
            <div id="cont2"></div>
            <div id="cont3"></div>
        </div>
        <p>Thala for a reason 🙇</p>
        </div>
        </>

    );
}