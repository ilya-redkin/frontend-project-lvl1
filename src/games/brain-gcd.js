#!/usr/bin/env node
import _ from "lodash";
import readlineSync from "readline-sync";
import { sayHi } from "../index.js";
import { askQuestion } from "../index.js";
import { playGame } from "../index.js";
import { name } from "../index.js";

export const checkGcd = () => {
  sayHi();
  askQuestion("Find the greatest common divisor of given numbers.");
  playGame(playRound);
};

const playRound = () => {
  let a = _.random(1, 10),
    b = _.random(1, 10),
    min = Math.min(a, b),
    max = Math.max(a, b),
    answer = readlineSync.question(`Question: ${a} ${b}\nYour answer:`),
    result;
  for (let i = min; i > 0; i--) {
    if (max % i === 0 && min % i === 0) {
      result = i;
      break;
    }
  }
  if (answer == result) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`
    );
    return false;
  }
};

checkGcd();
