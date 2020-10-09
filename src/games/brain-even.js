#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import {userName} from "../cli.js";

export const checkEven = () => {
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
    if (number%2!==0 && answer === 'no') {
        console.log("Correct!");
        i++
    }
    if (number%2!==0 && answer !== 'no') {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`)
        break;
    }
    if (i===3) {
        console.log(`Congratulations, ${userName}!`);
        break;
    }
}

}

checkEven();
// export default checkEven;
