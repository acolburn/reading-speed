const calcBtn = document.getElementById("calculate-btn");
const words = document.getElementById("words");
const lines = document.getElementById("lines");
const time = document.getElementById("time");
const speed = document.getElementById("speed");
const wordsPerPageEl = document.getElementById("words-per-page");

calcBtn.addEventListener("click", function () {
  const w = words.value;
  const l = lines.value;
  const wordsPerPage = (w / 5) * l;
  let _time = "";
  let _speed = "";
  wordsPerPageEl.innerText = `${Math.floor(wordsPerPage)} words per page`;
  for (let i = 60; i > 10; i -= 5) {
    _time += `<li>${i} sec</li>`;
    _speed += `<li>${Math.floor((wordsPerPage / i) * 60)} wpm</;i>`;
  }

  time.innerHTML = _time;
  speed.innerHTML = _speed;
});
