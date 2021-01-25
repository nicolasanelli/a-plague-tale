import express from 'express'
import http from 'http'
import { Server, Socket } from 'socket.io'
import GameManager from './game/GameManager'
import index from './routes/index'

const port = process.env.PORT || 4001

const app = express()
app.use(index)

const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['content-type'] } })

const manager = new GameManager()

io.on('connection', (socket: Socket) => {
  const id = socket.id

  socket.on('disconnect', () => handleDisconnect(socket))

  // handle environment
  socket.on('getRocks', () => handleGetRocks(socket))
  socket.on('getJars', () => handleGetJars(socket))

  // handle resources
  socket.on('getSulfur', () => handleGetSulfur(socket))
  socket.on('getSaltpeter', () => handleGetSaltpeter(socket))
  socket.on('getAlcohol', () => handleGetAlcohol(socket))
  socket.on('getEpisanguis', () => handleGetEpisanguis(socket))

  // handle materials
  socket.on('getCloth', () => handleGetCloth(socket))
  socket.on('getLeather', () => handleGetLeather(socket))
  socket.on('getString', () => handleGetString(socket))

  // handle crafting
  socket.on('craftIgnifer', () => handleCraftIgnifer(socket))
  socket.on('craftExtinguis', () => handleCraftExtinguis(socket))
  socket.on('craftSomnum', () => handleCraftSomnum(socket))
  socket.on('craftLuminosa', () => handleCraftLuminosa(socket))
  socket.on('craftOdoris', () => handleCraftOdoris(socket))
  socket.on('craftDevorantis', () => handleCraftDevorantis(socket))

  // auto-join the game
  manager.joinGame(id)

  emitInfo(socket, `Client joined with id [${id}]`)
  setTimeout(() => emitUpdateGame(socket), 200)
})

const handleDisconnect = (socket: Socket) => {
  manager.leaveGame(socket.id)
  console.log(`Client disconnected with id [${socket.id}]`)
}
const emitInfo = (socket: Socket, message: string) => {
  console.log(message)
  socket.emit('message', { date: new Date(), level: 'info', message })
}
const emitError = (socket: Socket, message: string) => {
  console.log(message)
  socket.emit('message', { date: new Date(), level: 'error', message })
}
const emitUpdateGame = (socket: Socket) => {
  socket.emit('updateGame', manager.getGame(socket.id))
  emitInfo(socket, 'Game state was updated')
}

const handleGetRocks = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarPedras()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleGetJars = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarJarro()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}

const handleGetSulfur = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarEnxofre()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleGetSaltpeter = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarSalitre()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleGetAlcohol = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarAlcool()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleGetEpisanguis = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarEpisanguis()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}

const handleGetCloth = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarTecido()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleGetLeather = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarCouro()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleGetString = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.pegarBarbante()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}

const handleCraftIgnifer = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.criarIgnifer()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleCraftExtinguis = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.criarExtinguis()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleCraftSomnum = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.criarSomnum()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleCraftLuminosa = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.criarLuminosa()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleCraftOdoris = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.criarOdoris()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}
const handleCraftDevorantis = (socket: Socket) => {
  try {
    const game = manager.getGame(socket.id)
    game.char.criarDevorantis()
    emitUpdateGame(socket)
  } catch (error) {
    emitError(socket, error.message)
  }
}

server.listen(port, () => console.log(`Listening on port ${port}`))
