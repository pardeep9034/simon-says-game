let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red", "yellow", "green", "voilet"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  console.log("key pressed");
  if (started == false) {
    started = true;
    lvlup();
  }
});
function lvlup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randidx = Math.floor(Math.random() * 3);
  let randcolor = btns[randidx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor);
  console.log(gameSeq);
  flash(randbtn);
}
function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function check(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(lvlup(), 1000);
    }
  } else {
    h2.innerHTML = `Game over! <b>your High Score is ${level}</b> <br> press any key to start`;
    reset();
  }
}
function btnpress() {
  let btn = this;
  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  flash(btn);
  check(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
