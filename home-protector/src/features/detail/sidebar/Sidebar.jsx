import * as S from "./style.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { likePost } from "../../../api/post/post.js";
import token from "../../../common/components/token/token.jsx";

const Sidebar = ({ commentRef, postId }) => {
	const [isToken, tokenInfo] = token();
	// const isLiked = tokenInfo["username"];
	// 좋아요
	const [liked, setLiked] = useState(false);
	// 현재 사용자 좋아요 정보
	// useEffect(() => {
	// 	const
	// })
	const handleClickLike = async () => {
		if (isToken) {
			try {
				const response = await likePost(postId);
				if (response.status === 200) {
					setLiked((prevLiked) => !prevLiked);
				} else {
					alert("오류가 발생했습니다. 다시 시도해주세요.");
				}
			} catch (error) {
				console.log(error);
				alert("로그인 해주세요.");
			}
		}
	};
	// 링크 복사
	const location = useLocation();
	const handleCopyClipBoard = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			alert("클립보드에 링크가 복사되었어요.");
		} catch (err) {
			console.log(err);
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
			<S.AsideBtn liked={liked} onClick={() => handleClickLike()}>
				{liked ? "❤️" : "🤍"}
			</S.AsideBtn>
			<S.AsideBtn onClick={() => handleClickCommentBtn("commentId")}>💬</S.AsideBtn>
			<S.AsideBtn
				onClick={() => handleCopyClipBoard(`http://localhost:3000${location.pathname}`)}>
				📎
			</S.AsideBtn>
		</S.Aside>
	);
};
export default Sidebar;
