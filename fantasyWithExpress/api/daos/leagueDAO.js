const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').leagues;
const League = require('../models/league');

class LeagueDAO {
  static findLeague(id) {
    return db.one(sql.find, [id])
             .then((row) => new League(row))
             .catch((err) => {
               console.log(err);
             });
  }
  // static create({ name, email, password }) {
  //   return db.one(sql.create, [name, email, password])
  //            .then((row) => new User(row))
  //            .catch((err) => {
  //              console.log(`DAO Error: ${err}`);
  //            });
  // }
}

module.exports = LeagueDAO;
