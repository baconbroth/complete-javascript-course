"use strict";
/* main challenge
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
}
function calcTotal(bill, tip) {
    return bill + tip;
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTotal(bills[i], tips[i]));
}

console.log(`Here is your array for tips: ${tips}.`);
console.log(`Here is your array for total: ${totals}.`);
*/

//bonus challenge
//sample data arr = [1, 2, 3, 10]
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calcAverage([1, 2, 3, 14, 6]));
