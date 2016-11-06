const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').players;
const Player = require('../models/player');

class PlayerDAO {
  static findPlayerById(id) {
    return db.one(sql.findPlayerById, [id], (row) => new Player(row));
  }
}

module.exports = PlayerDAO;
