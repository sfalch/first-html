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
