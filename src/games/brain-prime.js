import runGameEngine from '../index.js';
import { randomNumber } from '../utils.js';

const ROUNDS_COUNT = 3;

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const generateRound = () => {
  const numberForRound = randomNumber(1, 99);
  const round = {
    roundQuestion: numberForRound,
    correctAnswer: getCorrectAnswer(numberForRound),
  };
  return round;
};

export const playGame = () => {
  const gameDirective = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrayOfRounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    arrayOfRounds.push(generateRound());
  }
  runGameEngine(gameDirective, arrayOfRounds);
};
