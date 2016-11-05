const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').teams;
// const Team = require('../models/team'); // !!!!!

class TeamDAO {
  static findTeamsByLeagueId(id) {
    return db.any(sql.findTeamsByLeague, [id])
             .then((res) => console.log(res))
             .catch((err) => {
               console.log(err);
             });
  }
}

module.exports = TeamDAO;
