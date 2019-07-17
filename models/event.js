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
    // Event.hasMany(User, {
    //   foreingKey: {
    //     allowNull: false
    //   }
    // });

    Event.belongsToMany(models.User, {
      as: "Networks",
      through: "users_networks",
      foreignKey: "eventId"
    });
  
  };

  return Event;
}