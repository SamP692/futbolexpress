const TeamDAO = require('../daos/teamDAO');

class TeamController {
  static findByLeagueId(req, res) {
    const leagueId = req.session.currentUser.leagueId;
    TeamDAO.findTeamsByLeagueId(leagueId)
             .then((teams) => {
               if (teams) {
                 res.status(200).json(teams);
               } else {
                 res.status(401);
               }
             });
  }
  static findById(req, res) {
    const teamId = req.body;
    TeamDAO.findTeamById(teamId)
           .then((team) => {
             if (team) {
               console.log(`Team Returned to Controller: ${team}`);
               res.status(200).json(team);
             } else {
               res.status(401);
             }
           });
  }
}

module.exports = TeamController;
