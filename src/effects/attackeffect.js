import Effect from "./effect";

export default class AttackEffect extends Effect {
  constructor(name, power) {
    super(name);
    this.power = power;
  }

  activateEffect(user, target) {
    // prehit stuff
    // calculate hit dmg
    // actual hit
    target.receiveDamage(this.power);
    // onhit(user)
    // onmiss(user)
    // ondodge(target)
    // onblock(target)
    // onTakeHit(target)
    // posthit(user)
    // onEffect
  }

  getPower() {
    return this.power;
  }

  setAttackDamage(power) {
    this.power = power;
  }
}
