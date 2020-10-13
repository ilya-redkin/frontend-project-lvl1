#!/usr/bin/env node
import playRound from '../src/games/brain-progression.js';
import playGame from '../src/index.js';

playGame(playRound, 'What number is missing in the progression?');
