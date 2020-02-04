export default class Stats {
  constructor(maxHp, currHp, str, agi, int, def, res) {
    this.maximumHealthPoints = maxHp;
    this.currentHealthPoints = currHp;
    this.strength = str;
    this.agility = agi;
    this.intelligience = int;
    this.defense = def;
    this.resistance = res;
  }

  getMaxHp() {
    return this.maximumHealthPoints;
  }
  getCurrHp() {
    return this.currentHealthPoints;
  }
  getStrength() {
    return this.strength;
  }
  getAgility() {
    return this.agility;
  }
  getIntelligience() {
    return this.intelligience;
  }
  getDefense() {
    return this.defense;
  }
  getResistance() {
    return this.resistance;
  }

  setMaxHp(maxHp) {
    this.maximumHealthPoints = maxHp;
  }
  setCurrHp(currHp) {
    this.currentHealthPoints = currHp;
  }
  setStrength(strength) {
    this.strength = strength;
  }
  setAgility(agility) {
    this.agility = agility;
  }
  setIntelligience(intelligience) {
    this.intelligience = intelligience;
  }
  setDefense(defense) {
    this.defense = defense;
  }
  setResistance(resistance) {
    this.resistance = resistance;
  }
}
