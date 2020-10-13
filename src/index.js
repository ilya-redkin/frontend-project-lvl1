import readlineSync from 'readline-sync';

const playGame = (playRound, question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(question);
  for (let i = 0; i <= 3;) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (playRound()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default playGame;
