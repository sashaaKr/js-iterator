const MatrixIterator = require('./MatrixIterator');

function calucateIndex(x, y, width) {
  return y * width + x;
}

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for(let y = 0; y < height; y++) {
      for(let x = 0; x < height; x++) {
        this.content[calucateIndex(x, y, width)] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[calucateIndex(x, y, this.width)];
  }

  set(x, y, value) {
    this.content[calucateIndex(x, y, this.width)] = value;
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
}

module.exports = Matrix;