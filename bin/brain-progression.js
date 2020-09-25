#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";
import {userName} from "../src/cli.js";


const findNumber = () => {
console.log("What number is missing in the progression?");
for (let i = 0; i<=2; ) {
    let progressionStart = _.random(1, 60);
    let increment = _.random(1, 5);
    let arr = [progressionStart];
    let hiddenNumberIndex = _.random(0, 9);
    for (let j = 0; j <= 8; j++) {
      arr.push(arr[j] + increment);
    }
    let hiddenNumber = arr[hiddenNumberIndex];
    arr.splice(hiddenNumberIndex, 1, "..");
  
    let convertedToSting = arr.join(" ");
    let answer = readlineSync.question(`Question: ${convertedToSting}\nYour answer:`);
    if (answer == hiddenNumber) {
        console.log("Correct!");
      i++;
    } else {
        console.log(
          `"${answer}" is wrong answer ;(. Correct answer was ${hiddenNumber}.\nLet's try again, ${userName}!`
        );
        break;
    }
    if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
}
};

findNumber();
export default findNumber;