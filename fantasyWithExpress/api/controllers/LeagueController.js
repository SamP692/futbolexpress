const LeagueDAO = require('../daos/leagueDAO');

class LeagueController {
  static find(req, res) {
    console.log(`ID in LC: ${req.session.currentUser.leagueId}`);
    const leagueId = req.session.currentUser.leagueId;
    LeagueDAO.findLeague(leagueId)
             .then((league) => {
               if (league) {
                 res.status(200).json(league);
               } else {
                 res.status(401);
               }
             });
  }
  // static login(req, res) {
  //   const { email, password } = req.body;
  //   UserDAO.findUser({ email })
  //          .then((user) => {
  //            if (!bcrypt.compareSync(password, user.password)) {
  //              res.status(401).end();
  //            } else {
  //              req.session.currentUser = user;
  //              const token = createToken(user);
  //              res.cookie('token', token);
  //              res.status(200).json(user);
  //            }
  //          })
  //          .catch((err) => {
  //            res.status(401).end();
  //          });
  // }
  // static register(req, res) {
  //   const name = req.body.name;
  //   const email = req.body.email;
  //   let password = req.body.password;
  //   if (email.length > 0 && password.length > 0) {
  //     password = bcrypt.hashSync(password, 10);
  //     UserDAO.create({ name, email, password })
  //            .then((user) => {
  //              req.session.currentUser = user;
  //              const token = createToken(user);
  //              res.cookie('token', token);
  //              res.status(200).json(user);
  //            })
  //            .catch((err) => {
  //              res.status(500).json(err);
  //              console.log(err);
  //            });
  //   } else {
  //     req.status(400).end();
  //   }
  // }
  // static logOut(req, res) {
  //   console.log('made it to the log out method');
  //   console.log(`Session: ${req.session.currentUser}`);
  //   req.session.currentUser = null;
  //   res.clearCookie('token');
  //   res.status(204).end();
  // }
}

module.exports = LeagueController;
