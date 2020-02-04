import Effect from "./effect";

export default class AttackEffect extends Effect {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }

  activateEffect(user, target) {
    // prehit stuff
    // calculate hit dmg
    // actual hit
    target.takeHit(this.attackDamage);
    // onhit(user)
    // onmiss(user)
    // ondodge(target)
    // onblock(target)
    // onTakeHit(target)
    // posthit(user)
    // onEffect
  }

  getName() {
    return this.name;
  }

  getAttackDamage() {
    return this.attackDamage;
  }

  setName(name) {
    this.name = name;
  }

  setAttackDamage(attackDamage) {
    this.attackDamage = attackDamage;
  }
}
