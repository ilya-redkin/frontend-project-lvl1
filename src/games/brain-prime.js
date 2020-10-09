#!/usr/bin/env node
import _ from "lodash";
import readlineSync from "readline-sync";
import { sayHi } from "../index.js";
import { askQuestion } from "../index.js";
import { playGame } from "../index.js";
import { name } from "../index.js";

export const checkPrime = () => {
  sayHi();
  askQuestion("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  playGame(playRound);
};

const isPrime = (x) => {
  for (let i = x - 1; i > 1; i--) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  let number = _.random(1, 99),
    result;
  if (isPrime(number) == true) {
    result = "yes";
  } else {
    result = "no";
  }
  let answer = readlineSync.question(`Question: ${number}\nYour answer:`);
  if (
    (answer == "yes" && result == "yes") ||
    (answer == "no" && result == "no")
  ) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`
    );
    return false;
  }
};

checkPrime();
