import readlineSync from 'readline-sync';
import greeting from './greeting';

const runGameEngine = (gameTask, rounds) => {
  const userName = greeting();
  console.log(gameTask);
  for (let numberOfRound = 0; numberOfRound < rounds.length; numberOfRound += 1) {
    const { roundQuestion, correctAnswer } = rounds[numberOfRound];
    const answer = readlineSync.question(`Question: ${roundQuestion}\nYour answer:`);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}")\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGameEngine;
