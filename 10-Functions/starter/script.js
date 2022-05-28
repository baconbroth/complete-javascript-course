'use strict';
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    //get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // Register Answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
//poll
const pollRegisterNewAnswer = poll.registerNewAnswer.bind(poll);
document
  .querySelector('.poll')
  .addEventListener('click', pollRegisterNewAnswer); //need to bind the registerNewAnswer function because in event handler, this keyword points to querySelector which is undefined

//bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.addEventListener('click', () => (header.style.color = 'blue'));
})();
