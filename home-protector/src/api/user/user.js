import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 회원가입
export const signup = async (newUser) => {
  const response = await axios.post(`${SERVER_URL}/api/user/signup`, newUser)
  // await axios.post(`${SERVER_URL}/user`, newUser);
  return response.data;
}

// 로그인
export const login = async (user) => {
  const response = await axios.post(`${SERVER_URL}/user`, user);
  return await response.data;
}

// 로그아웃
export const logout = async () => {
  return await axios.post(`${SERVER_URL}/logout`);
}