const TeamDAO = require('../daos/teamDAO');

class TeamController {
  static findByLeagueId(req, res) {
    const leagueId = req.session.currentUser.leagueId;
    TeamDAO.findTeamsByLeagueId(leagueId)
             .then((league) => {
               if (league) {
                 res.status(200).json(league);
               } else {
                 res.status(401);
               }
             });
  }
}

module.exports = TeamController;
