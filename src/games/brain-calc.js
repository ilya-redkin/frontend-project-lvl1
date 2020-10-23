import { randomNumber } from '../utils.js';
import runGameEngine from '../index.js';

const ROUNDS_COUNT = 3;

const getOperator = () => {
  const operators = '+-*';
  return operators[randomNumber(0, 2)];
};
const getCorrectAnswer = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
};
const getRoundQuestion = (firstNumber, operator, secondNumber) => `${firstNumber}${operator}${secondNumber}`;

const generateRound = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const operator = getOperator();
  const round = {
    roundQuestion: getRoundQuestion(firstNumber, operator, secondNumber),
    correctAnswer: getCorrectAnswer(firstNumber, operator, secondNumber).toString(),
  };
  return round;
};

export const playGame = () => {
  const gameDirective = 'What is the result of the expression?';
  const arrayOfRounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    arrayOfRounds.push(generateRound());
  }
  runGameEngine(gameDirective, arrayOfRounds);
};
