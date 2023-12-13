"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const db_1 = require("../db");
const IAdmin_1 = require("../interfaces/IAdmin");
const sequelize_1 = require("sequelize");
class Admin extends sequelize_1.Model {
}
exports.Admin = Admin;
Admin.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    user: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    role: {
        type: sequelize_1.DataTypes.ENUM(IAdmin_1.TypeRole.Admin),
        defaultValue: IAdmin_1.TypeRole.Admin,
    },
}, {
    sequelize: db_1.db,
    modelName: "admin",
    timestamps: false,
});
