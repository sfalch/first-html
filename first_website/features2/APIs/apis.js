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

  my_num.value = "0";
}

function displayNumber(text) {
  let trivia_id = document.getElementById("number_display");

  trivia_id.textContent = text;
}

//cat img api
const cat_img_id = document.getElementById("cat_img");

const getCatImg = () => {
  const url = "https://api.thecatapi.com/v1/images/search";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cat_img_id.src = data[0].url;
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
};

//featch weather api
//open meteo
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,sunrise,sunset,daylight_duration,precipitation_sum,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&models=dmi_seamless

const weather_url =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&models=dmi_seamless";

//information to get:
let temperature_max = "";
let temperature_min = "";
let sunrise_time = "";
let sunset_time = "";

//ids for text elements
const temp_max = document.getElementById("degrees_max");
const temp_min = document.getElementById("degrees_min");
const sunrise_text = document.getElementById("sunrise_text");
const sunset_text = document.getElementById("sunset_text");

//get and update data
fetch(weather_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    //max temp
    temperature_max = data.daily.temperature_2m_max[0];
    temp_max.textContent = temperature_max + " C°";

    //min temp
    temperature_min = data.daily.temperature_2m_min[0];
    temp_min.textContent = temperature_min + " C°";

    //sunrise time
    sunrise_time = data.daily.sunrise[0];
    let sunrise_arr = sunrise_time.split("T");
    sunrise_text.textContent = sunrise_arr[1];

    //sunset time
    sunset_time = data.daily.sunset[0];
    let sunset_arr = sunset_time.split("T");
    sunset_text.textContent = sunset_arr[1];
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

console.log(temperature_max);

temp_max.textContent = temperature_max + "C&deg;";
