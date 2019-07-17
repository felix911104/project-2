module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
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

    User.hasMany(models.Events, {
      foreignKey: {
        allowNull: false
      }
    });

    User.belongsToMany(models.Events, {
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
