import readlineSync from 'readline-sync';

const runGameEngine = (question, arrayOfData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(question);
  for (let numberOfRounds = arrayOfData.length / 2; numberOfRounds > 0; numberOfRounds -= 1) {
    const expression = arrayOfData.shift();
    const correctAnswer = arrayOfData.shift();
    const answer = readlineSync.question(`Question: ${expression}\nYour answer:`);
    if (answer !== correctAnswer.toString()) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}")\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGameEngine;
