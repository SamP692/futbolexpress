const db = require('../db');
const sql = require('../sqlInjection/sqlProvider').leagues;
const League = require('../models/league');

class UserDAO {
  static findLeague(id) {
    console.log('reached user DAO');
    console.log(`ID in DAO: ${id.value}`);
    return db.one(sql.find, [id])
             .then((row) => new League(row))
             .catch((err) => {
               console.log(err);
             });
  }
  // static findUser(keyValue) {
  //   const key = Object.keys(keyValue)[0];
  //   const value = keyValue[key];
  //   return db.one(sql.find, [key, value])
  //            .then((row) => new User(row))
  //            .catch((err) => {
  //              console.log(`DAO Error: ${err}`);
  //            });
  // }
  // static create({ name, email, password }) {
  //   return db.one(sql.create, [name, email, password])
  //            .then((row) => new User(row))
  //            .catch((err) => {
  //              console.log(`DAO Error: ${err}`);
  //            });
  // }
}

module.exports = UserDAO;
