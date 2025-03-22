// get random hex
function random_hex() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  console.log("hex: " + n);
  let hex = n.slice(0, 6);
  console.log("hex: " + hex);

  return "#" + hex;
}

//element id for the first hex game
let hex1 = document.getElementById("hex1");
let hex2 = document.getElementById("hex2");
let hex3 = document.getElementById("hex3");
let hex4 = document.getElementById("hex4");
let hex5 = document.getElementById("hex5");
let hex6 = document.getElementById("hex6");
let hex7 = document.getElementById("hex7");
let hex8 = document.getElementById("hex8");
let hex9 = document.getElementById("hex9");
let hex10 = document.getElementById("hex10");

//if for control hex
let controlHex1 = document.getElementById("controlHex1");

//keep trakc of circles displayed:
let circles = 10;

function showThree_1() {
  hex1.style.display = "none";
  hex5.style.display = "none";
  hex6.style.display = "none";
  hex7.style.display = "none";
  hex8.style.display = "none";
  hex9.style.display = "none";
  hex10.style.display = "none";

  hex2.style.display = "";
  hex3.style.display = "";
  hex4.style.display = "";

  circles = 3;
}

function showFive_1() {
  hex6.style.display = "none";
  hex7.style.display = "none";
  hex8.style.display = "none";
  hex9.style.display = "none";
  hex10.style.display = "none";

  hex1.style.display = "";
  hex2.style.display = "";
  hex3.style.display = "";
  hex4.style.display = "";
  hex5.style.display = "";

  circles = 5;
}

function showTen_1() {
  hex1.style.display = "";
  hex2.style.display = "";
  hex3.style.display = "";
  hex4.style.display = "";
  hex5.style.display = "";
  hex6.style.display = "";
  hex7.style.display = "";
  hex8.style.display = "";
  hex9.style.display = "";
  hex10.style.display = "";

  circles = 10;
}

function hexSpin1() {
  hex1.style.backgroundColor = random_hex();
  hex2.style.backgroundColor = random_hex();
  hex3.style.backgroundColor = random_hex();
  hex4.style.backgroundColor = random_hex();
  hex5.style.backgroundColor = random_hex();
  hex6.style.backgroundColor = random_hex();
  hex7.style.backgroundColor = random_hex();
  hex8.style.backgroundColor = random_hex();
  hex9.style.backgroundColor = random_hex();
  hex10.style.backgroundColor = random_hex();

  //   let n = 0;
  //   if (circles === 10) {
  //     n = Math.floor(Math.random() * 10);
  //     controlHex1.textContent = `hex${n}`.style.backgroundColor;
  //     console.log(`hex${n}`.style.backgroundColor);
  //     console.log(controlHex1.textContent);
  //   } else if (circles === 5) {
  //     n = Math.floor(Math.random() * 5);
  //     controlHex1.textContent = `hex${n}`.style.backgroundColor;
  //     console.log(`hex${n}`.style.backgroundColor);
  //     console.log(controlHex1.textContent);
  //   } else if (circles === 3) {
  //     n = Math.floor(Math.random() * 3);
  //     controlHex1.textContent = `hex${n}`.style.backgroundColor;
  //     console.log(`hex${n}`.style.backgroundColor);
  //     console.log(controlHex1.textContent);
  //   }
}
