'use strict';

var BT_DIGIT_TO_N = {
  i:-1,   '-':-1, 't':-1, 'T':-1,
  0:0,    '.':0,
  1:1,    '+':1
};

var N_TO_BT_DIGIT = {
  '-1':'i',
  0:'0',
  1:'1'
};

var pow = function(a,b) {
  // return a**b; // cleaner, but requires ES7 or babel-node --experimental
  return Math.pow(a,b)|0;
};
var pow3 = function(b) {
  return pow(3, b);
};

// parse balanced ternary string to signed integer
function bts2n(s) {
  var n = 0;
  for (var i = 0; i < s.length; ++i) {
    var ch = s.charAt(i);
    var digit = BT_DIGIT_TO_N[ch];
    if (digit === undefined) throw new Error('bts2n('+s+'): invalid digit character: '+ch);
    //console.log(i,digit,3**i,n,s,ch);
    n += pow3(s.length - i - 1) * digit;
  }
  return n;
}


// signed integer to balanced ternary string
function n2bts(n_) {
  var neg = n_ < 0;
  var n = Math.abs(n_);
  var s = '';
  do {
    var digit = n % 3;

    // balance the ternary http://stackoverflow.com/questions/26456597/how-to-convert-from-unbalanced-to-balanced-ternary
    if (digit === 2) {
      digit = -1;
      ++n;
    }

    //console.log('digit',digit,n,n_,s);

    // if number has negative sign, flip all digits
    if (neg) {
      digit = -digit;
    }

    s = N_TO_BT_DIGIT[digit] + s;
    n = ~~(n / 3);    // truncate, not floor! negatives

  } while(n);
  //console.log('n2bts',n_,s);
  return s;
}

module.exports = {
  bts2n: bts2n,
  n2bts: n2bts
};
