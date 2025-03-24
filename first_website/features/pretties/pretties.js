//https://www.w3schools.com/howto/howto_js_slideshow.asp

//i hadn't learned objects when i made this and don't want to go in and change it all
//cards as letteers from a to z1
let a = "../../img/cards_deck/00.png";
let b = "../../img/cards_deck/01.png";
let c = "../../img/cards_deck/02.png";
let d = "../../img/cards_deck/03.png";
let e = "../../img/cards_deck/04.png";
let f = "../../img/cards_deck/05.png";
let g = "../../img/cards_deck/06.png";
let h = "../../img/cards_deck/07.png";
let i = "../../img/cards_deck/08.png";
let j = "../../img/cards_deck/09.png";
let k = "../../img/cards_deck/010.png";
let l = "../../img/cards_deck/011.png";
let m = "../../img/cards_deck/012.png";
let n = "../../img/cards_deck/10.png";
let o = "../../img/cards_deck/11.png";
let p = "../../img/cards_deck/12.png";
let q = "../../img/cards_deck/13.png";
let r = "../../img/cards_deck/14.png";
let s = "../../img/cards_deck/15.png";
let t = "../../img/cards_deck/16.png";
let u = "../../img/cards_deck/17.png";
let v = "../../img/cards_deck/18.png";
let w = "../../img/cards_deck/19.png";
let x = "../../img/cards_deck/110.png";
let y = "../../img/cards_deck/111.png";
let z = "../../img/cards_deck/112.png";
let a1 = "../../img/cards_deck/20.png";
let b1 = "../../img/cards_deck/21.png";
let c1 = "../../img/cards_deck/22.png";
let d1 = "../../img/cards_deck/23.png";
let e1 = "../../img/cards_deck/24.png";
let f1 = "../../img/cards_deck/25.png";
let g1 = "../../img/cards_deck/26.png";
let h1 = "../../img/cards_deck/27.png";
let i1 = "../../img/cards_deck/28.png";
let j1 = "../../img/cards_deck/29.png";
let k1 = "../../img/cards_deck/210.png";
let l1 = "../../img/cards_deck/211.png";
let m1 = "../../img/cards_deck/212.png";
let n1 = "../../img/cards_deck/30.png";
let o1 = "../../img/cards_deck/31.png";
let p1 = "../../img/cards_deck/32.png";
let q1 = "../../img/cards_deck/33.png";
let r1 = "../../img/cards_deck/34.png";
let s1 = "../../img/cards_deck/35.png";
let t1 = "../../img/cards_deck/36.png";
let u1 = "../../img/cards_deck/37.png";
let v1 = "../../img/cards_deck/38.png";
let w1 = "../../img/cards_deck/39.png";
let x1 = "../../img/cards_deck/310.png";
let y1 = "../../img/cards_deck/311.png";
let z1 = "../../img/cards_deck/312.png";

let cards_arr = [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
  a1,
  b1,
  c1,
  d1,
  e1,
  f1,
  g1,
  h1,
  i1,
  j1,
  k1,
  l1,
  m1,
  n1,
  o1,
  p1,
  q1,
  r1,
  s1,
  t1,
  u1,
  v1,
  w1,
  x1,
  y1,
  z1,
];

// array with the suits:
let hearts = [a, b, c, d, e, f, g, h, i, j, k, l, m];
let spades = [n, o, p, q, r, s, t, u, v, w, x, y, z];
let diamond = [a1, b1, c1, d1, e1, f1, g1, h1, i1, j1, k1, l1, m1];
let clubs = [n1, o1, p1, q1, r1, s1, t1, u1, v1, w1, x1, y1, z1];

let left_id = document.getElementById("left-card");
let main_id = document.getElementById("main-card");
let right_id = document.getElementById("right-card");

//index the cards start at
let index_l = 51;
let index_m = 0;
let index_r = 1;

//length of array
let len = 51;

