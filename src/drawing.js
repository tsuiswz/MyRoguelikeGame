export default class Drawing {
  constructor(canvas, game) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.game = game;
  }

  drawGame() {
    this.ctx.clearRect(
      0,
      0,
      this.game.gameWidth,
      this.game.gameHeight,
      this.ctx
    );
    this.drawBattleSystem(this.game.battleSystem);
  }

  drawBattleSystem(battleSystem) {
    this.drawCharacter(battleSystem.leftChar);
    this.drawCharacter(battleSystem.rightChar);
  }

  drawCharacter(character) {
    this.ctx.drawImage(
      character.image,
      character.position.x,
      character.position.y,
      character.size,
      character.size
    );

    if (character.player === true) {
      this.displaySkillButtons(character);
    }

    this.drawBattleHud(character.battleHud);
  }

  displaySkillButtons(character) {
    // Empty the list of skills and then add
    $("#skill-buttons").empty();
    for (let skill of character.skills) {
      $("#skill-buttons").append(
        $("<button></button>")
          .text(skill.name)
          .click(function() {
            skill.activateSkill();
          })
      );
    }
  }

  drawBattleHud(battleHud) {
    this.ctx.drawImage(
      battleHud.image,
      battleHud.position.x,
      battleHud.position.y,
      battleHud.width,
      battleHud.height
    );

    // draw name
    this.ctx.fillText(
      battleHud.name,
      battleHud.position.x + 10,
      battleHud.position.y + 10,
      50,
      10
    );

    // draw curr hp as green solid rect in max hp rect
    this.ctx.beginPath();
    this.ctx.lineWidth = "4";
    this.ctx.strokeStyle = "green";
    this.ctx.rect(
      battleHud.position.x + 10,
      battleHud.position.y + 20 + 4,
      (battleHud.stats.currentHealthPoints /
        battleHud.stats.maximumHealthPoints) *
        180,
      3
    );
    this.ctx.stroke();

    // draw max hp as black outline rect
    this.ctx.beginPath();
    this.ctx.lineWidth = "4";
    this.ctx.strokeStyle = "black";
    this.ctx.rect(
      battleHud.position.x + 10,
      battleHud.position.y + 20,
      180,
      10
    );
    this.ctx.stroke();
  }
}
