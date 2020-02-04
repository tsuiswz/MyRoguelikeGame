import Game from "/src/game.js";
import Drawing from "./drawing";

let drawing = new Drawing("gameScreen");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, drawing);

function initialize() {
  game.draw();
}

initialize();
