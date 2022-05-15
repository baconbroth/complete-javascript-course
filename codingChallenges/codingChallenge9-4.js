"use strict";
//gameplan
//1. split word into two words using split _
//2. replace first letter with cap

//coding challenge
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", () => {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   let i = 1;
//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     //console.log(first, second);
//     let output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     output = output.padEnd(20, " ");
//     const repeatedOutput = output + "✅".repeat(i); //could also use destructured for(const [i, row] of row.entries()) to get the index
//     console.log(repeatedOutput);
//     i++;
//   }
// });

//125. String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const flightsArray = flights.split("+");
for (const flight of flightsArray) {
  let [type, from, to, time] = flight.split(";");
  const output = `${type.includes("Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`;
  console.log(output);
}
