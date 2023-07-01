console.log(" READY ");

const curr = document.querySelector("#current");
const his = document.querySelector("#history");
const historyWinner = document.querySelector('.historyWinner');

const historyStanding = document.querySelector('.historyStanding');
const historyQuerry = document.querySelector('.historyQuerry');
// const drivConstruct = document.querySelector('.winner--driver--constructor');
const currStanding = document.querySelector('.currStanding--btn');
const driv = document.querySelector('#driver');
const cons = document.querySelector('#constructor');

function displayControl(t1) {
  if (t1.classList.contains("none")) {
    t1.classList.remove('none');
    t1.classList.add('block');
  } else {
    t1.classList.remove('block');
    t1.classList.add('none');
  }
}


curr.addEventListener("click", () => {
  const currentDisplay = document.querySelector(".current");
  displayControl(currentDisplay);

});

currStanding.addEventListener("click", () => {
  const temp = document.querySelector('.currStanding');
  displayControl(temp);
});



his.addEventListener("click", () => {
  const historyDisplay = document.querySelector(".history");
  displayControl(historyDisplay);

});

driv.addEventListener("click", () => {
  const driverDisplay = document.querySelector('.driver');
  displayControl(driverDisplay);

});
cons.addEventListener("click", () => {
  const constructorDisplay = document.querySelector('.constructor');
  displayControl(constructorDisplay);

});

historyWinner.addEventListener('click', () => {
  const drivConstruct = document.querySelector('.winner--driver--constructor');
  displayControl(drivConstruct);

});

historyStanding.addEventListener('click', () => {

  // console.log();
  const temp = document.querySelector('.standing--driver--constructor');
  displayControl(temp);
});

historyQuerry.addEventListener('click', () => {
  const temp = document.querySelector('.historyQuerry--input');
  displayControl(temp);
});