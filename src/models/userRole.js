const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("UserRole", {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id"
      }
    },
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Roles",
        key: "id"
      }
    },
  }, {
    timestamps: true
  });
};
