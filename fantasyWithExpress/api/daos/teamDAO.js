const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').teams;
const SimpleTeam = require('../models/simpleTeam');
const ExpandedTeam = require('../models/expandedTeam');

class TeamDAO {
  static findTeamsByLeagueId(id) {
    return db.map(sql.findTeamsByLeague, [id], (row) => new SimpleTeam(row));
  }
  static findTeamById(id) {
    return db.one(sql.findTeamById, [id], (row) => new ExpandedTeam(row));
  }
}

module.exports = TeamDAO;
