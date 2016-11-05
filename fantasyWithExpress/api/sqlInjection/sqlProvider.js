const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const absolutePath = path.join(__dirname, file);
  return new QueryFile(absolutePath, { minify: true });
}

const sqlProvider = {
  users: {
    create: sql('./usersSql/createUser.sql'),
    find: sql('./usersSql/findUser.sql'),
  },
  leagues: {
    find: sql('./leaguesSql/findLeague.sql'),
  },
  teams: {
    findTeamsByLeague: sql('./teamsSql/findTeamsByLeague.sql'),
  },
};

module.exports = sqlProvider;
