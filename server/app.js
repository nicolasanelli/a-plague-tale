const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*", methods: ["GET", "POST"], allowedHeaders: ["content-type"] } });

let resources = {};
let resource = { qtdMadeira: 0, qtdArgila: 0, qtdPedra: 0 }

io.on("connection", (client) => {
  console.log(`New client connected with id: ${client.id}`);

  setInterval(() => emitUpdatedDate(client), 1000)
  setInterval(() => emitUpdateResources(client), 1000)
  resources[client.id] = Object.assign({}, resource);

  client.on('disconnect', handleDisconnect)

  function handleDisconnect() {
    console.log(`Client ${client.id} disconnected`)
    delete resources[client.id];
  }
});

setInterval(() => { updatedResources() }, 1000)
const updatedResources = (times = 1) => {
  for (var r in resources) {
    if (resources[r]) {
      resources[r].qtdMadeira += (5 * times);
      resources[r].qtdArgila += (7 * times);
      resources[r].qtdPedra += (3 * times);
    }
  }
}

const emitUpdatedDate = (client) => {
  const response = {
    date: new Date(),
    id: client.id
  }
  client.emit("updatedDate", response);
};

const emitUpdateResources = (client) => {
  client.emit("updatedResources", resources[client.id]);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
