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

  dices.src = "./img/dice roll.gif";

  setTimeout(function () {
    dices.src = `./img/dice${a}.png`;
  }, 1500);
}

//Dice roll all
function dice_all() {
  let dice = document.querySelectorAll(".flex-container img");
  for (const die of dice) {
    die.src = "./img/dice roll.gif";
  }

  setTimeout(() => {
    for (const die of dice) {
      const num = Math.floor(Math.random() * 6) + 1;
      die.src = `./img/dice${num}.png`;
    }
  }, 1500);

  // let a = Math.floor(Math.random() * 6) + 1;
  // let b = Math.floor(Math.random() * 6) + 1;
  // let c = Math.floor(Math.random() * 6) + 1;
  // let d = Math.floor(Math.random() * 6) + 1;
  // let e = Math.floor(Math.random() * 6) + 1;
  // let f = Math.floor(Math.random() * 6) + 1;

  // const dice1 = document.getElementById(`dice1`);
  // const dice2 = document.getElementById(`dice2`);
  // const dice3 = document.getElementById(`dice3`);
  // const dice4 = document.getElementById(`dice4`);
  // const dice5 = document.getElementById(`dice5`);
  // const dice6 = document.getElementById(`dice6`);

  // dice1.src = "./img/dice roll.gif";
  // dice2.src = "./img/dice roll.gif";
  // dice3.src = "./img/dice roll.gif";
  // dice4.src = "./img/dice roll.gif";
  // dice5.src = "./img/dice roll.gif";
  // dice6.src = "./img/dice roll.gif";

  // setTimeout(function () {
  //   dice1.src = `./img/dice${a}.png`;
  //   dice2.src = `./img/dice${b}.png`;
  //   dice3.src = `./img/dice${c}.png`;
  //   dice4.src = `./img/dice${d}.png`;
  //   dice5.src = `./img/dice${e}.png`;
  //   dice6.src = `./img/dice${f}.png`;
  // }, 1500);
}

// Reset dice
function reset_dice() {
  let dice = document.querySelectorAll(".flex-container img");
  for (const die of dice) {
    die.src = "";
  }

  // const dice1 = document.getElementById(`dice1`);
  // const dice2 = document.getElementById(`dice2`);
  // const dice3 = document.getElementById(`dice3`);
  // const dice4 = document.getElementById(`dice4`);
  // const dice5 = document.getElementById(`dice5`);
  // const dice6 = document.getElementById(`dice6`);

  // dice1.src = "";
  // dice2.src = "";
  // dice3.src = "";
  // dice4.src = "";
  // dice5.src = "";
  // dice6.src = "";
}

// Heads or tails
function headstails() {
  let a = Math.floor(Math.random() * 2);
  let array = ["heads", "tails"];

  const coin = document.getElementById("headOrTail");
  const image = document.getElementById("coin_img");

  image.src = "./img/coin spin.gif";
  coin.textContent = "...";

  setTimeout(function () {
    coin.textContent = array[a];
    if (a === 0) {
      image.src = "./img/snoopy head.gif";
    } else {
      image.src = "./img/snoopy-wag-tail.gif";
    }
  }, 3000);
}

// Reset heads or tails
function reset_coin() {
  const coin = document.getElementById("headOrTail");

  const image = document.getElementById("coin_img");

  image.src = "";
  coin.textContent = "______";
}

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

    burger_img.src = "./img/burger_photo.JPEG";
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
function clearInputForm() {
  let burger_input = document.getElementById("word");
  burger_input.value = "";

  let burger_input2 = document.getElementById("burger_input");
  burger_input2.reset();
  //one of them work
}
