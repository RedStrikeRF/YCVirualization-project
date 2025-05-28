import bcrypt from 'bcrypt';
import {
  createUser,
  getUserByNickname,
  updateUser,
  deleteUser,
  getUsersPaginated
} from '../models/userModel.js';

export const register = async (req, res) => {
  try {
    const { first_name, last_name, nickname, password, birth_date } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      first_name,
      last_name,
      nickname,
      password: hashedPassword,
      birth_date
    });
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const user = await getUserByNickname(nickname);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const { nickname } = req.params;
    await updateUser(nickname, req.body);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { nickname } = req.params;
    await deleteUser(nickname);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page || '1');
    const limit = parseInt(req.query.limit || '10');
    const users = await getUsersPaginated(page, limit);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
