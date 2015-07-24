# balanced-ternary

Convert balanced ternary strings to/from signed integers

[![Build Status](https://travis-ci.org/thirdcoder/balanced-ternary.svg?branch=master)](https://travis-ci.org/thirdcoder/balanced-ternary)
[![npm version](https://badge.fury.io/js/balanced-ternary.svg)](https://www.npmjs.com/package/balanced-ternary)

Usage:

    var bts2n = require('balanced-ternary').bts2n;
    var n2bts = require('balanced-ternary').n2bts;

    bts2n('10i');   // 8
    n2bts(8);       // '10i'

bts2n(s) converts from balanced ternary string to signed integer,
n2bts(n) converts from signed integer to balanced ternary string.

Digits 1, 0, and i correspond to +1, 0, and -1.

Reference: [Balanced ternary on Wikipedia](https://en.wikipedia.org/wiki/Balanced\_ternary)


