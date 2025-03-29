//------------------ ON CHANGE
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

const color_text = document.getElementById("color_text");
const color_circle = document.getElementById("circle_color");

document.getElementById("color_form").addEventListener("change", (event) => {
  color_circle.style.backgroundColor = event.target.value;
  color_text.textContent = event.target.value;
  color_text.style.color = event.target.value;
});

//other method
const color_text2 = document.getElementById("color_text2");
const color_circle2 = document.getElementById("circle_color2");
const color_form = document.getElementById("color_form2");

document.getElementById("color_form2").onchange = () => {
  let value = color_form.value;
  color_circle2.style.backgroundColor = value;
  color_text2.textContent = value;
  color_text2.style.color = value;
};

//-------------MOUSE OVER
const text_id = document.getElementById("rainbow_text");

//type 1
document.getElementById("red").onmouseover = () => {
  text_id.textContent = "Red";
  text_id.style.color = "red";
};

//type 2
document.getElementById("orange").addEventListener("mouseover", () => {
  text_id.textContent = "Orange";
  text_id.style.color = "orange";
});

//the rest of them in type 1: yellow, green, blue, purple
document.getElementById("yellow").onmouseover = () => {
  text_id.textContent = "Yellow";
  text_id.style.color = "yellow";
};
document.getElementById("green").onmouseover = () => {
  text_id.textContent = "Green";
  text_id.style.color = "green";
};
document.getElementById("blue").onmouseover = () => {
  text_id.textContent = "Blue";
  text_id.style.color = "blue";
};
document.getElementById("purple").onmouseover = () => {
  text_id.textContent = "Purple";
  text_id.style.color = "Purple";
};

//----------------MOUSE DOWN

//on mouse down, make the mouse run
const mouse_box = document.getElementById("mouse-box");

mouse_box.addEventListener("mousedown", moveMouse);

mouse_box.addEventListener("mouseup", stopMouse);

//first, make the mouse run around in the box
//  mouse movement from "ball" folder
const mouse = document.getElementById("mouse");

let left_text = "";
let top_text = "";

let interval_id = null;

//direction of increase
let top_inc = 4;
let left_inc = 4;
//positive top moves it down
//positive left moves it right

//figure startign position height from inside the box: 6px

//left border: (500px-30px / 2 ) - 500= -235
//rigth border: 500px-30px / 2 = 235
//upper border: -300 - 6 = -306
//lower border: -30 - 6 = -36
//middle: 0, -165

function moveMouse() {
  clearInterval(interval_id);
  let left = 0;
  let top = -165;

  interval_id = setInterval(movement, 1);

  function movement() {
    //if hit the right side, go left
    if (left >= 235) {
      //set the left movement to negative, so it goes backwards
      left_inc = -4;
      //vertical movement gets random factor between 1 and 4, positive or negative
      top_inc = (Math.round(Math.random()) * 2 - 1) * 4;
    }

    //if hit the left side, go right
    if (left <= -235) {
      //set the left movement to positive, so it goes forward
      left_inc = 4;
      //vertical movement gets random factor between 1 and 4, positive or negative
      top_inc = (Math.round(Math.random()) * 2 - 1) * 4;
    }

    //if hit the top, go down
    if (top <= -306) {
      //set the top movement to positive, so it goes down
      top_inc = 4;
      //horizontal movement gets random factor between 1 and 4, positive or negative
      left_inc = (Math.round(Math.random()) * 2 - 1) * 4;
    }

    //if hit the bottom, go up
    if (top >= -36) {
      //set the top movement to negative, so it goes up
      top_inc = -4;
      //horizontal movement gets random factor between 1 and 4, positive or negative
      left_inc = (Math.round(Math.random()) * 2 - 1) * 4;
    }

    //increase pixel position:
    top += top_inc;
    left += left_inc;

    top_text = top + "px";
    left_text = left + "px";

    //add new values to position
    mouse.style.top = top_text;
    mouse.style.left = left_text;
  }
}

//stop mousemovement;
function stopMouse() {
  clearInterval(interval_id);
  console.log("stop");
}
