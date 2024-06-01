let url = "https://official-joke-api.appspot.com/jokes/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let joke = await getJoke();
  document.querySelector("#result").innerText = joke.setup;
  document.getElementById('joke-punchline').innerText = joke.punchline;
});

async function getJoke() {
  try {
    let res = await axios.get(url);
    // console.log(res);
    return {
        setup: res.data.setup,
        punchline: res.data.punchline
      };
  } catch (error) {
    return "No Joke found!";
  }
}
