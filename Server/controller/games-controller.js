const express = require("express");
const gamesLogic = require("../business-logic-layer/games-logic");
const router = express.Router();

// GET <http://localhost:3000/api/games>
router.get("/", async (request, response) => {
  try {
    const games = await gamesLogic.getAllGamesAsync();
    response.json(games);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// GET <http://localhost:3000/api/games/:id>
router.get("/:id", async (request, response) => {
    const id = +request.params.id;

    try {
      const game = await gamesLogic.getOneGamesAsync(id);
      response.json(game);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });


module.exports = router;
