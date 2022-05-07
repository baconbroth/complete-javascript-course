'use strict';
const worldPopulation = 7900;
const countryPopulations = [50, 100, 400, 1000];
console.log(countryPopulations.length === 4);
function populationOfWorld1(population) {
    return population / worldPopulation * 100;
}
const countryPopulationsPercent = [populationOfWorld1(countryPopulations[0]), populationOfWorld1(countryPopulations[1]), populationOfWorld1(countryPopulations[2]), populationOfWorld1(countryPopulations[3])];
console.log(countryPopulationsPercent);