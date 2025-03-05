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
  let currWidth_yes = myDiv1.getBoundingClientRect().width;
  myDiv1.style.width = currWidth_yes + 10 + "px";
  let currHeight_yes = myDiv1.getBoundingClientRect().height;
  myDiv1.style.height = currHeight_yes + 10 + "px";

  //no button changes
  let myDiv2 = document.querySelector(".no-btn");

  let currWidth_no = myDiv2.getBoundingClientRect().width;
  let currHeight_no = myDiv2.getBoundingClientRect().height;
  console.log(currWidth_no);

  myDiv2.style.width = currWidth_no - 10 + "px";
  myDiv2.style.height = currHeight_no - 10 + "px";

  const text = document.getElementById("no-btn");

  if (currWidth_no <= 110) {
    document.getElementById("no-btn").style.fontSize = "100px";
    text.innerHTML = " ";
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
