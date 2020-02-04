export default class HealEffect {
  constructor(name, description, effects, cooldown) {
    this.name = name;
    this.description = description;
    this.cooldown = cooldown;
  }

  activateEffect(user, target) {
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
