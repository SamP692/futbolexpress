const PlayerDAO = require('../daos/playerDAO');

class PlayerController {
  static findById(req, res) {
    const playerId = req.params.id;
    PlayerDAO.findPlayerById(playerId)
             .then((player) => {
               if (player) {
                 console.log(player);
                 res.status(200).json(player);
               } else {
                 res.status(401);
               }
             });
  }
}

module.exports = PlayerController;
