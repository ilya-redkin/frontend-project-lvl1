import runGameEngine from '../index.js';
import { getRandomNumber, ROUNDS_COUNT } from '../utils.js';

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
  const number = getRandomNumber(1, 99);
  const round = {
    roundQuestion: number,
    correctAnswer: getCorrectAnswer(number),
  };
  return round;
};

const playGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    rounds.push(generateRound());
  }
  runGameEngine(gameTask, rounds);
};

export default playGame;
