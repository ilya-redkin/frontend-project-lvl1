#!/usr/bin/env node
import {askName, userName} from "../src/cli.js";
import askNumber from "./brain-even.js";
import youCalc from "./brain-calc.js";
// import _ from 'lodash';

console.log("Welcome to the Brain Games!");

askName (userName);
askNumber();
youCalc();
