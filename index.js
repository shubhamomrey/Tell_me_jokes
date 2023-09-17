// import { jokes } from './rjokes'

// let jokeEl = document.getElementById("joke");

// function showjoke() {
//   for (let i = 0; i < jokes.length; i++) {
//     let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
//     jokeEl.innerHTML = randomJoke;
//   }
// }
// showjoke();


import { jokes } from './rjokes.js';

// Function to display a random joke
function showJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  const jokeEl = document.getElementById("joke");
  jokeEl.textContent = randomJoke;
  
}

// Add an event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("jokeButton");
  button.addEventListener("click", showJoke);
});



