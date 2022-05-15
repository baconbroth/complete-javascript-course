"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1.
let gameEventsValues = gameEvents.values();
gameEventsValues = [...gameEventsValues];
const gameEventsValuesSet = new Set(gameEventsValues);
// console.log(gameEventsValuesSet);

//2.
gameEvents.delete(64);
// console.log(gameEvents);

//3.
const numEvents = gameEvents.size;
const eventAvg = 90 / numEvents;
console.log(`An event happened, on average, every ${eventAvg} minutes`);

//4.
for (const [time, event] of gameEvents) {
  const half = time < 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`${half} ${time}: ${event}`);
}
