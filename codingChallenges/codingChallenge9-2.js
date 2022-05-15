"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }
for (const [goalNumber, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${playerName}`);
}
//2.
let average = 0;
const odds = Object.values(game.odds);
console.log(odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`; //because the team array here is [team1, x, team2] and there are properties within game object for team1 and team2, we can do this to get the actual team names!
  //console.log(`Off of ${teamStr} ${odd}`);
}

//bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// we are looking through the scored players array and for each name we find we are going to see if that name exists in the scorers object. if it doesn't exist we are going to create that player name as a property with a value of 1. now we will continue to go through the array and any new playerse will get new properties and if there is a match for a player we simply add 1 to that value
console.log(scorers);
// expected:
// {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2
//     }
