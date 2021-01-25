import Amicia from './models/Amicia'

interface Game {
  char: Amicia
}

export default class GameManager {
  private players: Game[];

  constructor () {
    this.players = []
  }

  joinGame (id) {
    if (!this.players[id]) {
      this.players[id] = {
        char: new Amicia()
      }
    }
  }

  leaveGame (id) {
    delete this.players[id]
  }

  getGame (id) {
    return this.players[id]
  }
}
