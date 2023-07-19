import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accessToken");
	accessToken && (config.headers.Authorization = accessToken);
	return config;
});

// 전체 조회
export const fetchPosts = async () => {
	const { data } = await instance.get(`/api/post`);
	return data;
};

// 등록
export const addPost = async (formData) => {
	await instance.post('/api/post', formData, {
		headers: {'Content-Type': 'multipart/form-data'},
	});
};

// 수정
export const modifyPost = async (payload) => {
	const postId = payload["postId"];
	const editPost = payload["editPost"];

	const response = await instance.put(`/api/post/${postId}`, editPost);
	return response;
};