// Random number generator
function random_print() {
  let a = Math.floor(Math.random() * 101);

  const randomText = document.getElementById("random-print");

  randomText.textContent = "your random number is: " + a;
}

// Dice roll
function dice_roll(x) {
  let a = Math.floor(Math.random() * 6) + 1;
  const dices = document.getElementById(`dice${x}`);

  dices.src = "./img/dice roll.gif";

  setTimeout(function () {
    dices.src = `./img/dice${a}.png`;
  }, 1500);
}

//Dice roll all
function dice_all() {
  let dice = document.querySelectorAll(".flex-container img");
  for (const die of dice) {
    die.src = "./img/dice roll.gif";
  }

  setTimeout(() => {
    for (const die of dice) {
      const num = Math.floor(Math.random() * 6) + 1;
      die.src = `./img/dice${num}.png`;
    }
  }, 1500);
}

// Reset dice
function reset_dice() {
  let dice = document.querySelectorAll(".flex-container img");
  for (const die of dice) {
    die.src = "";
  }
}

// Heads or tails
function headstails() {
  let a = Math.floor(Math.random() * 2);
  let array = ["heads", "tails"];

  const coin = document.getElementById("headOrTail");
  const image = document.getElementById("coin_img");

  image.src = "./img/coin spin.gif";
  coin.textContent = "...";

  setTimeout(function () {
    coin.textContent = array[a];
    if (a === 0) {
      image.src = "./img/snoopy head.gif";
    } else {
      image.src = "./img/snoopy-wag-tail.gif";
    }
  }, 2000);
}

// Reset heads or tails
function reset_coin() {
  const coin = document.getElementById("headOrTail");

  const image = document.getElementById("coin_img");

  image.src = "";
  coin.textContent = "______";
}

// Valentine no button
function noBtn() {
  //yes button changes
  let myDiv1 = document.querySelector(".yes-btn");
  const yes_text = document.getElementById("yes-btn");
  let currWidth_yes = myDiv1.getBoundingClientRect().width;
  let currHeight_yes = myDiv1.getBoundingClientRect().height;
  // Stop increasing size
  if (currWidth_yes >= 400) {
    yes_text.textContent = "Ok :(";
  } else {
    myDiv1.style.width = currWidth_yes + 10 + "px";
    myDiv1.style.height = currHeight_yes + 10 + "px";
  }

  // check sizes
  console.log("yes:" + currWidth_yes);

  //no button changes
  let myDiv2 = document.querySelector(".no-btn");

  let currWidth_no = myDiv2.getBoundingClientRect().width;
  let currHeight_no = myDiv2.getBoundingClientRect().height;
  console.log("no:" + currWidth_no);

  myDiv2.style.width = currWidth_no - 10 + "px";
  myDiv2.style.height = currHeight_no - 10 + "px";

  const text = document.getElementById("no-btn");

  // confirmation messages
  if (currWidth_no <= 110) {
    document.getElementById("no-btn").style.fontSize = "100px";
    text.textContent = "";
  }

  const array = [
    "Are you sure?",
    "please?",
    "reconsider.. :((",
    "stop:((",
    "don't do this!",
    "please confirm again",
  ];

  a = Math.floor(Math.random() * 6);

  // condition to accept "no" and stop size change
  if (currWidth_yes >= 200 && currWidth_yes < 400) {
    return alert(array[a]);
  }
  if (currWidth_yes >= 400) {
    return alert("Question successfully declined ://");
  }
}

// Valentine yes button alert update
function yesBtn() {
  let myDiv1 = document.querySelector(".yes-btn");
  let currWidth_yes = myDiv1.getBoundingClientRect().width;
  if (currWidth_yes >= 400) {
    return alert("too late!");
  } else {
    alert("yay<3");
  }
}

//create text saying who burger is and image of burger
function BurgerWho() {
  let burger_text = document.querySelector("#burger_text");
  let burger_img = document.querySelector("#burger_img");

  if (burger_text.textContent === "Burger, the Cat:") {
    burger_text.textContent = "";
    burger_img.src = "";
    burger_img.alt = "";
    burger_img.title = "";
  } else {
    burger_text.textContent = "Burger, the Cat:";

    burger_img.src = "./img/burger_photo.JPEG";
    burger_img.alt = "Photo of a black cat; the cat's name is burger";
    burger_img.title = "Photo of a black cat; the cat's name is burger";
  }
}
function ValidateBurger() {
  let guess = document.getElementById("word");
  let word = guess.value;
  console.log(word);
  let validatedWord = word.toLowerCase();

  let confirmation = "";
  if (validatedWord === "burger") {
    confirmation = "Correct! The word is: " + word;
  } else {
    confirmation = "Wrong! Try again.";
  }
  console.log(validatedWord);
  console.log(confirmation);
  document.getElementById("BurgerConfirm").textContent = confirmation;
}

