'use strict';
const worldPopulation = 7900;
/* function declaration:
function populationOfWorld1(population) {
    return population / worldPopulation * 100
}

const chinaPercentage = populationOfWorld1(1441)
const usaPercentage = populationOfWorld1(150);
const spainPercentage = populationOfWorld1(100);
console.log(chinaPercentage, usaPercentage, spainPercentage);
*/
//function expression:
const populationOfWorld2 = function (population) {
    return population / worldPopulation * 100;
}
const chinaPercentage = populationOfWorld2(1441)
const usaPercentage = populationOfWorld2(400);
const spainPercentage = populationOfWorld2(100);
console.log(chinaPercentage, usaPercentage, spainPercentage);