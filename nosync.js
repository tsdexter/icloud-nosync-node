#! /usr/bin/env node
const shell = require("shelljs");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

// npm install
if (args.install || args.i) {
  shell.exec("npm install");
}

const sym = shell.exec("find node_modules -type l", { silent: true }).stdout;

// if symlink not exists do the stuff
if (sym === "") {
  shell.exec("mv node_modules node_modules.nosync");
  shell.exec("ln -s node_modules.nosync node_modules");
}

// add to gitignore maybe
if (!args.n) {
  shell.exec('echo "# ignore node_modules symlink" >> .gitignore');
  shell.exec("find node_modules -type l >> .gitignore");
}
