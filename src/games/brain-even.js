import getRandomNumber from '../utils.js';
import { runGameEngine, ROUNDS_COUNT } from '../index.js';

const isEven = (number) => (number % 2 === 0);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandomNumber(1, 99);
  const round = {
    roundQuestion: number,
    correctAnswer: getCorrectAnswer(number),
  };
  return round;
};

const playGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no". ';
  const rounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    rounds.push(generateRound());
  }
  runGameEngine(gameTask, rounds);
};

export default playGame;
