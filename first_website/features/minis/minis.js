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

//anonymous function practice
let n = 0;
let x = 0;
const number = function () {
  n = Math.floor(Math.random() * 200);
  console.log(n);
  document.getElementById("now").textContent = "number = " + n;
};

const bigger = () => {
  n = Math.floor(Math.random() * 1000);
  console.log(n);
  document.getElementById("now").textContent = "number = " + n;
};

const odd = () => {
  n = document.getElementById("odd").value;
  if (n % 2 === 1) {
    document.getElementById("now").textContent = "yes";
  } else {
    document.getElementById("now").textContent = "even";
  }
};

const even = () => {
  n = document.getElementById("odd").value;
  if (n % 2 === 0) {
    document.getElementById("now").textContent = "yes";
  } else {
    document.getElementById("now").textContent = "odd";
  }
};

const odd2 = () => {
  x = document.getElementById("odd").value;
  if (x % 2 === 1) {
    document.getElementById("my_number").textContent = "yes";
  } else {
    document.getElementById("my_number").textContent = "even";
  }
};

const even2 = () => {
  x = document.getElementById("odd").value;
  if (x % 2 === 0) {
    document.getElementById("my_number").textContent = "yes";
  } else {
    document.getElementById("my_number").textContent = "odd";
  }
};

const reset = () => {
  document.getElementById("odd").value = 0;
  document.getElementById("odd").reset();
};

//practice objects.
let birthday_id = document.getElementById("birthday");
let age_id = document.getElementById("age");

let birthday = {
  day: document.getElementById("day").value,
  month: document.getElementById("month").value,
  year: document.getElementById("year").value,
};

const getAge = () => {
  switch (parseInt(birthday.month)) {
    case 1:
      birthday.month = "January";
      break;
    case 2:
      birthday.month = "February";
      break;
    case 3:
      birthday.month = "March";
      break;
    case 4:
      birthday.month = "April";
      break;
    case 5:
      birthday.month = "May";
      break;
    case 6:
      birthday.month = "June";
      break;
    case 7:
      birthday.month = "July";
      break;
    case 8:
      birthday.month = "August";
      break;
    case 9:
      birthday.month = "September";
      break;
    case 10:
      birthday.month = "October";
      break;
    case 11:
      birthday.month = "November";
      break;
    case 12:
      birthday.month = "December";
  }
  birthday_id.textContent = `${birthday.day} ${birthday.month}, ${birthday.year}`;
  console.log(`${birthday.day} ${birthday.month}, ${birthday.year}`);

  let age = 2025 - birthday.year;
  age_id.textContent = age.toString() + " Years old";
};

function resetPage() {
  window.location.reload();
}

//using this object
let name_object = {
  first: document.getElementById("first").value,
  last: document.getElementById("last").value,
};
// console.log(name_object);

let combine = {
  full_name: function () {
    return this.first + " " + this.last;
  },
};

//puts object into the function and .this is placeholder for the object
const yourName = () => {
  let name = combine.full_name.call(name_object);
  console.log(name);
  //update name
  document.getElementById("name").textContent = name;
};

//percent range input
const updatePercent = () => {
  const percent = document.getElementById("percent").value;

  document.getElementById("percent_text").textContent = percent;
};

//-------------------------------------
//append or delete gif
//https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

const appendSnoopy = () => {
  //if it doesnt exist already
  if (document.getElementById("snoopy-gif") === null) {
    //div where it needs to be appended to
    const parent = document.getElementById("parent");

    //create a new element with id, src, alt text, class
    const new_img = document.createElement("img");
    new_img.id = "snoopy-gif";
    new_img.src = "../../img/snoopy dancing gif.gif";
    new_img.alt = "Snoopy dancing gif";
    new_img.className = "coin-img";
    //append child of the new_img, to the parent variable set at top.
    parent.appendChild(new_img);
  }
};

const deleteSnoopy = () => {
  const node = document.getElementById("snoopy-gif");
  //if node.parentnode ??
  //anyways, remove the child
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
};

//add text on click event handler
let state = false;
//https://www.w3schools.com/js/js_htmldom_document.asp
document.getElementById("append_btn").onclick = () => {
  state = !state;
  if (state === false) {
    document.getElementById("snoopy_text").textContent = "Snoopy be groovy";
  } else {
    document.getElementById("snoopy_text").textContent = "";
  }
};

//checkbox wordle

const circle = document.getElementById("color_circle");

const red_id = document.getElementById("red");
const green_id = document.getElementById("green");
const blue_id = document.getElementById("blue");

const colorUpdate = () => {
  //all true
  if (
    red_id.checked === true &&
    green_id.checked === true &&
    blue_id.checked === true
  ) {
    circle.style.backgroundColor = "white";
  }
  //green + red
  else if (red_id.checked === true && green_id.checked === true) {
    circle.style.backgroundColor = "brown";
  }
  //red+ blue
  else if (red_id.checked === true && blue_id.checked === true) {
    circle.style.backgroundColor = "purple";
  }
  //green + blue
  else if (green_id.checked === true && blue_id.checked === true) {
    circle.style.backgroundColor = "teal";
  } else if (red_id.checked === true) {
    circle.style.backgroundColor = "red";
  } else if (green_id.checked === true) {
    circle.style.backgroundColor = "green";
  } else if (blue_id.checked === true) {
    circle.style.backgroundColor = "blue";
  }
  //none
  else {
    circle.style.backgroundColor = "black";
  }
};

//datalist practice
const datalist = document.getElementById("bool_input");
const accept_text = document.getElementById("accept_id");

const boolBtn = () => {
  let value = datalist.value;
  if (value === "true") {
    accept_text.textContent = "Yay! :)";
  } else if (value === "false") {
    accept_text.textContent = "Oh... :(";
  } else {
    accept_text.textContent = "Accepted";
  }
};

//color form
const color_form = document.getElementById("color_form");
const circle_color = document.getElementById("circle_color");
const color_text = document.getElementById("color_text");

const colorCircle = () => {
  let color = color_form.value;

  //update text
  color_text.textContent = color;
  //update the circle color
  circle_color.style.backgroundColor = color;
};
