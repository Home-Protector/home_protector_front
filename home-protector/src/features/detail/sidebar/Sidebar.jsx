import * as S from "./style.js";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { likePost } from "../../../api/post/post.js";
import token from "../../../common/components/token/token.jsx";

const Sidebar = (commentRef) => {
	const [isToken, tokenInfo] = token();
	const { postId } = useParams();

	// 좋아요
	const [liked, setLiked] = useState(false);
	const handleClickLike = () => {
		if (isToken) {
			try {
				setLiked(!liked);
				likePost(postId);
			} catch {
				alert("좋아요를 실패했습니다. 다시 시도해주세요.");
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
