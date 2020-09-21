#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";
import {userName} from "../src/cli.js";

const checkGcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i <= 2;) {
        let a = _.random(1, 10),
        b = _.random(1, 10);
        let answer = readlineSync.question(`Question: ${a} ${b}\nYour answer:`);
        let result;
        if (a == b) {
            result = a;
          }
          let min = Math.min(a, b),
            max = Math.max(a, b);
          for (let j = min; j > 0; j--) {
            if (max % j === 0 && min % j === 0) {
              result = j;
              if (answer == result) { console.log("Correct!");
            i++} else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
                break;
            }
            }
          }
        
        // if (answer == result) { console.log("Correct!");
        //     i++} else {
        //         console.log(`"${answer}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
        //         break;
        //     }
            if (i===3) {
                    console.log(`Congratulations, ${userName}!`);
                    break;
            }
}
};

checkGcd();
export default checkGcd;