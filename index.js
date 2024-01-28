#!/usr/bin/env node

/**
 * Fancy CLI Alerts
 *
 * Cross platform CLI alerts
 *
 * @author Eihab <https://x.com/eihab_khan>
 */

import chalk from 'chalk';
import logSymbols from 'log-symbols';

const log = console.log;
const green = chalk.green;
const greenBG = chalk.green.inverse;
const red = chalk.red;
const redBG = chalk.red.inverse;
const yellow = chalk.yellow;
const yellowBG = chalk.yellow.inverse;
const blue = chalk.blue;
const blueBG = chalk.blue.inverse;

export default (options) => {
  const defaultOptions = {
    type: 'error',
    message: 'You forgot to write a message :)',
  };

  const opts = { ...defaultOptions, ...options };

  if (opts.type === 'success') {
    log(`${logSymbols.success} ${greenBG(' SUCCESS ')} ${green(opts.message)}`);
  }
  if (opts.type === 'warning') {
    log(
      `${logSymbols.warning} ${yellowBG(' WARNING ')} ${yellow(opts.message)}`
    );
  }
  if (opts.type === 'error') {
    log(`${logSymbols.error} ${redBG(' ERROR ')} ${red(opts.message)}`);
  }
  if (opts.type === 'info') {
    log(`${logSymbols.info} ${blueBG(' INFO ')} ${blue(opts.message)}`);
  }
};
