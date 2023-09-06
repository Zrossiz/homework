#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

const joined = argv._.join();

if (joined === "current") {
  console.log(new Date());
} else if (joined === "add") {
  if (argv.y) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + argv.y);
    console.log(currentDate);
  }

  if (argv.m) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + argv.m);
    console.log(currentDate);
  }

  if (argv.d) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + argv.d);
    console.log(currentDate);
  }
} else if (joined === "sub") {
  if (argv.y) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - argv.y);
    console.log(currentDate.getFullYear());
  }

  if (argv.m) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - argv.m);
    console.log(currentDate);
  }

  if (argv.d) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - argv.d);
    console.log(currentDate);
  }
} else {
  if (argv.year || argv.y) {
    console.log(new Date().getFullYear());
  }

  if (argv.month || argv.m) {
    console.log(new Date().getMonth());
  }

  if (argv.date || argv.d) {
    console.log(new Date().getDate());
  }
}