//clear burger input form
function clearBurgerForm() {
  let burger_input = document.getElementById("word");
  burger_input.value = "";

  let burger_input2 = document.getElementById("burger_input");
  burger_input2.reset();
  //one of them work
}

//guess the number
let guess_number = 0;
function GuessNumber_roll() {
  let a = Math.floor(Math.random() * 100);
  guess_number = a;
  console.log(guess_number);
}

function resetNumberForm() {
  let x = document.getElementById("numberGuess_form");
  x.reset();
}

function GuessNumber_submit() {
  let guess = document.getElementById("number_guess").value;
  console.log(guess);
  console.log(guess_number);

  guess = parseInt(guess);

  let x = document.getElementById("number_reveal");
  if (guess === guess_number) {
    x.textContent = "Correct! The number is " + guess_number;
  }

  if (guess <= 100) {
    if (guess != guess_number) {
      if (guess < guess_number) {
        x.textContent = "Too low! Guess again or re-roll";
      } else if (guess > guess_number) {
        x.textContent = "Too high! Guess again or re-roll";
      } else {
        x.textContent = "Wrong! Guess again or re-roll";
      }
    }
  }
}

function GuessNumber_reveal() {
  let x = document.getElementById("number_reveal");
  x.textContent = guess_number;
}

function GuessNumber_hide() {
  let x = document.getElementById("number_reveal");
  x.textContent = "";
}

//click button
let click_count = 0;
function ClickButton() {
  click_count++;
  let button = document.getElementById("click-box");
  if (click_count === 69) {
    button.textContent = "nice";
  } else {
    button.textContent = click_count;
  }
}

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

//halloween countdown time

function HalloweenCountdown() {
  // Set the date we're counting down to
  let countDownDate = new Date("Oct 31, 2025 12:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#C_days").textContent = days;
    document.querySelector("#C_hours").textContent = hours;
    document.querySelector("#C_minutes").textContent = minutes;
    document.querySelector("#C_seconds").textContent = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("halloween").textContent = "Happy Halloween!";
    }
  }, 1000);
}

//stop time
function stopCountdown() {
  window.location.reload();
}

//time since halloween 2024
function sinceHalloween() {
  let origin = new Date("Oct 31, 2024 12:00:00").getTime();
  let now = new Date().getTime();

  let difference = now - origin;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  let text = document.getElementById("hallowen_days");
  text.textContent = days;
}

