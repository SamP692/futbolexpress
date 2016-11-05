const TeamDAO = require('../daos/teamDAO');

class TeamController {
  static findByLeagueId(req, res) {
    const leagueId = req.session.currentUser.leagueId;
    TeamDAO.findTeamsByLeagueId(leagueId)
             .then((teams) => {
               if (teams) {
                 console.log(`Teams List: ${teams}`);
                 res.status(200).json(teams);
               } else {
                 res.status(401);
               }
             });
  }
}

module.exports = TeamController;
