import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

const playRound = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);
  const answer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer:`);
  let correctAnswer;
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  if (parseInt(answer, 10) === correctAnswer) {
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
export default playRound;
