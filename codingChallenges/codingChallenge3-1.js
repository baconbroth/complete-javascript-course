"use strict";
/* gameplan
1. for loop that prints ...arr[i] in i+1 days
2. each iteration of loop concatenates the new string with old string

*/

function printForecast(arr) {
  let description = "...";
  for (let i = 0; i < arr.length; i++) {
    description = description + ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return description;
}
const forecast = printForecast([12, 5, -5, 0, 4]);
console.log(forecast);
