import readlineSync from 'readline-sync';

const runGameEngine = (gameDirective, arrayOfRounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(gameDirective);
  for (let numberOfRound = 0; numberOfRound < arrayOfRounds.length; numberOfRound += 1) {
    const { roundQuestion, correctAnswer } = arrayOfRounds[numberOfRound];
    const answer = readlineSync.question(`Question: ${roundQuestion}\nYour answer:`);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}")\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGameEngine;
