const button = document.querySelector("button");
let count = document.querySelector(".count");
let reset = document.querySelector(".reset");

let countt = parseInt(localStorage.getItem("count")) || 0;
count.textContent = countt;

button.addEventListener("click", (e) => {
  countFunction();
  play();
});

reset.addEventListener("click", () => {
  resetCount()
})


function countFunction() {
  countt++;
  localStorage.setItem("count", countt);

  count.textContent = countt;
}



function resetCount() {
  let alertt = confirm("boshidan boshlash")

  if (alertt) {
    window.location.reload()
    localStorage.setItem("count", 0)
  }

}

function play() {
  var audio = new Audio('./audio/button.mp3');
  audio.play();
}


