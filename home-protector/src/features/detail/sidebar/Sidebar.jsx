import * as S from "./style.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { likePost } from "../../../api/post/post.js";
import token from "../../../common/components/token/token.jsx";
import { QueryClient, useMutation } from "react-query";

const Sidebar = ({ commentRef, postId, isLiked }) => {
	const [isToken, tokenInfo] = token();

	// 좋아요
	const [liked, setLiked] = useState(isLiked);
	console.log(isLiked, liked);

	const queryClient = new QueryClient();
	const mutation = useMutation(likePost, {
		onSuccess: () => {
			queryClient.invalidateQueries("post");
		},
	});

	const handleClickLike = () => {
		if (isToken) {
			setLiked((prevLiked) => !prevLiked);
			mutation.mutate({
				postId,
				liked,
			});
		} else {
			alert("로그인 해주세요.");
		}
	};

	// 링크 복사
	const location = useLocation();
	const handleCopyClipBoard = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			alert("클립보드에 링크가 복사되었어요.");
		} catch (err) {
			alert(err);
		}
	};

	// 댓글 위치로 이동
	const handleClickCommentBtn = (scrollToId) => {
		const element = document.getElementById(scrollToId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop,
				behavior: "smooth",
			});
		}
	};

	return (
		<S.Aside>
			<S.AsideBtn liked={liked} onClick={() => handleClickLike()}>{liked ? "❤️" : "🤍"}</S.AsideBtn>
			<S.AsideBtn onClick={() => handleClickCommentBtn("commentId")}>💬</S.AsideBtn>
			<S.AsideBtn
				onClick={() => handleCopyClipBoard(`http://localhost:3000${location.pathname}`)}>
				📎
			</S.AsideBtn>
		</S.Aside>
	);
};
export default Sidebar;