#!/usr/bin/env node
import _ from "lodash";
import readlineSync from "readline-sync";
import { sayHi } from "../index.js";
import { askQuestion } from "../index.js";
import { playGame } from "../index.js";
import { name } from "../index.js";

export const findNumber = () => {
  sayHi();
  askQuestion("What number is missing in the progression?");
  playGame(playRound);
};

const playRound = () => {

    let progressionStart = _.random(1, 60);
    let increment = _.random(1, 5);
    let rowOfNumbers = [progressionStart];
    let hiddenNumberIndex = _.random(0, 9);
    for (let i = 0; i <= 8; i++) {
      rowOfNumbers.push(rowOfNumbers[i] + increment);
    }
    let hiddenNumber = rowOfNumbers[hiddenNumberIndex];
    rowOfNumbers.splice(hiddenNumberIndex, 1, "..");
  
    let convertedToSting = rowOfNumbers.join(" ");
    let answer = readlineSync.question(`Question: ${convertedToSting}\nYour answer:`);
    if (answer == hiddenNumber) {
        console.log("Correct!");
      return true;
    } else {
        console.log(
          `"${answer}" is wrong answer ;(. Correct answer was ${hiddenNumber}.\nLet's try again, ${name}!`
        );
        return false;
    }
    };

findNumber();
