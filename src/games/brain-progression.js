import runGameEngine from '../index.js';
import { randomNumber } from '../utils.js';

const ROUNDS_COUNT = 3;
const LENGTH_OF_PROGRESSION_MINUS_ONE = 8;

const getProgression = (progressionStart, increment) => {
  const rowOfNumbers = [progressionStart];
  for (let i = 0; i <= LENGTH_OF_PROGRESSION_MINUS_ONE; i += 1) {
    rowOfNumbers.push(rowOfNumbers[i] + increment);
  }
  return rowOfNumbers;
};

const getRoundQuestion = (progression, hiddenNumberIndex) => {
  const progressionClone = progression.slice();
  progressionClone.splice(hiddenNumberIndex, 1, '..');
  const convertedToSting = progressionClone.join(' ');
  return convertedToSting;
};

const generateRound = () => {
  const progression = getProgression(randomNumber(1, 60), randomNumber(1, 5));
  const hiddenNumberIndex = randomNumber(0, 9);
  const round = {
    roundQuestion: getRoundQuestion(progression, hiddenNumberIndex),
    correctAnswer: progression[hiddenNumberIndex].toString(),
  };
  return round;
};

export const playGame = () => {
  const gameDirective = 'What number is missing in the progression?';
  const arrayOfRounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    arrayOfRounds.push(generateRound());
  }
  runGameEngine(gameDirective, arrayOfRounds);
};
