//-----------------------------------FETCH POKEMON
//https://www.youtube.com/watch?v=37vxWr0WgQk

async function fetchPokemon() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);
    const pokemon_img = data.sprites.front_shiny;
    const imgElement = document.getElementById("pokemon_img");
    imgElement.src = pokemon_img;
    imgElement.style.display = "inline-block";
  } catch (error) {
    console.log(error);
  }
}

//fetch is even api
async function fetchisEven() {
  try {
    const number = document.getElementById("isEvenInput").value;

    const response = await fetch(
      `https://api.isevenapi.xyz/api/iseven/${number}/`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const number_bool = data.iseven;
    const txtElement = document.getElementById("revealEven");

    if (number_bool === true) {
      txtElement.textContent = number + " is even!";
    } else if (number_bool === false) {
      txtElement.textContent = number + " is odd!";
    }
  } catch (error) {
    console.log(error);
  }
}

//-----------------DOG API
//https://www.youtube.com/watch?v=NcUGT_-uoqE

function getDogImg() {
  let url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      display_dog(data.message);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}

const display_dog = (img_url) => {
  document.getElementById("dog_img").src = img_url;
};

//-------------------NUBMERS
//http://numbersapi.com/number/type

function getNumberTriv() {
  //ids for form:
  //id for the whether number or random
  const number_id = document.querySelector('input[name="number_pick"]:checked');
  //id for the input if a number
  const my_num = document.getElementById("number_input");
  //id for type, trivia, math, date or year
  const type_pick = document.querySelector('input[name="trivia"]:checked');
  //id for text to be updated
  let trivia_id = document.getElementById("number_display");

  //initialise global number type
  let number_type = "";

  //number type:
  if (number_id.value === "my_num") {
    if (my_num.value >= 0) {
      number_type = my_num.value;
    } else {
      number_type = "random";
    }
  } else if (number_id.value === "random") {
    number_type = "random";
  } else {
    number_type = "0";
  }

  let trivia_type = type_pick.value;

  //fetch api
  let url = `http://numbersapi.com/${number_type}/${trivia_type}?json`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayNumber(data.text);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}

function displayNumber(text) {
  let trivia_id = document.getElementById("number_display");

  trivia_id.textContent = text;
}
