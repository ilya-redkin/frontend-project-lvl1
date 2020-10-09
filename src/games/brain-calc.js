#!/usr/bin/env node
import _ from "lodash";
import readlineSync from 'readline-sync';
import {sayHi} from "../index.js";
import {askQuestion} from "../index.js";
import {playGame} from "../index.js";
import {name} from "../index.js";

export const calculate = () => {
sayHi();
askQuestion("What is the result of the expression?");
playGame(playRound);
};

const playRound = () => {
  let a = _.random(1, 10),
    b = _.random(1, 10),
    operatorCode = _.random(0, 2),
    operator;
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
    return true;
  }
  if (answer != trueValue) {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was "${trueValue}")\nLet's try again, ${name}!`
    );
    return false;
  }
};

calculate();