function goRight() {
  if (index_r === 51) {
    left_id.src = cards_arr[index_m];
    main_id.src = cards_arr[index_r];
    right_id.src = cards_arr[0];

    index_l = index_m;
    index_m = index_r;
    index_r = 0;

    // console.log("GoL - left: " + left_id.src);
    // console.log("GoL - main: " + main_id.src);
    // console.log("GoL - right: " + right_id.src);

    // console.log("INDEX L l" + index_l);
    // console.log("INDEX L m" + index_m);
    // console.log("INDEX L r" + index_r);
  }
  left_id.src = cards_arr[index_m];
  main_id.src = cards_arr[index_r];
  right_id.src = cards_arr[index_r + 1];

  index_l = index_m;
  index_m = index_r;
  index_r = index_r + 1;

  //   console.log("GoL - left: " + left_id.src);
  //   console.log("GoL - main: " + main_id.src);
  //   console.log("GoL - right: " + right_id.src);

  //   console.log("INDEX L l" + index_l);
  //   console.log("INDEX L m" + index_m);
  //   console.log("INDEX L r" + index_r);
}

function goLeft() {
  if (index_l === 0) {
    right_id.src = cards_arr[index_m];
    main_id.src = cards_arr[index_l];
    left_id.src = cards_arr[len];

    index_r = index_m;
    index_m = index_l;
    index_l = len;

    // console.log("GoR - left: " + left_id.src);
    // console.log("GoR - main: " + main_id.src);
    // console.log("GoR - right: " + right_id.src);

    // console.log("INDEX R l" + index_l);
    // console.log("INDEX R m" + index_m);
    // console.log("INDEX R r" + index_r);
  }
  right_id.src = cards_arr[index_m];
  main_id.src = cards_arr[index_l];
  left_id.src = cards_arr[index_l - 1];

  index_r = index_m;
  index_m = index_l;
  index_l = index_l - 1;

  //   console.log("GoR - left: " + left_id.src);
  //   console.log("GoR - main: " + main_id.src);
  //   console.log("GoR - right: " + right_id.src);

  //   console.log("INDEX R l" + index_l);
  //   console.log("INDEX R m" + index_m);
  //   console.log("INDEX R r" + index_r);
}

//go to next suit
function nextSuit() {
  //if heart, go to next
  if (index_m <= 12) {
    right_id.src = cards_arr[14];
    main_id.src = cards_arr[13];
    left_id.src = cards_arr[12];

    index_r = 14;
    index_m = 13;
    index_l = 12;
  }
  //if spades, go to next
  else if (index_m <= 25) {
    right_id.src = cards_arr[27];
    main_id.src = cards_arr[26];
    left_id.src = cards_arr[25];

    index_r = 27;
    index_m = 26;
    index_l = 25;
  }
  //if diamonds, go to next
  else if (index_m <= 38) {
    right_id.src = cards_arr[40];
    main_id.src = cards_arr[39];
    left_id.src = cards_arr[38];

    index_r = 40;
    index_m = 39;
    index_l = 38;
  }
  //if clubs, go to next
  else {
    right_id.src = cards_arr[1];
    main_id.src = cards_arr[0];
    left_id.src = cards_arr[51];

    index_r = 1;
    index_m = 0;
    index_l = 51;
  }

  //   console.log("suit: " + left_id.src);
  //   console.log("suit: " + main_id.src);
  //   console.log("suit: " + right_id.src);

  //   console.log("suit: " + index_l);
  //   console.log("suit: " + index_m);
  //   console.log("suit: " + index_r);
}

//go to previous suit
function previousSuit() {
  //if heart, go to previous
  if (index_m <= 12) {
    right_id.src = cards_arr[40];
    main_id.src = cards_arr[39];
    left_id.src = cards_arr[38];

    index_r = 40;
    index_m = 39;
    index_l = 38;
  }
  //if spades, go to previous
  else if (index_m <= 25) {
    right_id.src = cards_arr[1];
    main_id.src = cards_arr[0];
    left_id.src = cards_arr[51];

    index_r = 1;
    index_m = 0;
    index_l = 51;
  }
  //if diamonds, go to previous
  else if (index_m <= 38) {
    right_id.src = cards_arr[14];
    main_id.src = cards_arr[13];
    left_id.src = cards_arr[12];

    index_r = 14;
    index_m = 13;
    index_l = 12;
  }
  //if clubs, go to previous
  else {
    right_id.src = cards_arr[27];
    main_id.src = cards_arr[26];
    left_id.src = cards_arr[25];

    index_r = 27;
    index_m = 26;
    index_l = 25;
  }
}

// //go n forward in card pile
// function goForward(n) {
//   right_id.src = cards_arr[index_r + n];
//   main_id.src = cards_arr[index_m + n];
//   left_id.src = cards_arr[index_l + n];

//   index_r += n;
//   index_m += n;
//   index_l += n;

//   if (index_m === 46) {

//   }
// }
