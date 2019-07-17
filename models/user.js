var validator = require("../controller/validate");
var Event = require("./event.js");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1],
        isUnique: validator.isUnique("User", "name")
      }
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  });

  User.associate = models => {

    User.belongsToMany(models.Event, {
      as: "Peoples",
      through: "peoples_networks",
      foreignKey: "userId"
    });

    User.hasOne(models.Answer, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return User;
};
