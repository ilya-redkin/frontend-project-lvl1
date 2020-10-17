import randomNumber from '../utils.js';
import runGameEngine from '../index.js';

const getOperator = () => {
  const operators = '+-*';
  return operators[randomNumber(0, 2)];
};
const getCorrectAnswer = (numberOne, sign, numberTwo) => {
  switch (sign) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default: break;
  }
  return null;
};
const getExpression = (numberOne, sign, numberTwo) => `${numberOne}${sign}${numberTwo}`;

const playGame = () => {
  const question = 'What is the result of the expression?';
  const arrayOfData = [];
  for (let numberOfRound = 0; numberOfRound < 3; numberOfRound += 1) {
    const firstNumber = randomNumber(1, 10);
    const secondNumber = randomNumber(1, 10);
    const operator = getOperator();
    const expression = getExpression(firstNumber, operator, secondNumber);
    const correctAnswer = getCorrectAnswer(firstNumber, operator, secondNumber);
    arrayOfData.push(expression, correctAnswer);
  }
  runGameEngine(question, arrayOfData);
};
export default playGame;
