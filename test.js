'use strict';

var test = require('tape');
var bts2n = require('./').bts2n;
var n2bts = require('./').n2bts;

test('balanced ternary string to number', function(t) {
  t.equal(bts2n('i'), -1);
  t.equal(bts2n('0'), 0);
  t.equal(bts2n('1'), 1);
  t.equal(bts2n('1i'), 2);
  t.equal(bts2n('i1'), -2);
  t.equal(bts2n('i01'), -8);
  t.equal(bts2n('11i'), 11);
  t.equal(bts2n('iiiii'), -121)
  t.equal(bts2n('11111'), 121)
  t.end();
});

test('number to balanced ternary string', function(t) {
  t.equal(n2bts(0), '0');
  t.equal(n2bts(1), '1');
  t.equal(n2bts(2), '1i');
  t.equal(n2bts(-1), 'i');
  t.equal(n2bts(-2), 'i1');
  t.equal(n2bts(-3), 'i0');
  t.equal(n2bts(121), '11111');
  t.equal(n2bts(-121), 'iiiii');
  t.equal(n2bts(6), '1i0');
  t.end();
});

