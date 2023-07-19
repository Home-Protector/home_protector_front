import axios from "axios";
// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accessToken");
	accessToken && (config.headers.Authorization = accessToken);
	return config;
});

// 조회
// 전체
export const fetchPosts = async () => {
	const { data } = await instance.get(`/api/post`);
	return data;
};

// 상세
export const fetchPost = async (postId) => {
	const response = await instance.get(`/api/post/${postId}`);
	return response.data;
};

// 등록
export const addPost = async (body) => {
	const response = await instance.post(`/api/post`, body);
	return response.data;
};

// 수정
export const modifyPost = async (payload) => {
	const postId = payload["postId"];
	const editPost = payload["editPost"];

	const response = await instance.put(`/api/post/${postId}`, editPost);
	return response;
};
