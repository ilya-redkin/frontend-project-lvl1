import readlineSync from 'readline-sync';
import _ from 'lodash';
import {userName} from "../src/cli.js";

const askNumber = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

for (let i = 0; i <= 2;) {
    let number = _.random(1,99);
    let answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (number%2===0 && answer === 'yes') {
        console.log("Correct!");
        i++
    }
    if (number%2===0 && answer !== 'yes') {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`)
        break;
    }
}

}

export default askNumber;
