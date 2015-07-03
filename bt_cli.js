#!/usr/bin/env node
var bts2n = require('./').bts2n;
var n2bts = require('./').n2bts;

// if the string could possibly represent balanced ternary
function maybe_bts(s) {
  return !!s.match(/^[01i]+$/);
}

// or a decimal number
function maybe_n(s) {
  return !!s.match(/^[-+]?[0-9]+$/);
}

process.argv.slice(2).forEach(function(arg) {
  if (maybe_n(arg)) {
    console.log(n2bts(arg)+' = '+arg);
  }

  if (maybe_bts(arg)) {
    console.log(arg+' = '+bts2n(arg));
  }
});

