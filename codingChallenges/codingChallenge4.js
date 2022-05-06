const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;
const total = tip + bill;
console.log(`The Bill = ${bill}, The Tip = ${tip}, and the Total = ${total}`);
