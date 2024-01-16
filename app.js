"use strict";

const button = document.querySelector("button");
let inputField = document.querySelector("input");
let input = inputField.value.trim();

button.addEventListener("click", (e) => {
  input = (parseInt(input) + 1).toString();
  localStorage.setItem("inputCount", input);

  const count = localStorage.getItem("inputCount");
  console.log("Count:", count);

 
  inputField.value = count;

  play(); 
});

function play() {
  var audio = new Audio('./audio/button.mp3');
  audio.play();
}
