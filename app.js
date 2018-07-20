import { GameController } from "./App/Components/GameComponent/GameController.js";

class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }

}

export default new App()