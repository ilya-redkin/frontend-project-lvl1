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
<<<<<<< HEAD
    if (number%2!==0 && answer === 'no') {
        console.log("Correct!");
        i++
    }
    if (number%2!==0 && answer !== 'no') {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`)
        break;
    }
    if (i===3) {
        console.log(`Congratulations, ${userName}!`);
    }
=======
>>>>>>> bca7a0e77a266a51de95ed2c89826fa87be3a7ab
}

}

export default askNumber;
