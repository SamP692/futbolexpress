const PointsDAO = require('../daos/pointsDAO');

class PointsController {
  static getValues(req, res) {
    PointsDAO.getValues()
             .then((pointList) => {
               if (pointList) {
                 res.status(200).json(pointList);
               } else {
                 res.status(401);
               }
             });
  }
}

module.exports = PointsController;
