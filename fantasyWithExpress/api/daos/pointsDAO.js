const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').points;
const PointsList = require('../models/points');

class PointsDAO {
  static getValues() {
    return db.one(sql.getValues, (row) => new PointsList(row));
  }
}


module.exports = PointsDAO;
