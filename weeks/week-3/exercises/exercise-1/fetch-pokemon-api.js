// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image");
console.log(image);
const name = document.getElementById("name");
const element = document.getElementById("element");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function

const fetchPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=120"

  fetch(url)
    .then((response) => response.json())
    .then((data ) => {
      console.log(data)
      console.log(data.results)
      console.log(data.results[0].name)
      data.results.forEach((item) => console.log(item.name) )
    })
};


const fetchPokemonsTest = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=120"

  // this returns a promise at first and then once completed the result of the fetch call as the return value for the function fetchPokemonsTest
  return fetch(url)
    .then((response) => response.json())
    .then((data ) => {
      // this returns "data.results" as the output of the fetch call.
      return data.results
    })
};

// Version 1 of our test
fetchPokemonsTest()
  // when we evoke this function it first returns a promise. Once that promise has been resolved .then is triggered and we console.log
  .then ((pokemonsV1) => {
    console.log('v1', pokemonsV1)
  });

// Version 2 of our test
const pokemonsV2 = fetchPokemonsTest();
console.log('v2', pokemonsV2)
// if we run it we can see that V2 was console logged before v1. Because we are not telling the program to stop and wait it just grabs whats returned from fetchPokemonsTest() and outputs it. In this case a promise.

// Version 3 of our test
// const pokemonsV3 = await fetchPokemonsTest();
// console.log('v3', pokemonsV3)
// This will fail as await is not supported outside of a async function.


// Version 4 of our test (We need to comment out the pokemonsV3 call to get our script to resume to here)
// here we declare a test function as async and then 
const testV4 = async () => {
  // we call our fetchPokemonsTest function with await meaning that our const is not declared until fetchPokemonsTest has delivered its promise.
  const pokemonsV4 = await fetchPokemonsTest();
  // We output our const
  console.log('v4', pokemonsV4);
}
testV4();


console.log("Running fetch");
fetchPokemons();

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.

//    b) Log only the name of the first pokemon in the
//    pokemon objects array

//    c) Log the names of all pokemons in the array

// 3) You might know that there are more than 20 pokemons
//    in the pokedex (1050 to be exact). Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.

// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.

const fetchElectrodeData = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/101/";
  fetch(url)
  .then((response) => response.json())
  .then((data ) => {
  })
};

// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.

// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link

