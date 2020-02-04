export default class BattleHud {
  constructor(name, stats, x, y, width, height) {
    this.name = name;
    this.stats = stats;
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.image = document.getElementById("img_basicbattlehud");
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    // draw name
    ctx.fillText(this.name, this.position.x + 10, this.position.y + 10, 50, 10);

    // draw curr hp as green solid rect in max hp rect
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(
      this.position.x + 10,
      this.position.y + 20 + 4,
      (this.stats.currentHealthPoints / this.stats.maximumHealthPoints) * 180,
      3
    );
    ctx.stroke();

    // draw max hp as black outline rect
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "black";
    ctx.rect(this.position.x + 10, this.position.y + 20, 180, 10);
    ctx.stroke();
  }
}
