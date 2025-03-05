function random_print() {
  let a = Math.floor(Math.random() * 101);

  const randomText = document.getElementById("random-print");

  randomText.innerHTML = "your random number is: " + a;
}

function dice_roll(x) {
  let a = Math.floor(Math.random() * 6) + 1;
  const dices = document.getElementById(`dice${x}`);

  dices.innerHTML = a;
}

function noBtn() {
  //yes button changes
  let myDiv1 = document.querySelector(".yes-btn");
  const yes_text = document.getElementById("yes-btn");
  let currWidth_yes = myDiv1.getBoundingClientRect().width;
  let currHeight_yes = myDiv1.getBoundingClientRect().height;
  if (currWidth_yes >= 400) {
    yes_text.innerHTML = "Ok :(";
  } else {
    myDiv1.style.width = currWidth_yes + 10 + "px";
    myDiv1.style.height = currHeight_yes + 10 + "px";
  }

  console.log("yes:" + currWidth_yes);

  //no button changes
  let myDiv2 = document.querySelector(".no-btn");

  let currWidth_no = myDiv2.getBoundingClientRect().width;
  let currHeight_no = myDiv2.getBoundingClientRect().height;
  console.log("no:" + currWidth_no);

  myDiv2.style.width = currWidth_no - 10 + "px";
  myDiv2.style.height = currHeight_no - 10 + "px";

  const text = document.getElementById("no-btn");

  if (currWidth_no <= 110) {
    document.getElementById("no-btn").style.fontSize = "100px";
    text.innerHTML = "";
  }

  const array = [
    "Are you sure?",
    "please?",
    "reconsider.. :((",
    "stop:((",
    "don't do this!",
  ];

  a = Math.floor(Math.random() * 5);

  if (currWidth_yes >= 200 && currWidth_yes < 400) {
    return alert(array[a]);
  }
  if (currWidth_yes >= 400) {
    return alert("Question successfully declined ://");
  }

  //change text in no button
  /*
  const text = document.getElementById("no-btn");
  const array = ["Are you sure?", "please?", "reconsider.. :((", "stop:(("];

  a = Math.floor(Math.random() * 4);
  if (currWidth_no <= 10) {
    myDiv2.style.width = 0 + "px";
    myDiv2.style.height = 0 + "px";
    text.innerHTML = " ";
  } else {
    text.innerHTML = array[a];
  }
    */
}
