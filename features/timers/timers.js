//stop watch
//https://codepen.io/cathydutton/pen/xxpOOw

//null times
let millis = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//get elements id
let appendHours = document.getElementById("stop_hour");
let appendMinutes = document.getElementById("stop_min");
let appendSeconds = document.getElementById("stop_sec");
let appendMillis = document.getElementById("stop_millis");

//set an interval for time
let interval;

//button on click starts timer
function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

//button on click stops timer
function stopStopwatch() {
  clearInterval(interval);
}

//button resets watch
function resetStopwatch() {
  clearInterval(interval);
  millis = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stop_hour").textContent = "00";
  document.getElementById("stop_min").textContent = "00";
  document.getElementById("stop_sec").textContent = "00";
  document.getElementById("stop_millis").textContent = "00";
}

//the function with the time
function startTimer() {
  millis++;
  if (millis <= 9) {
    appendMillis.textContent = "0" + millis;
  }

  if (millis > 9) {
    appendMillis.textContent = millis;
  }

  if (millis > 99) {
    // console.log("seconds:" + seconds);
    seconds++;
    appendSeconds.textContent = "0" + seconds;
    millis = 0;
    appendMillis.textContent = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.textContent = seconds;
  }

  if (seconds > 59) {
    // console.log("minutes:" + minutes);
    minutes++;
    appendMinutes.textContent = "0" + minutes;
    seconds = 0;
    appendSeconds.textContent = "0" + 0;
  }

  if (minutes > 59) {
    // console.log("hours:" + hours);
    hours++;
    appendHours.textContent = "0" + hours;
    minutes = 0;
    appendMinutes.textContent = "0" + 0;
  }
}

//start timer
//https://codepen.io/thecodingpie/pen/JjGeyVO?editors=1010
//https://codepen.io/praveensoniofficial/pen/BaoaKPw
let interval2;

let time = document.getElementById("timer");
let time_value = time.value;
let text_timer = "";
let remainder = 0;

function StartTimer() {
  clearInterval(interval2);
  interval2 = setInterval(timertimer, 1000);
}

//stop timer
function stopTimer() {
  clearInterval(interval2);
}

//reset timer input
function resetTimer() {
  let x = document.getElementById("timer_form");
  x.reset();
}

function timertimer() {
  if (time_value === 0) {
    document.getElementById("timer_box").textContent = "END";
    document.getElementById("timer_img").src = "../../img/goon.webp";
  } else if (time_value > 300) {
    document.getElementById("timer_box").textContent = "Invalid input";
  } else {
    if (time_value >= 60) {
      let minute = Math.floor(time_value / 60);

      remainder = time_value % 60;

      if (remainder < 10 && remainder >= 0) {
        text_timer = "0" + minute + " : 0" + remainder;
      } else {
        text_timer = "0" + minute + " : " + remainder;
      }
    } else if (time_value < 10 && time_value > 0) {
      text_timer = "00 : 0" + time_value;
    } else {
      text_timer = "00 : " + time_value;
    }

    document.getElementById("timer_box").textContent = text_timer;
    time_value--;
  }
}

// --------------------------TV-SERIES TIME CALCULATOR------------
function calculateTV() {
  let seasons_input = document.getElementById("TV-seasons");
  let episodes_input = document.getElementById("TV-episodes");
  let duration_input = document.getElementById("TV-duration");

  let seasons = seasons_input.value;
  let episodes = episodes_input.value;
  let duration = duration_input.value;

  console.log(seasons);
  console.log(episodes);
  console.log(duration);

  let minutes = 0;
  let remainder_min = 0;
  let hours = 0;
  let remainder_h = 0;
  let days = 0;

  if (
    seasons > 0 &&
    seasons < 50 &&
    episodes > 0 &&
    episodes < 10000 &&
    duration > 0 &&
    duration < 150
  ) {
    minutes = seasons * episodes * duration;
    console.log(minutes);
    hours = minutes / 60;
    console.log(hours);

    days = Math.floor(hours / 24);
    console.log(days);
    remainder_h = Math.floor(hours % 24);
    console.log(remainder_h);
    hours = Math.floor(remainder_h);
    console.log(hours);
    remainder_min = remainder_h % 24;
    console.log(remainder_min);
    minutes = Math.floor(remainder_min);
    console.log(minutes);
    // } else if (minutes >= 60 && minutes <= 24 * 60) {
    //   hours = Math.floor(minutes / 60);
    //   remainder_min = minutes % 60;
    //   minutes = Math.floor(remainder_min);
    // } else if (minutes >= 0 && minutes < 60) {
    //   minutes = Math.floor(minutes);
  }

  let reveal = document.getElementById("TV-reveal");
  reveal.textContent =
    days + " days " + hours + " hours " + minutes + " minutes straight";

  // for 8 hours a day
  let minutes2 = 0;
  let hours2 = 0;
  let days2 = 0;

  if (
    seasons > 0 &&
    seasons < 50 &&
    episodes > 0 &&
    episodes < 10000 &&
    duration > 0 &&
    duration < 150
  ) {
    minutes2 = seasons * episodes * duration;
    hours2 = minutes2 / 60;

    days2 = Math.ceil(hours2 / 8);
  }
  let reveal2 = document.getElementById("TV-reveal2");

  reveal2.textContent = days2 + " days for 8 hours per day";
}

function resetTVbtn() {
  let seasons = document.getElementById("form_seasons");
  let episodes = document.getElementById("form_episodes");
  let duration = document.getElementById("form_duration");

  seasons.reset();
  episodes.reset();
  duration.reset();

  document.getElementById("TV-reveal").textContent = "";
  document.getElementById("TV-reveal2").textContent = "";
}

//---------------------------------------
