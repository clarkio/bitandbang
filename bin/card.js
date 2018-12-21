#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("Brian Clark /"),
  handle: chalk.cyan("clarkio"),
  work: chalk.white("Cloud Advocate at Microsoft"),
  twitter: chalk.cyan("https://twitter.com/_clarkio"),
  instagram: chalk.cyan("https://instagram.com/_clarkio"),
  github: chalk.cyan("https://github.com/clarkio"),
  twitch: chalk.cyan("https://twitch.tv/clarkio"),
  web: chalk.cyan("https://clarkio.com"),
  npx: chalk.white("npx clarkio"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelInstagram: chalk.white.bold(" Instagram:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelTwitch: chalk.white.bold("    Twitch:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const instagraming = `${data.labelInstagram}  ${data.instagram}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const twitching = `${data.labelTwitch}  ${data.twitch}`;
const webbing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  instagraming +
  newline +
  githubing +
  newline +
  twitching +
  newline +
  webbing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
