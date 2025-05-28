import api from '../axiosInstance';
import { User } from './types';
import { endpoints } from './endpoints';

export const registerUser = (user: User) =>
  api.post(endpoints.register, user);

export const loginUser = (nickname: string, password: string) =>
  api.post(endpoints.login, { nickname, password });

export const updateUser = (nickname: string, updates: Partial<User>) =>
  api.put(endpoints.userByNickname(nickname), updates);

export const deleteUser = (nickname: string) =>
  api.delete(endpoints.userByNickname(nickname));

export const getUsers = (page = 1, limit = 10) =>
  api.get(endpoints.getUsers, {
    params: { page, limit },
  });
