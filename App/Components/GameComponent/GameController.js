import { GameService } from "./GameService.js";

export class GameController {
  constructor() {
    this.gameSevice = new GameService
  }
  update() {
    document.getElementById('health').innerText = this.gameSevice.Health
  }
  attack(attackType) {
    this.gameSevice.attack(attackType)
    this.update()
  }
}