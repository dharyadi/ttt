const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = "black";
    this.cursorColor = "yellow";
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up = () => {
    // Move cursor up
    console.log(this.row, this.col, "UP");
    if (this.row > 0) {
      this.resetBackgroundColor();
      this.row--;

      this.setBackgroundColor();
      console.log("UP");
    }
    Screen.render();
  };

  down = () => {
    // Move cursor down
    console.log(this.row, this.col, "DOWN");
    if (this.row < this.numRows - 1) {
      this.resetBackgroundColor();
      this.row++;

      this.setBackgroundColor();
      console.log("DOWN");
    }
    Screen.render();
  };

  left = () => {
    // Move cursor left

    if (this.col > 0) {
      this.resetBackgroundColor();
      this.col--;
      console.log(this.row, this.col, "LEFT");
      this.setBackgroundColor();
    }
    Screen.render();
  };

  right = () => {
    // Move cursor right

    this.resetBackgroundColor();
    console.log(this.col < this.numCols - 1);
    if (this.col < this.numCols - 1) {
      this.col++;

      console.log(this.row, this.col, "RIGHT");
    }
    this.setBackgroundColor();
    Screen.render();
  };
}

module.exports = Cursor;
