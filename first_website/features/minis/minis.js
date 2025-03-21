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

  dices.src = "../../img/dice roll.gif";

  setTimeout(function () {
    dices.src = `../../img/dice${a}.png`;
  }, 1500);
}

//Dice roll all
function dice_all() {
  let dice = document.querySelectorAll(".flex-container img");
  for (const die of dice) {
    die.src = "../../img/dice roll.gif";
  }

  setTimeout(() => {
    for (const die of dice) {
      const num = Math.floor(Math.random() * 6) + 1;
      die.src = `../../img/dice${num}.png`;
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

  image.src = "../../img/coin spin.gif";
  coin.textContent = "...";

  setTimeout(function () {
    coin.textContent = array[a];
    if (a === 0) {
      image.src = "../../img/snoopy head.gif";
    } else {
      image.src = "../../img/snoopy-wag-tail.gif";
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

//get random hex
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
  text_id.style.color = "#" + hex;
}

//get random rgb
function random_rgb() {
  //each color goes to 255
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color_string = `rgb(${r}, ${g}, ${b})`;

  let circle_id = document.getElementById("first_rgb");
  circle_id.style.backgroundColor = color_string;
  circle_id.style.color = color_string;

  let text_id = document.getElementById("first_rgb_text");
  text_id.textContent = color_string;
  text_id.style.color = color_string;
}

//card reveal
let card_name = "";
let card_guess = "";
let card_code = "";

let card_img = document.getElementById("card_img");
let card_faceup = false;

// document.querySelector("card_get").addEventListener("click", getCard);

function getCard() {
  let suit_arr = ["♥️", "♠️", "♦️", "♣️"];
  let number_arr = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let s = Math.floor(Math.random() * 4);
  let n = Math.floor(Math.random() * 13);

  card_name = suit_arr[s] + number_arr[n];

  //hearts start with 0, spades: 1, diamond: 2, clubs: 3
  card_code = s.toString() + n.toString();

  //logging the image code and the card name
  console.log(card_code);
  console.log(card_name);

  //set shuffle gif and then set card face up to false
  card_img.src = "../../img/cards_deck/shuffle.gif";
  card_faceup = false;

  //time out to reveal card
  setTimeout(function () {
    card_img.src = "../../img/cards_deck/back.png";
  }, 1050);
}

//image event listener for click
document.getElementById("card_img").addEventListener("click", revealCard);

function revealCard() {
  card_faceup = !card_faceup; //switches boolean

  console.log(card_faceup);
  if (card_faceup === false) {
    //if card is face down: show card with the value
    card_img.src = `../../img/cards_deck/${card_code}.png`;
  } else if (card_faceup === true) {
    //if card face up, then turn back-side
    card_img.src = "../../img/cards_deck/back.png";
  }
}
