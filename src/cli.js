import readlineSync from 'readline-sync';


export const userName = readlineSync.question('May I have your name? ');

export const askName = (name) => {
    console.log('Hi ' + name + '!');
}


// const askName = () => {
// const userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
// }

// export default askName;




