'use strict';
const myCountry = {
    country: 'United States',
    capital: 'Washington DC',
    language: 'English',
    population: 400,
    neighbours: ['Canada', 'Mexico']
};
myCountry['population'] -= 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
