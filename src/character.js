import BattleHud from "/src/battlehud";
import Skill from "/src/skill";
import AttackEffect from "./effects/attackeffect";

const BATTLE_HUD_WIDTH = 200;
const BATTLE_HUD_HEIGHT = 50;
export default class Character {
  constructor(
    name,
    stats,
    img,
    size,
    xpos,
    ypos,
    player,
    opponent,
    battleSystem,
    drawing
  ) {
    this.name = name;
    this.stats = stats;
    this.image = img;
    this.position = {
      x: xpos,
      y: ypos
    };
    this.player = player;
    this.opponent = opponent;
    this.battleSystem = battleSystem;
    this.drawing = drawing;
    this.skills = [
      new Skill(
        "Skillage Uno",
        "The first skill ever created. God bless.",
        [new AttackEffect("Attack Effect", 2)],
        1,
        this
      )
    ];

    this.size = size;
    this.battleHud = new BattleHud(
      this.name,
      this.stats,
      this.position.x + size / 2 - BATTLE_HUD_WIDTH / 2,
      this.position.y + this.size,
      BATTLE_HUD_WIDTH,
      BATTLE_HUD_HEIGHT
    );
  }

  // will want to take this rendering function stuff out of character model
  // pass models to renderingobjects?

  update() {
    this.battleSystem.draw();
  }

  draw() {
    this.drawing.drawCharacter(this);
  }

  addSkill(skill) {
    // some sort of check?
    this.skills.push(skill);
    // another check to make sure there is no more than X amount of skills
  }

  takeHit(dmg) {
    // calculate dmg
    this.stats.setCurrHp(Math.max(0, this.stats.getCurrHp() - dmg));
  }

  getOpponent() {
    return this.opponent;
  }

  setOpponent(opponent) {
    this.opponent = opponent;
  }
}
