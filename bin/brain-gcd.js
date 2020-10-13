#!/usr/bin/env node
import playRound from '../src/games/brain-gcd.js';
import playGame from '../src/index.js';

playGame(playRound, 'Find the greatest common divisor of given numbers.');
