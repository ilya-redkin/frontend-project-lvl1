#!/usr/bin/env node

import readlineSync from 'readline-sync';

// const readlineSync = require('readline-sync');
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');


