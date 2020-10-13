#!/usr/bin/env node
import playRound from '../src/games/brain-prime.js';
import playGame from '../src/index.js';

playGame(playRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
