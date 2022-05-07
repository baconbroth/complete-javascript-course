'use strict';
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const finlandDescription = describeCountry('Finland', 6, 'Helsinki');
const usaDescription = describeCountry('United States of America', 100, 'Washington D.C');
const spainDescription = describeCountry('Spain', 70, 'Barcelona');
console.log(`${finlandDescription}.
${usaDescription}.
${spainDescription}.`);