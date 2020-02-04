export default class Effect {
  constructor(name) {
    this.name = name;
  }

  activateEffect(user, target) {
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}
