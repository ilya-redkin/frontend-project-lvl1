import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';
// import playGame from '../index.js';

let expression;
let correctAnswer;

const getExpression = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const operatorCode = randomNumber(0, 2);
  let operator;
  if (operatorCode === 0) {
    operator = '+';
    correctAnswer = firstNumber + secondNumber;
  } else if (operatorCode === 1) {
    operator = '-';
    correctAnswer = firstNumber - secondNumber;
  } else if (operatorCode === 2) {
    operator = '*';
    correctAnswer = firstNumber * secondNumber;
  }
  expression = `${firstNumber}${operator}${secondNumber}`;
};

const playRound = () => {
  getExpression();
  const answer = readlineSync.question(`Question: ${expression}\nYour answer:`);
  if (parseInt(answer, 10) === correctAnswer) {
    return true;
  }
  if (parseInt(answer, 10) !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}")`);
    return false;
  }
  return null;
};

// playGame(playRound, 'What is the result of the expression?');
export default playRound;
