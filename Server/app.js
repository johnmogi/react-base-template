const express = require("express");
const cors = require("cors");
const gameController = require("./controller/games-controller");
const scroesController = require("./controller/score-controller");
const server = express();

server.use(cors());

server.use(express.json());

server.use("/api/games", gameController);
server.use("/api/scores", scroesController);

server.listen(3000, () => console.log("Listening on <http://localhost:3000>"));
