#!/usr/bin/env node
var esrever = require('esrever');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  console.log('becomes', esrever.reverse(chunk), '\n');
});
