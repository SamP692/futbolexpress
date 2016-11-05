const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').teams;
const SimpleTeam = require('../models/simpleTeam'); // !!!!!

class TeamDAO {
  static findTeamsByLeagueId(id) {
    console.log('Reached Updated Team DAO');
    return db.map(sql.findTeamsByLeague, [id], (row) => new SimpleTeam(row));

    // return db.map(sql.findTeamsByLeague, [id])
    //          .then((res) => {
    //            res.forEach((team) => {
    //              console.log(`Team Inside of List: ${team}`);
    //              new SimpleTeam(team);
    //            });
    //          })
    //          .catch((err) => {
    //            console.log(err);
    //          });
  }
}

module.exports = TeamDAO;
