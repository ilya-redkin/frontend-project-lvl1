import runGameEngine from '../index.js';
import { getRandomNumber, ROUNDS_COUNT } from '../utils.js';

const LENGTH_OF_PROGRESSION = 10;

const getProgression = (progressionStart, increment) => {
  const rowOfNumbers = [progressionStart];
  for (let i = 0; i < LENGTH_OF_PROGRESSION - 1; i += 1) {
    rowOfNumbers.push(rowOfNumbers[i] + increment);
  }
  return rowOfNumbers;
};

const getRoundQuestion = (progression, hiddenNumberIndex) => {
  const clonedProgression = progression.slice();
  clonedProgression.splice(hiddenNumberIndex, 1, '..');
  return clonedProgression.join(' ');
};

const generateRound = () => {
  const progression = getProgression(getRandomNumber(1, 60), getRandomNumber(1, 5));
  const hiddenNumberIndex = getRandomNumber(0, 9);
  const round = {
    roundQuestion: getRoundQuestion(progression, hiddenNumberIndex),
    correctAnswer: progression[hiddenNumberIndex].toString(),
  };
  return round;
};

export const playGame = () => {
  const gameTask = 'What number is missing in the progression?';
  const rounds = [];
  for (let numberOfRound = 0; numberOfRound < ROUNDS_COUNT; numberOfRound += 1) {
    rounds.push(generateRound());
  }
  runGameEngine(gameTask, rounds);
};
