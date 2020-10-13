import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

const playRound = () => {
  const progressionStart = randomNumber(1, 60);
  const increment = randomNumber(1, 5);
  const rowOfNumbers = [progressionStart];
  const hiddenNumberIndex = randomNumber(0, 9);
  for (let i = 0; i <= 8; i += 1) {
    rowOfNumbers.push(rowOfNumbers[i] + increment);
  }
  const correctAnswer = rowOfNumbers[hiddenNumberIndex];
  rowOfNumbers.splice(hiddenNumberIndex, 1, '..');

  const convertedToSting = rowOfNumbers.join(' ');
  const answer = readlineSync.question(`Question: ${convertedToSting}\nYour answer:`);
  if (parseInt(answer, 10) === correctAnswer) {
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
export default playRound;
