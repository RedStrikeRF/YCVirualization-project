import sequelize from '../db/database.js';
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

// Методы модели
export const createUser = async (userData) => {
  return await User.create(userData);
};

export const getUserByNickname = async (nickname) => {
  return await User.findOne({ where: { nickname } });
};

export const updateUser = async (nickname, updates) => {
  return await User.update(updates, { where: { nickname } });
};

export const deleteUser = async (nickname) => {
  return await User.destroy({ where: { nickname } });
};

export const getUsersPaginated = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  return await User.findAll({
    attributes: ['first_name', 'last_name', 'nickname', 'birth_date'],
    limit,
    offset,
    order: [['id', 'ASC']]
  });
};

export default User;