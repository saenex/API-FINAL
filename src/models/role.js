const { Sequealize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const User = require('./user.model');

const Role = sequelize.define(
    "Role",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
            validate: {
                notNull: { msg: "name is required" },
            },
        },
        description: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                notNull: { msg: "description is required" },
            },
        },
    },
    {
        timestamps: true,
    }
);

Role.hasMany(User, {
    foreignKey: "roleId",
    sourceKey: "id",
});
User.belongsTo(Role, {
    foreignKey: "roleId",
    targetKey: "id",
});

module.exports = Role;