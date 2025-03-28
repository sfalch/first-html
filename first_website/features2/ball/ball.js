//-----------------ANIMATION BALL
const ball = document.getElementById("ball");

let id = null;

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3
function playBall() {
  //starting corner position
  let top = -297;
  let left = 0;
  //increments
  let increment_t = 2;
  let increment_l = 2;
  //clear id
  clearInterval(id);
  //set interval of movement
  id = setInterval(frame, 1);

  //funcation for interval
  function frame() {
    //stop if hit middle
    // if (left === 0 && top === -297) {
    //   clearInterval(id);
    // }

    //if hit the right side, go left
    if (left >= 225) {
      increment_l = -Math.floor(Math.random() * 10);

      //random factor for the vertical position
      //Math.round(Math.random()) = 0 or 1
      //*2 = 0 or 2
      //-1 = 1 or -1
      //multiplied by 5: random factor of pixel speed
      increment_t = (Math.round(Math.random()) * 2 - 1) * 5;
    }
    //if hit left side, go right
    if (left <= -225) {
      increment_l = Math.floor(Math.random() * 10);

      increment_t = (Math.round(Math.random()) * 2 - 1) * 5;
    }
    //if hit bottom, go up
    if (top >= -75) {
      increment_t = -Math.floor(Math.random() * 10);

      increment_l = (Math.round(Math.random()) * 2 - 1) * 5;
    }
    //if hit top, go down
    if (top <= -522) {
      increment_t = Math.floor(Math.random() * 10);

      increment_l = (Math.round(Math.random()) * 2 - 1) * 5;
    }

    top += increment_t;
    left += increment_l;
    ball.style.top = top + "px";
    ball.style.left = left + "px";
    // console.log("increment t " + increment_t);
    // console.log("increment l " + increment_l);
    // console.log("top " + top);
    // console.log("left " + left);
    // console.log(increment_l);
    // console.log(increment_t);
  }
}

function stopBall() {
  clearInterval(id);
}

function resetBall() {
  clearInterval(id);
  ball.style.top = -297 + "px";
  ball.style.left = 0 + "px";
}
