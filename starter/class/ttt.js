const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("up", "Move Up", this.cursor.up);
    Screen.addCommand("down", "Move Down", this.cursor.down);
    Screen.addCommand("left", "Move Left", this.cursor.left);
    Screen.addCommand("right", "Move Right", this.cursor.right);
    Screen.render();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    //Check rows
    for (let i = 0; i < grid[0].length; i++) {
      if (
        grid[i][0] === grid[i][1] &&
        grid[i][1] === grid[i][2] &&
        grid[i][0] !== " "
      ) {
        return grid[i][0];
      }
    }

    //check columns
    for (let j = 0; j < grid.length; j++) {
      if (
        grid[0][j] === grid[1][j] &&
        grid[1][j] === grid[2][j] &&
        grid[1][j] !== " "
      ) {
        return grid[0][j];
      }
    }

    //check diagonal
    if (
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] !== " "
    ) {
      return grid[0][0];
    }

    if (
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[0][2] &&
      grid[1][1] !== " "
    ) {
      return grid[1][1];
    }

    //if tie
    const isTie = grid.every((row) => row.every((cell) => cell !== " "));
    if (isTie) {
      return "T";
    }

    return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
