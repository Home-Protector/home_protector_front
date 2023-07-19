import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 회원가입
export const signup = async (newUser) => {
	const response = await axios.post(`${SERVER_URL}/api/user/signup`, newUser);
	return response.data;
};

// 로그인
export const login = async (user) => {
	const response = await axios.post(`${SERVER_URL}/api/user/login`, user);
	return response;
};
