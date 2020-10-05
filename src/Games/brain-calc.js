#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";
import {userName} from "../cli.js";

export const calculate = () => {
  console.log("What is the result of the expression?");
  for (let i = 0; i <= 2;) {
    let a = _.random(1, 10);
    let b = _.random(1, 10);
    let operatorCode = _.random(0, 2);
    let operator;
    if (operatorCode === 0) {
      operator = "+";
    } else if (operatorCode === 1) {
      operator = "-";
    } else if (operatorCode === 2) {
      operator = "*";
    }
    let expression = `${a} ${operator} ${b}`;
    let trueValue = eval(expression);

    let answer = readlineSync.question(`Question: ${expression}\nYour answer:`);
    if (answer == trueValue) {
      console.log("Correct!");
      i+=1;
    }
    if (answer != trueValue) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueValue}")\nLet's try again, ${userName}!`);
        break;
    }
    if (i===3) {
        console.log(`Congratulations, ${userName}!`);
        break;
    }
  }
};
//calculate();
//export default calculate;
