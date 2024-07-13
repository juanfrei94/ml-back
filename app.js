require("dotenv").config();

// Init Server
const { Server } = require("./models");
const restApi = new Server();
restApi.listen();
