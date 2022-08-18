const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:pass@localhost:5432/my-db"
);

// postgres=username,
// password=pass,
// host=localhost,
// port=5432,
// database=my-db

module.exports = sequelize;
