//figure out expiration date


module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define("Event", {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Event.associate = models => {
    Event.hasMany(models.User, {
      foreingKey: {
        allowNull: false
      }
    });

    Event.belongsToMany(models.User, {
      as: "Networks",
      through: "peoples_networks",
      foreignKey: "eventId"
    });
  
  };

  return Event;
}