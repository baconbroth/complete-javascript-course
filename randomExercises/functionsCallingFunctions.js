'use strict';
const worldPopulation = 7900;
function populationOfWorld1(population) {
    return population / worldPopulation * 100
}
function describePopulation(country, population) {
    const populationPercentage = populationOfWorld1(population);
    return `${country} has ${population} million people, which is about ${populationPercentage}% of the world.`
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 400));
console.log(describePopulation('Spain', 100));