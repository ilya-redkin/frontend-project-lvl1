import readlineSync from 'readline-sync';
export let name;

export const sayHi = () => {
    console.log("Welcome to the Brain Games!");
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
    name = userName;
}

export const askQuestion = (question) => {
    console.log(question);
}

export const playGame = (playRound) => {
    for (let i = 0; i <= 3; ) {
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
        break;
      } else if (playRound()) {
        i += 1;
      } else {
        break;
      }
    }
  };