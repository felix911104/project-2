var validator = require("../controller/validate");
// var Event = require("./event.js");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1],
        isUnique: function (value, next) {
          console.log(value, "what is value");
          var self = this;
          User.findOne({
            where: {
              name: value
            }
          }).then(function (user) {
              console.log(user,"in the promise");
              // reject if a different user wants to use the same username
              if (user && self.id !== user.id) {
                console.log(self.id, "self id", "user id", user.id);
                return next('username already in use!');
              }
              return next();
            })
            .catch(function (err) {
              return next(err);
            });
        }
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
