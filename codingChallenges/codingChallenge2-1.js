'use strict';
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

function checkWinner(dolphinsScore, koalasScore) {
    if (dolphinsScore >= 2 * koalasScore) {
        return `Dolphins win (${dolphinsScore} vs. ${koalasScore})`
    } else if (koalasScore >= 2 * dolphinsScore) {
        return `Koalas win (${koalasScore} vs. ${dolphinsScore})`
    } else {
        return 'No team wins!'
    }
}
const winner = checkWinner(dolphinsScore, koalasScore);
console.log(winner);