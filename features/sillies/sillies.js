// Valentine no button
function noBtn() {
  //yes button changes
  let myDiv1 = document.querySelector(".yes-btn");
  const yes_text = document.getElementById("yes-btn");
  let currWidth_yes = myDiv1.getBoundingClientRect().width;
  let currHeight_yes = myDiv1.getBoundingClientRect().height;
  // Stop increasing size
  if (currWidth_yes >= 400) {
    yes_text.textContent = "Ok :(";
  } else {
    myDiv1.style.width = currWidth_yes + 10 + "px";
    myDiv1.style.height = currHeight_yes + 10 + "px";
  }

  // check sizes
  console.log("yes:" + currWidth_yes);

  //no button changes
  let myDiv2 = document.querySelector(".no-btn");

  let currWidth_no = myDiv2.getBoundingClientRect().width;
  let currHeight_no = myDiv2.getBoundingClientRect().height;
  console.log("no:" + currWidth_no);

  myDiv2.style.width = currWidth_no - 10 + "px";
  myDiv2.style.height = currHeight_no - 10 + "px";

  const text = document.getElementById("no-btn");

  // confirmation messages
  if (currWidth_no <= 110) {
    document.getElementById("no-btn").style.fontSize = "100px";
    text.textContent = "";
  }

  const array = [
    "Are you sure?",
    "please?",
    "reconsider.. :((",
    "stop:((",
    "don't do this!",
    "please confirm again",
  ];

  a = Math.floor(Math.random() * 6);

  // condition to accept "no" and stop size change
  if (currWidth_yes >= 200 && currWidth_yes < 400) {
    return alert(array[a]);
  }
  if (currWidth_yes >= 400) {
    return alert("Question successfully declined ://");
  }
}

// Valentine yes button alert update
function yesBtn() {
  let myDiv1 = document.querySelector(".yes-btn");
  let currWidth_yes = myDiv1.getBoundingClientRect().width;
  if (currWidth_yes >= 400) {
    return alert("too late!");
  } else {
    alert("yay<3");
  }
}

//create text saying who burger is and image of burger
function BurgerWho() {
  let burger_text = document.querySelector("#burger_text");
  let burger_img = document.querySelector("#burger_img");

  if (burger_text.textContent === "Burger, the Cat:") {
    burger_text.textContent = "";
    burger_img.src = "";
    burger_img.alt = "";
    burger_img.title = "";
  } else {
    burger_text.textContent = "Burger, the Cat:";

    burger_img.src = "../../img/burger_photo.JPEG";
    burger_img.alt = "Photo of a black cat; the cat's name is burger";
    burger_img.title = "Photo of a black cat; the cat's name is burger";
  }
}
function ValidateBurger() {
  let guess = document.getElementById("word");
  let word = guess.value;
  console.log(word);
  let validatedWord = word.toLowerCase();

  let confirmation = "";
  if (validatedWord === "burger") {
    confirmation = "Correct! The word is: " + word;
  } else {
    confirmation = "Wrong! Try again.";
  }
  console.log(validatedWord);
  console.log(confirmation);
  document.getElementById("BurgerConfirm").textContent = confirmation;
}

//clear burger input form
function clearBurgerForm() {
  let burger_input = document.getElementById("word");
  burger_input.value = "";

  let burger_input2 = document.getElementById("burger_input");
  burger_input2.reset();
  //one of them work
}

//halloween countdown time

function HalloweenCountdown() {
  // Set the date we're counting down to
  let countDownDate = new Date("Oct 31, 2025 12:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#C_days").textContent = days;
    document.querySelector("#C_hours").textContent = hours;
    document.querySelector("#C_minutes").textContent = minutes;
    document.querySelector("#C_seconds").textContent = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("halloween").textContent = "Happy Halloween!";
    }
  }, 1000);
}

//refresh page
function refreshPage() {
  window.location.reload();
}

//time since halloween 2024
function sinceHalloween() {
  let origin = new Date("Oct 31, 2024 12:00:00").getTime();
  let now = new Date().getTime();

  let difference = now - origin;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  let text = document.getElementById("hallowen_days");
  text.textContent = days;
}

//reset countdown
function resetCountDown() {
  document.getElementById("timer_box").textContent = "00 : 00 : 00";
}
