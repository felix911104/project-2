module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define("Answer", {
    a1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a6: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a7: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a8: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a9: {
      type: DataTypes.STRING,
      allowNull: false
    },
    a10: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Answer.associate = models => {
    Answer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Answer;
}