export default class Skill {
  constructor(name, description, effects, cooldown, user) {
    this.name = name;
    this.description = description;
    this.effects = effects;
    this.cooldown = cooldown;
    this.user = user;
  }

  activateSkill() {
    let effect;
    for (effect of this.effects) {
      effect.activateEffect(this.user, this.user.opponent);
    }
    this.user.update();
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getEffects() {
    return this.effects;
  }

  getCooldown() {
    return this.cooldown;
  }

  setName(name) {
    this.name = name;
  }

  setDescription(description) {
    this.description = description;
  }

  setEffects(effects) {
    this.effects = effects;
  }

  setCooldown(cooldown) {
    this.cooldown = cooldown;
  }
}
