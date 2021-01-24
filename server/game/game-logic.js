var sio;
var gameSocket;

const initializeGame = (io, socket) => {
  sio = io;
  gameSocket = socket;

  gameSocket.on('createNewGame', handleCreateNewGame);

}



exports.initializeGame = initializeGame;