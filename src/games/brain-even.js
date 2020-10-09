#!/usr/bin/env node
import _ from "lodash";
import readlineSync from 'readline-sync';
import {sayHi} from "../index.js";
import {askQuestion} from "../index.js";
import {playGame} from "../index.js";
import {name} from "../index.js";

export const checkEven = () => {
    sayHi();
    askQuestion('Answer "yes" if the number is even, otherwise answer "no". ');
    playGame(playRound);
    };

    const playRound = () => {
        let number = _.random(1,99);
        let answer = readlineSync.question(`Question: ${number}\nYour answer: `);
        if ((number%2===0 && answer === 'yes') || (number%2!==0 && answer === 'no')) {
            console.log("Correct!");
            return true;
        }
        if ((number%2===0 && answer !== 'yes') || (number%2!==0 && answer !== 'no')) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`)
            return false;
        }
    }

checkEven();

