import express from 'express';
import {
  register,
  login,
  update,
  remove,
  listUsers
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/:nickname', update);
router.delete('/:nickname', remove);
router.get('/', listUsers);

export default router;
