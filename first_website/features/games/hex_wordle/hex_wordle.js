//get color for hex
//id for hex
const hex_circle = document.getElementById("hex_circle");
//reveal answer id
const answer_text = document.getElementById("answer_text");

//the guess counter
let guess_counter = 0;

//array with hex things.
const hex_arrray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

//global variable for answer hex
let answer_hex = "";

const random_hex = () => {
  let n = Math.floor(Math.random() * 16);
  return hex_arrray[n];
};

function getColor() {
  let hex_object = {
    r1: random_hex(),
    r2: random_hex(),
    g1: random_hex(),
    g2: random_hex(),
    b1: random_hex(),
    b2: random_hex(),
  };

  answer_hex = `#${hex_object.r1}${hex_object.r2}${hex_object.g1}${hex_object.g2}${hex_object.b1}${hex_object.b2}`;
  console.log(answer_hex);

  hex_circle.style.backgroundColor = answer_hex;
  answer_text.textContent = "";

  guess_counter = 0;
}

const revealColor = () => {
  answer_text.textContent = answer_hex;
  answer_text.style.color = answer_hex;
};

const hideColor = () => {
  answer_text.textContent = "";
};

//------------------------

function checkGuess() {
  //guess counter goes up for the guess
  guess_counter++;
  //get id
  let guess_id = document.getElementById(`guess${guess_counter}`);

  //make string to uppercase
  let guess_string = guess_id.value;
  guess_string = guess_string.toUpperCase();
  console.log(guess_string);

  //--------------------------------------
  //going to validate, but not rn
  //--------------------------------------

  //change the code text
  let code_id = document.getElementById(`guess${guess_counter}_code`);
  code_id.textContent = "#" + guess_string;

  //change color of circle
  let color_id = document.getElementById(`guess${guess_counter}_circle`);
  color_id.style.backgroundColor = "#" + guess_string;

  //make guess into an array of chars to compare
  let guess_array = guess_string.split("");

  //get id for the rgb closeness string
  let RGB_text = document.getElementById(`guess${guess_counter}_rgb`);

  //compare if guessed correct
  console.log(answer_hex);
  console.log(`#${guess_string}`);
  if (answer_hex === `#${guess_string}`) {
    RGB_text.textContent = "Correct!";
  }
}
