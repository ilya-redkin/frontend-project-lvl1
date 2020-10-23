import { randomNumber } from '../utils.js';
import runGameEngine from '../index.js';

const ROUNDS_COUNT = 3;

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const generateRound = () => {
  const numberForRound = randomNumber(1, 99);
  const round = {
    roundQuestion: numberForRound,
    correctAnswer: getCorrectAnswer(numberForRound),
  };
  return round;
};

export const playGame = () => {
  const gameDirective = 'Answer "yes" if the number is even, otherwise answer "no". ';
  const arrayOfRounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    arrayOfRounds.push(generateRound());
  }
  runGameEngine(gameDirective, arrayOfRounds);
};
