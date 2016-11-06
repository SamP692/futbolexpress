const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').teams;
const SimpleTeam = require('../models/simpleTeam');
const ExpandedTeam = require('../models/expandedTeam');

class TeamDAO {
  static findTeamsByLeagueId(id) {
    return db.map(sql.findTeamsByLeague, [id], (row) => new SimpleTeam(row));
  }
  static findTeamById(id) {
    console.log('reached team dao');
    return db.one(sql.findTeamById, [id], (row) => new ExpandedTeam(row));
  }
}

// Find by ID needs:
  // findByTeamId sql method

module.exports = TeamDAO;
