var part1 = document.getElementById("jokepart1");
var part2 = document.getElementById("jokepart2");
var cat = document.getElementById("category");

function getJoke() {
let p = fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=political");
p.then((response) => {
  return response.json();
})
  .then((content) => {
    if (content.hasOwnProperty("category")) {
      if (content["category"]=="Dark" || content["category"]=="Pun") {
        cat.innerHTML = `#${content["category"]}`;
      }
    }
    if (content["type"] === "single") {
      if (content.hasOwnProperty("joke")) {
        part1.innerHTML = content["joke"];
      } else {
        part1.innerHTML = "No joke found";
      }
    } else if (content["type"] == "twopart") {
      if (
        content.hasOwnProperty("setup") &&
        content.hasOwnProperty("delivery")
      ) {
        part1.innerHTML = content["setup"];
        part2.innerHTML = content["delivery"];
      } else {
        part1.innerHTML = "Incomplete joke";
        part2.innerHTML = "";
      }
    }
  }).catch((error) => {
    console.log("Error fetching joke:", error);
  });
}

getJoke();

setInterval(() => {
  getJoke();
}, 120000);