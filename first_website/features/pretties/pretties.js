//https://www.w3schools.com/howto/howto_js_slideshow.asp

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
let f = "../../img/cards_deck/25.png";
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
  d,
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
  d1,
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

// function showNextImage() {
//     setImageIndex((index) => {
//         if (index === imageUrls.length - 1) return 0;
//         return index + 1;
//     });
// }

// function showPrevImage() {
//     setImageIndex((index) => {
//         if (index === 0) return imageUrls.length - 1;
//         return index - 1;
//     });
// }

let left_id = document.getElementById("left_id");
let main_id = document.getElementById("main_id");
let right_id = document.getElementById("right_id");

//index the cards start at
let index_l = 52;
let index_m = 0;
let index_r = 1;

//length of array
let len = cards_arr.length;

function goLeft() {
  //
  if (index_r === 0) {
    left_id.src = cards_arr[index_m];
    main_id.src = cards_arr[index_r];
    right_id.src = cards_arr[len];

    index_l = index_m;
    index_m = index_r;
    index_r = len;
  }
}
