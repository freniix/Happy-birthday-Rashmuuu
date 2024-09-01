const para = document.getElementById("content");
const body = document.getElementById("body");

const hr = document.getElementById("hr");
const header = document.getElementById("header");

const countBirthDayDate = new Date("September 22, 2024 00:00:00").getTime();
// const countBirthDayDate = new Date("September 01, 2024 21:26:00").getTime();
const countDown = setInterval(() => {
  let currentTime = new Date().getTime();
  let timeRemaining = countBirthDayDate - currentTime;

  let days = Math.floor(timeRemaining / (1000 * 24 * 60 * 60));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  const countDownTime =
    "\n \n \nPlease Visit Again After \n \n \n" +
    days +
    "/Days & " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    "s       ";
  para.innerText= countDownTime;
  if (timeRemaining < 0) {
    clearInterval(countDown);
    hr.classList.add("display");
    header.innerHTML = "🎉Happy Birthday <span>Rashmi</span> <span>🎂</span>";
    body.classList.add("background");
    para.innerHTML =
      "I'm So blessed to have a Friend like you<br> who feels like family.<br> <span>Happy Birthday to My Shunshine<br> and Friend.🎊<br></span> The World is brighter and better place with you in it. <br>Enjoy your special Day. 🥳<br> You'll be always remembered by me even on the days we don't talk anymore!";
  }
});
