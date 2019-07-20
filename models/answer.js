module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define("Answer", {
    a1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a6: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a7: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a8: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a9: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    a10: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Answer.associate = models => {
    Answer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Answer.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  // Answer.associate = models => {
  //   Answer.belongsTo(models.Event, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   })
  // }
  return Answer;
}