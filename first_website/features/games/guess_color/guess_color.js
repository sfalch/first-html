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
let r_color = "";
let g_color = "";
let b_color = "";

//get a random color to the circle
function getColor() {
  let mystery2 = document.getElementById("color_mystery");

  r_color = Math.floor(Math.random() * 255);
  g_color = Math.floor(Math.random() * 255);
  b_color = Math.floor(Math.random() * 255);

  color_guess = `rgb(${r_color}, ${g_color}, ${b_color})`;
  console.log(color_guess);
  mystery2.style.backgroundColor = color_guess;
}

//function that does:
//number input for r,g,b
// button that gets input
// compares numbers, updates message: more/less r,g,b

//get input and validate code guess.

//id's for text
let validate_id = document.getElementById("rgb_validate");
let guess_id = document.getElementById("rgb_guess");
//id for guess circle
let guess_circle = document.getElementById("color_guess");

//guess counter
let guess_counter_id = document.getElementById("guess_counter");
let guess_counter = 0;

//the input id's
let r_id = document.getElementById("r_guess");
let g_id = document.getElementById("g_guess");
let b_id = document.getElementById("b_guess");

//text parts for the validation string
let r_string = "";
let g_string = "";
let b_string = "";
let validation_string = "";

function guessCode() {
  //update guess counter
  guess_counter++;
  guess_counter_id.textContent = guess_counter;

  //getting the values
  let r_value = r_id.value;
  let g_value = g_id.value;
  let b_value = b_id.value;

  //make into ints for comparison
  r_value = parseInt(r_value);
  g_value = parseInt(g_value);
  b_value = parseInt(b_value);
  // console.log("guess: " + r_value);
  // console.log("guess: " + g_value);
  // console.log("guess: " + b_value);

  // console.log("color: " + r_color);
  // console.log("color: " + g_color);
  // console.log("color: " + b_color);

  if (r_value <= 255 && g_value <= 255 && b_value <= 255) {
    //update the guess text
    guess_id.textContent = `Your guess: rgb(${r_value}, ${g_value}, ${b_value})`;

    //conditions for updating the validation text

    //if all is correct:
    if (r_value === r_color && g_value === g_color && b_value === b_color) {
      validation_string = "Correct! The color is " + color_guess;
      validate_id.textContent = validation_string;
      guess_circle.style.backgroundColor = color_guess;
    } else {
      //validate red
      if (r_value === r_color) {
        r_string = "Red is correct";
      } else if (r_value > r_color) {
        r_string = "Too much red";
      } else if (r_value < r_color) {
        r_string = "Too little red";
      }

      //validate green
      if (g_value === g_color) {
        g_string = "Green is correct";
      } else if (g_value > g_color) {
        g_string = "Too much green";
      } else if (g_value < g_color) {
        g_string = "Too little green";
      }

      //validate blue
      if (b_value === b_color) {
        b_string = "Blue is correct";
      } else if (b_value > b_color) {
        b_string = "Too much blue";
      } else if (b_value < b_color) {
        b_string = "Too little blue";
      }

      //combining and updating string
      validation_string = r_string + "; " + g_string + "; " + b_string;
      // console.log(validation_string);
      validate_id.textContent = validation_string;

      //get the color string so can update color square for comparison
      let guess_circle_text = `rgb(${r_value}, ${g_value}, ${b_value})`;
      guess_circle.style.backgroundColor = guess_circle_text;
    }
  }
}
