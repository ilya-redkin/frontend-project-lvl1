import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const number = randomNumber(1, 99);
  let correctAnswer;
  if (isPrime(number) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const answer = readlineSync.question(`Question: ${number}\nYour answer:`);
  if (
    (answer === 'yes' && correctAnswer === 'yes')
    || (answer === 'no' && correctAnswer === 'no')
  ) {
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
export default playRound;
