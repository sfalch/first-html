function randomRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

//the string for the mystery color
let mystery_string = "";

//the rgb text id
let text_id = document.getElementById("rgb_mystery");

//the rgb reveal message id
let reveal_id = document.getElementById("rgb_mystery1");

//guesss rgb code
function guessRGBcode() {
  //get circles ids
  let circles = document.getElementsByClassName("circle1");

  //iterate through all and change their background color to random
  for (const circ of circles) {
    let rgb = randomRGB();
    circ.style.backgroundColor = rgb;
  }

  //get random number for one of the circles
  let random = Math.floor(Math.random() * 5);
  //id for the specific random circle
  let mystery_id = document.getElementById(`rgb_circ${random}`);
  //set mystery string to the name of the random circles background color
  mystery_string = mystery_id.style.backgroundColor;

  //update the rgb text to new color
  text_id.textContent = mystery_string;
  //reset reveal text to blank
  reveal_id.textContent = "-";
}

function checkRGB(n) {
  //get id for the selected button
  let button_id = document.getElementById(`rgb_circ${n}`);

  //get the string for the background color
  let color = button_id.style.backgroundColor;

  // if the colors are the same, then change reveal text to correct,
  // else  wrong and reveal color name
  if (color === mystery_string) {
    reveal_id.textContent = "Correct! It is circle " + n;
  } else {
    reveal_id.textContent = "Wrong! That was " + color;
  }
}

//guess the color by the code
let color_guess = "";

//get a random color to the circle
function getColor() {
  let mystery2 = document.getElementById("color_mystery");

  color_guess = randomRGB();
  console.log(color_guess);
  mystery2.style.backgroundColor = color_guess;
}

//function that does:
//number input for r,g,b
// button that gets input
// compares numbers, updates message: more/less r,g,b
