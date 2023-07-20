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
	const response = await instance.get(`/api/post`);
	return response.data;
};

// 상세
export const fetchPost = async (postId) => {
	const response = await instance.get(`/api/post/${postId}`);
	return response.data;
};

// 등록
export const addPost = async (formData) => {
	await instance.post("/api/post", formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
};

// 삭제
export const deletePost = async (postId) => {
	const response = await instance.delete(`/api/post/${postId}`);
	return response.data;
};

// 수정
export const modifyPost = async (payload) => {
	const postId = payload["postId"];
	const editPost = payload["editPost"];
	const response = await instance.put(`/api/post/${postId}`, editPost);
	return response.data;
};

// 좋아요
export const likePost = async (postId) => {
	const response = await instance.post(`/api/post/${postId}/like`);
	return response.data;
};

// 댓글 등록
export const addComment = async (payload) => {
	const postId = payload["postId"];
	const newComment = payload["newComment"];
	const response = await instance.post(`/api/post/${postId}/comment`, newComment, {
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

// 댓글 조회
export const fetchComment = async (postId) => {
	const response = await instance.get(`/api/post/${postId}/comment`);
	return response.data;
};

// 댓글 삭제
export const deleteComment = async (payload) => {
	const postId = payload["postId"]; // 게시물 ID
	const commentId = payload["commentId"]; // 댓글 ID
	const response = await instance.delete(`/api/post/${postId}/comment/${commentId}`);
	return response.data;
};

// 댓글 수정
export const modifyComment = async (payload) => {
	const postId = payload["postId"];
	const commentId = payload["commentId"];
	const editComment = payload["editComment"];
	const response = await instance.put(`/api/post/${postId}/comment/${commentId}`, editComment, {
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};