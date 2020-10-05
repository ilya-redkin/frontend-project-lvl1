#!/usr/bin/env node
import {askName, userName} from "../src/cli.js";
import {calculate} from "../src/Games/brain-calc.js";
import {checkEven} from "../src/Games/brain-even.js";
import {checkGcd} from "../src/Games/brain-gcd.js";
import {checkPrime} from "../src/Games/brain-prime.js";
import {findNumber} from "../src/Games/brain-progression.js";

askName(userName);
calculate();
checkEven();
checkGcd();
checkPrime();
findNumber();