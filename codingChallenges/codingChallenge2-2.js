'use strict';
const bills = [125, 555, 44];
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
}
// console.log(calcTip(100));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Here is your array for tips: ${tips}.`);
console.log(`Here is your array for total: ${total}.`);