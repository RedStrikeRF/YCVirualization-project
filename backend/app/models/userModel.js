import { db } from '../db/database.js';
const { DataTypes } = require("sequelize");
const sequelize = require("../db/database");

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
      unique: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;

export const createUser = async (user) => {
  const { first_name, last_name, nickname, password, birth_date } = user;
  const result = await db.query(
    `INSERT INTO users (first_name, last_name, nickname, password, birth_date)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id`,
    [first_name, last_name, nickname, password, birth_date]
  );
  return result.rows[0];
};

export const getUserByNickname = async (nickname) => {
  const result = await db.query(
    `SELECT * FROM users WHERE nickname = $1`,
    [nickname]
  );
  return result.rows[0];
};

export const updateUser = async (nickname, updates) => {
  const { first_name, last_name, birth_date } = updates;
  await db.query(
    `UPDATE users SET first_name = $1, last_name = $2, birth_date = $3 WHERE nickname = $4`,
    [first_name, last_name, birth_date, nickname]
  );
};

export const deleteUser = async (nickname) => {
  await db.query(`DELETE FROM users WHERE nickname = $1`, [nickname]);
};

export const getUsersPaginated = async (page, limit) => {
  const offset = (page - 1) * limit;
  const result = await db.query(
    `SELECT first_name, last_name, nickname, birth_date
     FROM users
     ORDER BY id
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  );
  return result.rows;
};
