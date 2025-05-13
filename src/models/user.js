const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notNull: { msg: "first_name es obligatorio" },
      },
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notNull: { msg: "last_name es obligatorio" },
      },
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "username es obligatorio" },
      },
    },
    telephone: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notNull: { msg: "telephone es obligatorio" },
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
    avatar: {
      type: DataTypes.TEXT,
      defaultValue: "avatar-user.png",
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    timestamps: true,
  });
};
