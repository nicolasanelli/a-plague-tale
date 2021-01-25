import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

const Socket = socketIOClient(ENDPOINT);

export default Socket;