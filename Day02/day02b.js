const gameInput = require("./input");

const games = gameInput.split("\n").map((game) => {
  const gameSplit = game.split(": ");
  const id = Number(gameSplit[0].split(" ")[1]);
  const results = gameSplit[1].split("; ");
  return { id, results };
});

const powers = games.map((game) => {
  const maxCounts = {
    red: 0,
    green: 0,
    blue: 0,
  };
  game.results.forEach((result) => {
    colourCounts = result.split(", ");
    colourCounts.forEach((colourCount) => {
      let [count, colour] = colourCount.split(" ");
      count = Number(count);
      if (count > maxCounts[colour]) {
        maxCounts[colour] = count;
      }
    });
  });
  return maxCounts.red * maxCounts.green * maxCounts.blue;
});

const powersTotal = powers.reduce((acc, curr) => acc + curr);
console.log(powersTotal);
