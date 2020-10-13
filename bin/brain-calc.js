#!/usr/bin/env node
import playRound from '../src/games/brain-calc.js';
import playGame from '../src/index.js';

playGame(playRound, 'What is the result of the expression?');
