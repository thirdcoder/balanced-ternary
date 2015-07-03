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

var shown = {};

process.argv.slice(2).forEach(function(arg) {
  // try converting both to and from balanced ternary <-> decimal
  // TODO: enhance for other bases, 3, 6, 9, 27, or other binary, octal, hex.. nega
  if (maybe_n(arg)) {
    var line = n2bts(arg)+' = '+arg;
    if (!shown[line]) console.log(line);
    shown[line] = 1;
  }

  if (maybe_bts(arg)) {
    var line = arg+' = '+bts2n(arg);
    if (!shown[line]) console.log(line);
    shown[line] = 1;
  }
});

