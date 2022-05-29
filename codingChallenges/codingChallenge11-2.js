"use strict;";

const calcAverageHumanAge = (ages) => {
  let humanAge = ages
    .map((age) => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter((humanAge) => humanAge >= 18);
  const humanAgeAverage =
    humanAge.reduce((acc, cur) => acc + cur, 0) / humanAge.length;
  return humanAgeAverage;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
