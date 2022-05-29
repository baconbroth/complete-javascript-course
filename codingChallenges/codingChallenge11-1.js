"use strict;";

const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCorrected = [...dogsJulia];
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  console.log(dogsKate);
  dogsJuliaCorrected.forEach(function (dogAge, i) {
    const type =
      dogAge >= 3 ? `an adult, and is ${dogAge} years old` : `still a puppy 🐶`;
    console.log(`Julia Dog number ${i + 1} is ${type}`);
  });
  dogsKate.forEach(function (dogAge, i) {
    const type =
      dogAge >= 3 ? `an adult, and is ${dogAge} years old` : `still a puppy 🐶`;
    console.log(`Kate Dog number ${i + 1} is ${type}`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
