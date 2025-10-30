const startBtn = document.querySelector(".start-btn");
const moles = document.querySelectorAll(".mole");
const scoreBox = document.querySelector(".score");
const resetBtn = document.querySelector(".reset-btn");

let score = 0;
let isClicked = false;
let moleClicked = false;

startBtn.addEventListener("click", () => {
  if (isClicked) return;
  isClicked = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    moleClicked = false;
    mole.style.top = "0%";
    setTimeout(() => {
      mole.style.top = "100%";
    }, 1500);
  }, 1500);
});

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    if (moleClicked) return;
    moleClicked = true;
    score++;
    render();
  });
});

const render = () => {
  scoreBox.textContent = `Score: ${score}`;
};

resetBtn.addEventListener("click", () => {
  clearInterval(isClicked);
  isClicked = false;
  score = 0;
  render();
});
