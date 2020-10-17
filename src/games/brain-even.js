import randomNumber from '../utils.js';
import runGameEngine from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getCorrectAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const playGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no". ';
  const arrayOfData = [];
  for (let numberOfRound = 0; numberOfRound < 3; numberOfRound += 1) {
    const expression = randomNumber(1, 99);
    const correctAnswer = getCorrectAnswer(expression);
    arrayOfData.push(expression, correctAnswer);
  }
  runGameEngine(question, arrayOfData);
};
export default playGame;
