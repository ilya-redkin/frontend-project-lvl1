import runGameEngine from '../index.js';
import { randomNumber } from '../utils.js';

const ROUND_COUNT = 3;

// eslint-disable-next-line consistent-return
const getGCD = (firstNumber, secondNumber) => {
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);
  for (let lowestNumber = min; lowestNumber > 0; lowestNumber -= 1) {
    if (max % lowestNumber === 0 && min % lowestNumber === 0) {
      return lowestNumber;
    }
  }
};

const getCorrectAnswer = (firstNumber, secondNumber) => getGCD(firstNumber, secondNumber);

const getRoundQuestion = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const generateRound = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const round = {
    roundQuestion: getRoundQuestion(firstNumber, secondNumber),
    correctAnswer: getCorrectAnswer(firstNumber, secondNumber).toString(),
  };
  return round;
};

export const playGame = () => {
  const gameDirective = 'Find the greatest common divisor of given numbers.';
  const arrayOfRounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUND_COUNT; numberOfRound += 1) {
    arrayOfRounds.push(generateRound());
  }
  runGameEngine(gameDirective, arrayOfRounds);
};
