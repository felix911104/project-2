module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define("Answer", {
    q1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q6: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q7: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q8: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q9: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q10: {
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
  }
}