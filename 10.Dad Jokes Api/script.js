const jokeElement = document.getElementById("joke");
const jokebtn = document.getElementById("jokebtn");

jokebtn.addEventListener("click", generateJoke);

//USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke;
//     });
// }
