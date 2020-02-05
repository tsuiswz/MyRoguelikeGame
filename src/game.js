import BattleSystem from "/src/battlesystem.js";
import Drawing from "/src/drawing.js";

const GAMESTATE = {
  // examples
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.drawing = new Drawing("gameScreen", this);
    this.battleSystem = new BattleSystem(gameWidth, gameHeight, this.drawing);
  }

  draw() {
    this.drawing.drawGame();
  }
}
