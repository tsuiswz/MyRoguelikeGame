import Effect from "./effect";

export default class HealEffect extends Effect {
  constructor(name, power) {
    super(name);
    this.power = power;
  }

  activateEffect(user, target) {
    user.receiveHeal(this.power);
  }

  getPower() {
    return this.power;
  }

  setPower(power) {
    this.power = power;
  }
}
