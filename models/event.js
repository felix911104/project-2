//figure out expiration date

module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define("Event", {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventStart: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    eventEnd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Event.associate = models => {
    // Event.hasMany(User, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });

    Event.belongsToMany(models.User, {
      as: "Networks",
      through: "peoples_networks",
      foreignKey: "eventId"
    });
  
  };

  return Event;
}