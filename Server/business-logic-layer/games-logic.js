const dal = require("../data/dal");

// const sql = 'INSERT INTO users VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ? ,null, 0)'
// await dal.executeAsync(sql, [user.firstName, user.lastName, user.username_email, user.password, user.city, user.street, user.id, user.isAdmin]);


async function getAllGamesAsync() {
  const sql = 'SELECT * FROM games';
  const games = await dal.executeAsync(sql);
  return games;
}
async function getOneGamesAsync(id) {
  const sql = `SELECT * FROM games where gameID = ${id}`;

  
  // const sql = `SELECT * FROM match WHERE matchID = ${id}`;
  const game = await dal.executeAsync(sql);
  
  return game;
}



module.exports = { 
  getAllGamesAsync,
  getOneGamesAsync 
};
