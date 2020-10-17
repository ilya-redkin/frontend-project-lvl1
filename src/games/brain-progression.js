import runGameEngine from '../index.js';
import randomNumber from '../utils.js';

const getProgression = (maxProgression, maxIncrement) => {
  const progressionStart = randomNumber(1, maxProgression);
  const increment = randomNumber(1, maxIncrement);
  const rowOfNumbers = [progressionStart];
  for (let i = 0; i <= 8; i += 1) {
    rowOfNumbers.push(rowOfNumbers[i] + increment);
  }
  return rowOfNumbers;
};

const getExpression = (progression, hiddenNumberIndex) => {
  progression.splice(hiddenNumberIndex, 1, '..');
  const convertedToSting = progression.join(' ');
  return convertedToSting;
};

const playGame = () => {
  const question = 'What number is missing in the progression?';
  const arrayOfData = [];
  for (let numberOfRound = 0; numberOfRound < 3; numberOfRound += 1) {
    const progression = getProgression(60, 5);
    const hiddenNumberIndex = randomNumber(0, 9);
    const correctAnswer = progression[hiddenNumberIndex];
    const expression = getExpression(progression, hiddenNumberIndex);
    arrayOfData.push(expression, correctAnswer);
  }
  runGameEngine(question, arrayOfData);
};
export default playGame;
