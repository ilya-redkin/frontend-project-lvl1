import { runGameEngine, ROUNDS_COUNT } from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (firstNumber, secondNumber) => {
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);
  let gcd;
  for (let lowestNumber = min; lowestNumber > 0; lowestNumber -= 1) {
    if (max % lowestNumber === 0 && min % lowestNumber === 0) {
      gcd = lowestNumber;
      break;
    }
  }
  return gcd;
};

const getCorrectAnswer = (firstNumber, secondNumber) => getGCD(firstNumber, secondNumber);

const getRoundQuestion = (firstNumber, secondNumber) => `${firstNumber} ${secondNumber}`;

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const round = {
    roundQuestion: getRoundQuestion(firstNumber, secondNumber),
    correctAnswer: getCorrectAnswer(firstNumber, secondNumber).toString(),
  };
  return round;
};

const playGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    rounds.push(generateRound());
  }
  runGameEngine(gameTask, rounds);
};

export default playGame;