//reset countdown
function resetCountDown() {
  document.getElementById("timer_box").textContent = "00 : 00 : 00";
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
    document.getElementById("timer_img").src = "./img/goon.webp";
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

//rock paper scissors
let bot_hand = "";
let player_hand = "";
let player2_hand = "";
//r = rock, p = paper, s = scissor
let hand_array = ["r", "p", "s"];

//get display id
let display_rps_winner = document.getElementById("rps_winner");
let announcement = "";

//images
let player1_img = document.getElementById("rps_1_img");
let player2_img = document.getElementById("rps_2_img");

//bot select
function rps_bot() {
  let a = Math.floor(Math.random() * 3);

  bot_hand = hand_array[a];
  console.log("Bot-hand: " + bot_hand);

  let x = document.getElementById("rps_player2_div");
  x.style.display = "none";
}

//player select
function check_rps_winner(hand) {
  //0 = rock, 1 = paper, 2 = scissor
  player_hand = hand_array[hand];

  if (bot_hand === "r" || bot_hand === "p" || bot_hand === "s") {
    announcement = helper_rps_check(bot_hand, "Bot");

    display_rps_winner.textContent = announcement;
  }
}

//player 2 select
function player_rps_winner(hand) {
  player2_hand = hand_array[hand];

  announcement = helper_rps_check(player2_hand, "Player 2");
  display_rps_winner.textContent = announcement;
}

//player 1 vs opponent
//this can be optimized but not going to right now
function helper_rps_check(opponent, string) {
  if (player_hand === opponent) {
    if (player_hand === "r") {
      player1_img.src = "./img/rps/rock.png";
      player2_img.src = "./img/rps/rock.png";
    }
    if (player_hand === "p") {
      player1_img.src = "./img/rps/paper.png";
      player2_img.src = "./img/rps/paper.png";
    }
    if (player_hand === "s") {
      player1_img.src = "./img/rps/scissor.png";
      player2_img.src = "./img/rps/scissor.png";
    }

    return "Tie!";
  }
  if (player_hand === "r" && opponent === "p") {
    player1_img.src = "./img/rps/rock.png";
    player2_img.src = "./img/rps/paper.png";
    return `${string} chose paper, ${string} wins!`;
  }
  if (player_hand === "p" && opponent === "s") {
    player1_img.src = "./img/rps/paper.png";
    player2_img.src = "./img/rps/scissor.png";
    return `${string} chose scissors, ${string} wins!`;
  }
  if (player_hand === "s" && opponent === "r") {
    player1_img.src = "./img/rps/scissor.png";
    player2_img.src = "./img/rps/rock.png";
    return `${string} chose rock, ${string} wins!`;
  }
  if (player_hand === "r" && opponent === "s") {
    player1_img.src = "./img/rps/rock.png";
    player2_img.src = "./img/rps/scissor.png";
    return "Player 1 chose rock, Player 1 wins!";
  }
  if (player_hand === "s" && opponent === "p") {
    player1_img.src = "./img/rps/scissor.png";
    player2_img.src = "./img/rps/paper.png";
    return "Player 1 chose scissor, Player 1 wins!";
  }
  if (player_hand === "p" && opponent === "r") {
    player1_img.src = "./img/rps/paper.png";
    player2_img.src = "./img/rps/rock.png";
    return "Player 1 chose paper, Player 1 wins!";
  }
}

//show the div
function rps_player2() {
  let x = document.getElementById("rps_player2_div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//play again button
function ReplayRPS() {
  bot_hand = "";
  player_hand = "";
  player2_hand = "";
  display_rps_winner.textContent = "";

  console.log(bot_hand + player2_hand + player2_hand);

  player1_img.src = "";
  player2_img.src = "";

  let x = document.getElementById("rps_player2_div");
  x.style.display = "none";
}

//palindrome checker
function check_palindrome() {
  let palindrome_input = document.getElementById("palindrome");
  let palindrome_text = document.getElementById("palindrome_reveal");
  let input_text = palindrome_input.value;

  let lower_case = input_text.toLowerCase();

  const reverse = lower_case.split("").reverse().join("");

  console.log("input" + palindrome_input);
  console.log("" + lower_case);
  console.log(reverse);

  if (reverse === lower_case) {
    palindrome_text.textContent =
      input_text + " is a palindrome of " + reverse + "!";
  } else {
    palindrome_text.textContent =
      input_text + " is NOT a palindrome of " + reverse + "!";
  }
}

//--------------------CALCULATOR------------------------------
//https://www.geeksforgeeks.org/javascript-calculator/

let currentInput = "";
let currentOperation = "";
let previousInput = "";

let display = document.getElementById("calc_display");

function appendNumber(number) {
  currentInput += number;
  display.textContent = `${previousInput} ${currentOperation} ${currentInput}`;

  console.log(previousInput);
  console.log(currentOperation);
  console.log(currentInput);
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  console.log(previousInput);
  console.log(currentOperation);
  console.log(currentInput);
  console.log(result);
  console.log(prev);
  console.log(current);

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  display.textContent = currentInput;
}

function appendOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate(); // Calculate the previous operation before appending a new one
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  display.textContent = `${previousInput} ${currentOperation}`;

  console.log(previousInput);
  console.log(currentOperation);
  console.log(currentInput);
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  display.textContent = "0";
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

    if (minutes >= 24 * 60) {
      days = Math.floor(hours / 24);
      console.log(days);
      remainder_h = hours % 24;
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
}

//---------------------------------------
//https://www.30secondsofcode.org/js/s/random-hex-color-code/
function random_hex() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  console.log("hex: " + n);
  let hex = n.slice(0, 6);
  console.log("hex: " + hex);

  let circle_id = document.getElementById("first_hex");
  circle_id.style.backgroundColor = "#" + hex;

  let text_id = document.getElementById("first_hex_text");
  text_id.textContent = "#" + hex;
}
