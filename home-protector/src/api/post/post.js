import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 조회
export const fetchPosts = async () => {
	const { data } = await axios.get(`${SERVER_URL}/api/post`);
	return data;
};
// 등록
export const addPost = async (newPost) => {
	const response = await axios.post(`${SERVER_URL}/api/post`, newPost);
	return response.data;
};

//
