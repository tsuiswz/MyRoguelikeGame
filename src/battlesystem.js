import Character from "/src/character.js";
import Stats from "./stats";

const TURNSTATE = {
  LEFT_CHARACTER_TURN: 0,
  RIGHT_CHARACTER_TURN: 1
};

const CHAR_SIZE = 200;

const LEFT_CHAR_X_CUSHION = 100;
const LEFT_CHAR_Y_CUSHION = 100;

const RIGHT_CHAR_DIST_RATIO = 0.5;
const RIGHT_CHAR_X_CUSHION = 100;
const RIGHT_CHAR_Y_CUSHION = 100;

export default class BattleSystem {
  constructor(gameWidth, gameHeight, drawing) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.drawing = drawing;
    this.turnState = TURNSTATE.LEFT_CHARACTER_TURN;
    this.leftChar = new Character(
      "sticky",
      new Stats(10, 6, 4, 3, 2, 1, 1),
      document.getElementById("img_stickman"),
      CHAR_SIZE,
      LEFT_CHAR_X_CUSHION,
      gameHeight - (LEFT_CHAR_Y_CUSHION + CHAR_SIZE),
      true,
      null,
      this,
      this.drawing
    );
    this.rightChar = new Character(
      "ledo",
      new Stats(6, 5, 4, 3, 2, 1, 1),
      document.getElementById("img_toledo"),
      CHAR_SIZE * RIGHT_CHAR_DIST_RATIO,
      gameWidth - (RIGHT_CHAR_X_CUSHION + CHAR_SIZE * RIGHT_CHAR_DIST_RATIO),
      RIGHT_CHAR_Y_CUSHION,
      false,
      null,
      this,
      this.drawing
    );
    this.leftChar.setOpponent(this.rightChar);
    this.rightChar.setOpponent(this.leftChar);
  }

  draw() {
    this.drawing.drawBattleSystem(this);
  }
}
