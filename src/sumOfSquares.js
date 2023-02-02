'use strict';

const { sum } = require('./sum.js');
const { square } = require('./square.js');

function sumOfSquares(x, y) {
  const firstSquare = square(x);
  const secondSquare = square(y);

  return sum(firstSquare, secondSquare);
}

module.exports = { sumOfSquares };
