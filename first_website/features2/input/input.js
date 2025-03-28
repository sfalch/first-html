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

//checkbox color

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
