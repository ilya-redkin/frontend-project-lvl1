import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

const playRound = () => {
  const number = randomNumber(1, 99);
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  if (
    (number % 2 === 0 && answer === 'yes')
    || (number % 2 !== 0 && answer === 'no')
  ) {
    return true;
  }
  if (number % 2 === 0 && answer !== 'yes') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
    return false;
  }
  if (number % 2 !== 0 && answer !== 'no') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
    return false;
  }
  return null;
};
export default playRound;
