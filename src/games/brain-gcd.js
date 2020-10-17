import runGameEngine from '../index.js';
import randomNumber from '../utils.js';

const getCorrectAnswer = (numberOne, numberTwo) => {
  const min = Math.min(numberOne, numberTwo);
  const max = Math.max(numberOne, numberTwo);
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return null;
};

const getExpression = (numberOne, numberTwo) => `${numberOne} ${numberTwo}`;

const playGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const arrayOfData = [];
  for (let numberOfRound = 0; numberOfRound < 3; numberOfRound += 1) {
    const firstNumber = randomNumber(1, 10);
    const secondNumber = randomNumber(1, 10);
    const expression = getExpression(firstNumber, secondNumber);
    const correctAnswer = getCorrectAnswer(firstNumber, secondNumber);
    arrayOfData.push(expression, correctAnswer);
  }
  runGameEngine(question, arrayOfData);
};
export default playGame;
