const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const user = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});


module.exports = user;