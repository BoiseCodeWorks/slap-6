import Target from "../../Models/Target.js";

//PRIVATE PARTS
const ATTACKS = {
  slap: 5,
  punch: 10,
  kick: 15
}

let target = new Target("Fido", 100)

//PUBLIC PARTS
export class GameService {
  get Health() {
    return target.health
  }
  attack(attackType) {
    var damage = ATTACKS[attackType] || 0
    target.health -= damage
  }
}