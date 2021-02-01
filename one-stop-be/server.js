const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const apiRouter = require("./api/api-router.js");
const registeredRouter = require("./users/users-router.js");
const configureMiddleware = require("./api/configure-middleware.js");

const server = express();
server.use(helmet());
server.use(cors());

configureMiddleware(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!" });
});

server.use("/api", apiRouter);
server.use("/api/user", registeredRouter);

module.exports = server;
