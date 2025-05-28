import { db } from '../db/database.js';

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
