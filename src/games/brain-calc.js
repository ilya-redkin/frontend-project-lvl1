import { getRandomNumber, ROUNDS_COUNT } from '../utils.js';
import runGameEngine from '../index.js';

const getOperator = () => {
  const operators = '+-*';
  return operators[getRandomNumber(0, 2)];
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
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = getOperator();
  const round = {
    roundQuestion: getRoundQuestion(firstNumber, operator, secondNumber),
    correctAnswer: getCorrectAnswer(firstNumber, operator, secondNumber).toString(),
  };
  return round;
};

export const playGame = () => {
  const gameTask = 'What is the result of the expression?';
  const rounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    rounds.push(generateRound());
  }
  runGameEngine(gameTask, rounds);
};
