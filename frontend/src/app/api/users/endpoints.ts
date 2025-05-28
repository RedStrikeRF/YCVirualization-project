export const USERS_BASE = '/users';

export const endpoints = {
  register: `${USERS_BASE}/register`,
  login: `${USERS_BASE}/login`,
  getUsers: `${USERS_BASE}/`,
  userByNickname: (nickname: string) => `${USERS_BASE}/${nickname}`,
};
