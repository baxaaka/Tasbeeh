
"use strict"

  const button = document.querySelector("button")                 
  const input = document.querySelector("input")                   
  

  button.addEventListener("click", (e)=> {                                

    
       

    console.log( parseInt(input.value));    
    
    input.value=parseInt(input.value)+1
    
   

  })


  // var audio = new Audio('audio_file.mp3');
  // audio.play();

  function play() {
    var audio = new Audio('./audio/button.mp3');
    audio.play();
  }
 