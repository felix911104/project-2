// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// For testing purposes allowed some answers to be null. mh
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        // isUnique: function (value, next) {
        //   var self = this;
        //   User.findOne({
        //     where: {
        //       name: value
        //     }
        //   }).then(function (user) {
        //       console.log(user,"in the promise");
        //       // reject if a different user wants to use the same username
        //       if (user && self.id !== user.id) {
        //         console.log(self.id, "self id", "user id", user.id);
        //         return next('username already in use!');
        //       }
        //       return next();
        //     })
        //     .catch(function (err) {
        //       return next(err);
        //     });
        // }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [8]
      }
    }
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {

    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
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
