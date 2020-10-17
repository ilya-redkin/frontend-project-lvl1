import runGameEngine from '../index.js';
import randomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const playGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrayOfData = [];
  for (let numberOfRound = 0; numberOfRound < 3; numberOfRound += 1) {
    const expression = randomNumber(1, 99);
    const correctAnswer = getCorrectAnswer(expression);
    arrayOfData.push(expression, correctAnswer);
  }
  runGameEngine(question, arrayOfData);
};
export default playGame;
