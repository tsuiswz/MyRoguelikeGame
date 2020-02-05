import Game from "/src/game.js";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

function initialize() {
  game.draw();
}

initialize();
