#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";
import { userName } from "../cli.js";

const isPrime = (x) => {
  for (let i = x - 1; i > 1; i--) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

export const checkPrime = () => {
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  for (let i = 0; i <= 2; ) {
    let number = _.random(1, 99);
    let result;
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
      i++;
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`
      );
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

// checkPrime();
// export default isPrime;
