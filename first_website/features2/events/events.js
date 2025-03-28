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
