let d1 = 96;
let d2 = 108;
let d3 = 89;
let k1 = 88;
let k2 = 91;
let k3 = 110;
let dAvgScore = (d1 + d2 + d3) / 3;
let kAvgScore = (k1 + k2 + k3) / 3;

console.log(`Dolphins average score = ${dAvgScore}!`);
console.log(`Koalas average score = ${kAvgScore}!`);
if (dAvgScore >= 100 || kAvgScore >= 100) {
    if (dAvgScore > kAvgScore) {
        console.log('Dolphins Win!');
    } else if (kAvgScore > dAvgScore) {
        console.log('Koalas Win!');
    } else {
        console.log('Tie Game!');
    }
} else {
    console.log('No one wins, because minimum score of 100 was not met!')
}