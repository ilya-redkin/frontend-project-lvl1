import readlineSync from 'readline-sync';
export const sayWelcome = () => {console.log("Welcome to the Brain Games!")};

export const userName = () => {return readlineSync.question('May I have your name? ')};

export const sayHi = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hi ' + name + '!');
}