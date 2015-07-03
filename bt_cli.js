#!/usr/bin/env node
var bts2n = require('./').bts2n;
var n2bts = require('./').n2bts;

process.argv.slice(2).forEach(function(arg) {
  console.log(arg,'=',n2bts(arg));
});

