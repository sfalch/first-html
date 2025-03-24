//get color for hex
//id for hex
const hex_circle = document.getElementById("hex_circle");
//reveal answer id
const answer_text = document.getElementById("answer_text");

//the guess counter
let guess_counter = 0;

//array with hex things.
const hex_array = [
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

let hex_object = {
  r1: "",
  r2: "",
  g1: "",
  g2: "",
  b1: "",
  b2: "",
};

//global variable for answer hex
let answer_hex = "";

const random_hex = () => {
  let n = Math.floor(Math.random() * 16);
  return hex_array[n];
};

function getColor() {
  hex_object = {
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

  //------------------IF AT END OF GUESSES
  if (guess_counter > 6) {
    revealColor();
    alert("Out of guesses. The correct color was " + answer_hex);
    return;
  }

  //--------------------------------------
  //going to validate, but not rn
  //--------------------------------------

  //------------------------COLOR CHANGE -------------------------

  //change color of circle
  let color_id = document.getElementById(`guess${guess_counter}_circle`);
  color_id.style.backgroundColor = "#" + guess_string;

  //---------------------INFO FOR COMPARISON---------------------

  //make guess into an array of chars to compare
  let guess_array = guess_string.split("");

  //get id for the rgb closeness string
  let RGB_text = document.getElementById(`guess${guess_counter}_rgb`);

  //make guesses into numbers for comparison
  let hex_number_arr = {
    r1: HexToNumber(hex_object.r1),
    r2: HexToNumber(hex_object.r2),
    g1: HexToNumber(hex_object.g1),
    g2: HexToNumber(hex_object.g2),
    b1: HexToNumber(hex_object.b1),
    b2: HexToNumber(hex_object.b2),
  };
  console.log("hex: " + answer_hex);
  console.log(hex_number_arr);

  let guess_number_arr = {
    r1: HexToNumber(guess_array[0]),
    r2: HexToNumber(guess_array[1]),
    g1: HexToNumber(guess_array[2]),
    g2: HexToNumber(guess_array[3]),
    b1: HexToNumber(guess_array[4]),
    b2: HexToNumber(guess_array[5]),
  };
  console.log("guess: " + guess_string);
  console.log(guess_number_arr);

  //-----------------------CODE UPDATE----------------------
  let r1_code = document.getElementById(`r1_${guess_counter}`);
  let r2_code = document.getElementById(`r2_${guess_counter}`);
  let g1_code = document.getElementById(`g1_${guess_counter}`);
  let g2_code = document.getElementById(`g2_${guess_counter}`);
  let b1_code = document.getElementById(`b1_${guess_counter}`);
  let b2_code = document.getElementById(`b2_${guess_counter}`);

  //update the text
  r1_code.textContent = guess_array[0];
  r2_code.textContent = guess_array[1];
  g1_code.textContent = guess_array[2];
  g2_code.textContent = guess_array[3];
  b1_code.textContent = guess_array[4];
  b2_code.textContent = guess_array[5];

  //red color update
  if (guess_number_arr.r1 === hex_number_arr.r1) {
    r1_code.style.color = "green";
  }
  if (guess_number_arr.r2 === hex_number_arr.r2) {
    r2_code.style.color = "green";
  }

  //green color update
  if (guess_number_arr.g1 === hex_number_arr.g1) {
    g1_code.style.color = "green";
  }
  if (guess_number_arr.g2 === hex_number_arr.g2) {
    g2_code.style.color = "green";
  }

  //blue color update
  if (guess_number_arr.b1 === hex_number_arr.b1) {
    b1_code.style.color = "green";
  }
  if (guess_number_arr.b2 === hex_number_arr.b2) {
    b2_code.style.color = "green";
  }

  //---------------------------RGB TEXT UPDATE---------------------
  let red_text = "";
  let green_text = "";
  let blue_text = "";

  if (guess_number_arr.r1 === hex_number_arr.r1) {
    if (guess_number_arr.r2 > hex_number_arr.r2) {
      red_text = "Too much red";
    } else if (guess_number_arr.r2 < hex_number_arr.r2) {
      red_text = "Too little red";
    } else {
      red_text = "Red is wrong";
    }
  } else if (guess_number_arr.r1 > hex_number_arr.r1) {
    red_text = "Too much red";
  } else if (guess_number_arr.r1 < hex_number_arr.r1) {
    red_text = "Too little red";
  } else {
    red_text = "Red is wrong";
  }

  //compare green
  if (guess_number_arr.g1 === hex_number_arr.g1) {
    if (guess_number_arr.g2 > hex_number_arr.g2) {
      green_text = "Too much green";
    } else if (guess_number_arr.g2 < hex_number_arr.g2) {
      green_text = "Too little green";
    } else {
      green_text = "Green is wrong";
    }
  } else if (guess_number_arr.g1 > hex_number_arr.g1) {
    green_text = "Too much green";
  } else if (guess_number_arr.g1 < hex_number_arr.g1) {
    green_text = "Too little green";
  } else {
    green_text = "Green is wrong";
  }

  //compare blue
  if (guess_number_arr.b1 === hex_number_arr.b1) {
    if (guess_number_arr.b2 > hex_number_arr.b2) {
      blue_text = "Too much blue";
    } else if (guess_number_arr.b2 < hex_number_arr.b2) {
      blue_text = "Too little blue";
    } else {
      blue_text = "Blue is wrong";
    }
  } else if (guess_number_arr.b1 > hex_number_arr.b1) {
    blue_text = "Too much blue";
  } else if (guess_number_arr.b1 < hex_number_arr.b1) {
    blue_text = "Too little blue";
  } else {
    blue_text = "Blue is wrong";
  }

  let rgb_text = `${red_text}, ${green_text}, ${blue_text}`;

  RGB_text.textContent = rgb_text;

  //compare if guessed correct
  console.log(answer_hex);
  console.log(`#${guess_string}`);
  if (answer_hex === `#${guess_string}`) {
    RGB_text.textContent = "Correct!";
  }
}

function HexToNumber(x) {
  let n = 0;
  for (let i = 0; i < hex_array.length; i++) {
    if (x === hex_array[i]) {
      n = i;
    }
  }
  return n;
}
