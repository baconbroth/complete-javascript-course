const country = "Portugal";
const continent = "Europe";
const population = 13;
const language = "Portuguese";
const averagePopulation = 33;
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
let populationDifference;
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    populationDifference = averagePopulation - population;
    console.log(`${country}'s population is ${populationDifference} million below average`);
}