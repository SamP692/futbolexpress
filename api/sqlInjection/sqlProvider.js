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
};

module.exports = sqlProvider;
