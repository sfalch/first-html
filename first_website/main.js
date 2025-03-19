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

//start timer
//https://codepen.io/thecodingpie/pen/JjGeyVO?editors=1010

//rock paper scissors
let bot_hand = "";
let player_hand = "";
let player2_hand = "";
//r = rock, p = paper, s = scissor
let hand_array = ["r", "p", "s"];

//get display id
let display_rps_winner = document.getElementById("rps_winner");
let announcement = "";

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
    return "Tie!";
  }
  if (player_hand === "r" && opponent === "p") {
    return `${string} wins!`;
  }
  if (player_hand === "p" && opponent === "s") {
    return `${string} wins!`;
  }
  if (player_hand === "s" && opponent === "r") {
    return `${string} wins!`;
  }
  if (player_hand === "r" && opponent === "s") {
    return "Player 1 wins!";
  }
  if (player_hand === "s" && opponent === "p") {
    return "Player 1 wins!";
  }
  if (player_hand === "p" && opponent === "r") {
    return "Player 1 wins!";
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

  let x = document.getElementById("rps_player2_div");
  x.style.display = "none";
}
