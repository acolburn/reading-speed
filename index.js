const calcBtn = document.getElementById("calculate-btn");
const timerBtn = document.getElementById("timer-btn");
const words = document.getElementById("words");
const lines = document.getElementById("lines");
const time = document.getElementById("time");
const speed = document.getElementById("speed");
const wordsPerPageEl = document.getElementById("words-per-page");
let startTime = Date.now();
let endTime = Date.now();
let wordsPerPage = 0;

// Load existing values at startup
// `localStorage.getItem("a key goes here")` --> "a value goes here"
if (localStorage.getItem("words")) {
  words.value = localStorage.getItem("words");
}
if (localStorage.getItem("lines")) {
  lines.value = localStorage.getItem("lines");
}

function calculateWordsPerPage() {
  const w = words.value;
  const l = lines.value;
  wordsPerPage = (w / 5) * l;
  // `localStorage.setItem("a key goes here", "a value goes here");`
  localStorage.setItem("words", w);
  localStorage.setItem("lines", l);
}

calcBtn.addEventListener("click", function () {
  calculateWordsPerPage();
  let _time = "";
  let _speed = "";
  // wordsPerPageEl.innerText = `${wordsPerPage} words per page`;
  for (let i = 60; i > 10; i -= 5) {
    _time += `<li>${i} sec</li>`;
    _speed += `<li>${Math.floor((wordsPerPage / i) * 60)} wpm</;i>`;
  }

  time.innerHTML = _time;
  speed.innerHTML = _speed;
});

timerBtn.addEventListener("click", function () {
  if (timerBtn.textContent === "START TIMER") {
    startTime = Date.now();
    wordsPerPageEl.innerText = "";
    timerBtn.textContent = "STOP TIMER";
  } else if (timerBtn.textContent === "STOP TIMER") {
    endTime = Date.now();
    const timeDiff = (endTime - startTime) / 1000;
    calculateWordsPerPage();
    wordsPerPageEl.innerText = `${Math.floor(timeDiff)} sec, ${Math.floor(
      (wordsPerPage / timeDiff) * 60
    )} wpm`;
    timerBtn.textContent = "START TIMER";
  }
});
