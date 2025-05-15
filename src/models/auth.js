const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Auth", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "Users", // Sequelize pluraliza automáticamente
        key: "id",
      },
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: { msg: "email es obligatorio" },
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: { msg: "password es obligatorio" },
      },
    },
  }, {
    timestamps: true,
  });
};
