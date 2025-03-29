//rock paper scissors
let bot_hand = "";
let player_hand = "";
let player2_hand = "";
//r = rock, p = paper, s = scissor
let hand_array = ["r", "p", "s"];

//get display id
let display_rps_winner = document.getElementById("rps_winner");
let announcement = "";

//images
let player1_img = document.getElementById("rps_1_img");
let player2_img = document.getElementById("rps_2_img");

//bot select
function rps_bot() {
  let a = Math.floor(Math.random() * 3);

  bot_hand = hand_array[a];
  console.log("Bot-hand: " + bot_hand);

  let x = document.getElementById("rps_player2_div");
  x.style.display = "none";
}

//player select
function check_rps_winner(hand) {
  //0 = rock, 1 = paper, 2 = scissor
  player_hand = hand_array[hand];

  if (bot_hand === "r" || bot_hand === "p" || bot_hand === "s") {
    announcement = helper_rps_check(bot_hand, "Bot");

    display_rps_winner.textContent = announcement;
  }
}

//player 2 select
function player_rps_winner(hand) {
  player2_hand = hand_array[hand];

  announcement = helper_rps_check(player2_hand, "Player 2");
  display_rps_winner.textContent = announcement;
}

//player 1 vs opponent
//this can be optimized but not going to right now
function helper_rps_check(opponent, string) {
  if (player_hand === opponent) {
    if (player_hand === "r") {
      player1_img.src = "../../../img/rps/rock.png";
      player2_img.src = "../../../img/rps/rock.png";
    }
    if (player_hand === "p") {
      player1_img.src = "../../../img/rps/paper.png";
      player2_img.src = "../../../img/rps/paper.png";
    }
    if (player_hand === "s") {
      player1_img.src = "../../../img/rps/scissor.png";
      player2_img.src = "../../../img/rps/scissor.png";
    }

    return "Tie!";
  }
  if (player_hand === "r" && opponent === "p") {
    player1_img.src = "../../../img/rps/rock.png";
    player2_img.src = "../../../img/rps/paper.png";
    return `${string} chose paper, ${string} wins!`;
  }
  if (player_hand === "p" && opponent === "s") {
    player1_img.src = "../../../img/rps/paper.png";
    player2_img.src = "../../../img/rps/scissor.png";
    return `${string} chose scissors, ${string} wins!`;
  }
  if (player_hand === "s" && opponent === "r") {
    player1_img.src = "../../../img/rps/scissor.png";
    player2_img.src = "../../../img/rps/rock.png";
    return `${string} chose rock, ${string} wins!`;
  }
  if (player_hand === "r" && opponent === "s") {
    player1_img.src = "../../../img/rps/rock.png";
    player2_img.src = "../../../img/rps/scissor.png";
    return "Player 1 chose rock, Player 1 wins!";
  }
  if (player_hand === "s" && opponent === "p") {
    player1_img.src = "../../../img/rps/scissor.png";
    player2_img.src = "../../../img/rps/paper.png";
    return "Player 1 chose scissor, Player 1 wins!";
  }
  if (player_hand === "p" && opponent === "r") {
    player1_img.src = "../../../img/rps/paper.png";
    player2_img.src = "../../../img/rps/rock.png";
    return "Player 1 chose paper, Player 1 wins!";
  }
}

//show the div
function rps_player2() {
  let x = document.getElementById("rps_player2_div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//play again button
function ReplayRPS() {
  bot_hand = "";
  player_hand = "";
  player2_hand = "";
  display_rps_winner.textContent = "";

  console.log(bot_hand + player2_hand + player2_hand);

  player1_img.src = "";
  player2_img.src = "";

  let x = document.getElementById("rps_player2_div");
  x.style.display = "none";
}
