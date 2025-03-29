//card reveal
let card_name = "";
let card_guess = "";
let card_code = "";
let guess_code = "";

//translate into number codes;
let suit_code_guess = "";
let rank_code_guess = "";

//translate into number codes;
let suit_code_card = -1;
let rank_code_card = -1;

//get elements for card images
let card_img = document.getElementById("card_img");
let guess_img = document.getElementById("guess_img");

//set card face values as false
let card_faceup = false;
let guess_faceup = false;

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

  suit_code_card = s;
  rank_code_card = n;

  card_name = suit_arr[s] + number_arr[n];

  //hearts start with 0, spades: 1, diamond: 2, clubs: 3
  card_code = s.toString() + n.toString();

  //logging the image code and the card name
  console.log(card_code);
  console.log(card_name);

  //set shuffle gif and then set card face up to false
  card_img.src = "../../../img/cards_deck/shuffle.png";
  card_faceup = false;

  //time out to reveal card
  setTimeout(function () {
    card_img.src = "../../../img/cards_deck/back.png";
  }, 1050);
}

//image event listener for click
document.getElementById("card_img").addEventListener("click", revealCard);

function revealCard() {
  card_faceup = !card_faceup; //switches boolean

  console.log(card_faceup);
  if (card_code === "" && card_faceup === false) {
    //no code registered, then mystery card display
    card_img.src = `../../../img/cards_deck/mystery.png`;
  } else if (card_code === "" && card_faceup === true) {
    //if card face up, then turn back-side
    card_img.src = "../../../img/cards_deck/back.png";
  } else if (card_faceup === false) {
    //if card is face down: show card with the value
    card_img.src = `../../../img/cards_deck/${card_code}.png`;
  } else if (card_faceup === true) {
    //if card face up, then turn back-side
    card_img.src = "../../../img/cards_deck/back.png";
  }
}

//image event listener for click
document.getElementById("guess_img").addEventListener("click", revealGuess);

function revealGuess() {
  guess_faceup = !guess_faceup; //switches boolean

  if (guess_code === "" && guess_faceup === false) {
    //no code registered, then mystery card display
    guess_img.src = `../../../img/cards_deck/mystery.png`;
  } else if (guess_faceup === false) {
    //if card is face down: show card with the value
    guess_img.src = `../../../img/cards_deck/${guess_code}.png`;
  } else if (guess_faceup === true) {
    //if card face up, then turn back-side
    guess_img.src = "../../../img/cards_deck/back.png";
  }
}

//player guess card
function guessCard() {
  //declare variables to hold value strings
  // get the values from radio buttons
  let suit_value_s = document.querySelector('input[name="suit"]:checked').value;
  let rank_value_s = document.querySelector('input[name="rank"]:checked').value;

  //   console.log(suit_value_s);
  //   console.log(rank_value_s);

  switch (suit_value_s) {
    case "hearts":
      suit_code_guess = 0;
      break;
    case "spades":
      suit_code_guess = 1;
      break;
    case "diamond":
      suit_code_guess = 2;
      break;
    case "clubs":
      suit_code_guess = 3;
      break;
  }

  switch (rank_value_s) {
    case "ace":
      rank_code_guess = 0;
      break;
    case "two":
      rank_code_guess = 1;
      break;
    case "three":
      rank_code_guess = 2;
      break;
    case "four":
      rank_code_guess = 3;
      break;
    case "five":
      rank_code_guess = 4;
      break;
    case "six":
      rank_code_guess = 5;
      break;
    case "seven":
      rank_code_guess = 6;
      break;
    case "eight":
      rank_code_guess = 7;
      break;
    case "nine":
      rank_code_guess = 8;
      break;
    case "ten":
      rank_code_guess = 9;
      break;
    case "jack":
      rank_code_guess = 10;
      break;
    case "queen":
      rank_code_guess = 11;
      break;
    case "king":
      rank_code_guess = 11;
      break;
  }

  //-------------
  //reveal how close to answer
  let accuracy_id = document.getElementById("guess_accuracy");
  let suit_text = "";
  let rank_text = "";

  //if correct guess
  if (
    suit_code_card === suit_code_guess &&
    rank_code_card === rank_code_guess
  ) {
    revealAnswers();
  }

  //compare suit codes
  console.log("suit code for card: " + suit_code_card);
  console.log("suit code for guess: " + suit_code_guess);

  if (suit_code_card === suit_code_guess) {
    suit_text = "The suit is correct";
  } else if (suit_code_card === 0 && suit_code_guess === 2) {
    suit_text = "The suit is red";
  } else if (suit_code_card === 1 && suit_code_guess === 3) {
    suit_text = "The suit is black";
  } else if (suit_code_card === 2 && suit_code_guess === 0) {
    suit_text = "The suit is red";
  } else if (suit_code_card === 3 && suit_code_guess === 1) {
    suit_text = "The suit is black";
  } else {
    suit_text = "The suit is wrong";
  }

  //compare rank codes
  console.log("rank code for card: " + rank_code_card);
  console.log("rank code for guess: " + rank_code_guess);

  if (rank_code_card === rank_code_guess) {
    rank_text = "the rank is correct";
  } else if (rank_code_card > rank_code_guess) {
    rank_text = "the rank is too low";
  } else if (rank_code_card < rank_code_guess) {
    rank_text = "the rank is too high";
  } else {
    rank_text = "the rank is wrong";
  }

  accuracy_id.textContent = suit_text + " and " + rank_text;

  //---------------

  //make codes into strings
  suit_code_guess = suit_code_guess.toString();
  rank_code_guess = rank_code_guess.toString();

  //ensure string
  guess_code = suit_code_guess + rank_code_guess;
  console.log(guess_code);

  //set guess image card to the guess
  guess_img.src = `../../../img/cards_deck/${guess_code}.png`;
}

//reveal answers:
function revealAnswers() {
  //set cards to face up so that they will show face up
  card_faceup = true;
  guess_faceup = true;

  revealCard();
  revealGuess();
}

function resetCards() {
  //reset names and codes
  card_name = "";
  card_guess = "";
  card_code = "";
  guess_code = "";

  //set card to mystery
  card_img.src = `../../../img/cards_deck/mystery.png`;
  //set guess to blank
  guess_img.src = "../../../img/cards_deck/back.png";
}
