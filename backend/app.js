require("dotenv").config();

const Server = require("./models/serverModels")

const server = new Server();

server.listen();