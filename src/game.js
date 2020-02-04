import BattleSystem from "/src/battlesystem.js";

const GAMESTATE = {
  // examples
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

export default class Game {
  constructor(gameWidth, gameHeight, drawing) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.drawing = drawing;
    this.gamestate = GAMESTATE.MENU;
    this.battleSystem = new BattleSystem(gameWidth, gameHeight, drawing);
  }

  draw() {
    this.drawing.drawGame(this);
  }
}
