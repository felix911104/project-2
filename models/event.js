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
    company: {
      type: DataTypes.STRING
    },
    eventStart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eventEnd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
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