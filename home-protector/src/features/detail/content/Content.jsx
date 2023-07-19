import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";

import Sidebar from "../sidebar/Sidebar";
import ImgSlider from "../imgSlider/ImgSlider.jsx";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchPost, deletePost } from "../../../api/post/post.js";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import CommentInput from "../commentInput/CommentInput.jsx";
import Comments from "../comments/Comments.jsx";

const Content = () => {
	const { postId } = useParams();
	const navigate = useNavigate();

	const {
		data: post,
		isLoading,
		error,
	} = useQuery("post", () => fetchPost(postId), {
		refetchOnWindowFocus: true, // 윈도우 포커스 시마다 새로운 데이터 가져오기
	});

	if (isLoading) {
		return <div></div>;
	}
	if (error) {
		return <div>잠시 후 다시 시도해주세요. </div>;
	}

	const formattedCreatedAt = new Intl.DateTimeFormat("ko-KR", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(new Date(post.createdAt));

	// 현재 로그인된 사용자 정보 확인
	const accessToken = localStorage.getItem("accessToken"); // 현재 로그인된 사용자 토근 가져옴
	const infoDict = accessToken ? jwt_decode(accessToken) : {}; // 토큰 디코딩
	const isWriter = infoDict["username"] == post.nickname ? true : false; // 정보가 일치하면 수정/삭제 권한 줌
	const handleClickModifyBtn = () => {
		// 수정
		navigate(`/modify/${postId}`, { state: post });
	};

	const handleClickDeleteBtn = (postId) => {
		// 삭제
		deletePost(postId);
		navigate(-1);
	};

	return (
		<div>
			<S.ImgWrapper>
				<S.ContentImg src={post.images[0]} alt="postBanner" />
			</S.ImgWrapper>
			<C.Wrapper>
				<S.DivWrapper>
					<C.Span fontSize="21" fontWeight="700">
						{post.title}
					</C.Span>
					{isWriter ? (
						<S.ButtonWrapper>
							<S.Button onClick={() => handleClickModifyBtn()}>수정</S.Button>
							<S.Button onClick={() => handleClickDeleteBtn(postId)}>삭제</S.Button>
						</S.ButtonWrapper>
					) : (
						<></>
					)}
					<Sidebar />
				</S.DivWrapper>
				<S.SpanWrapper>
					<C.Span fontSize="14">
						{post.nickname} ㆍ {formattedCreatedAt}
					</C.Span>
					<C.Span fontSize="14">
						좋아요 {post.countLikes} ㆍ 조회 {post.viewCount}
					</C.Span>
				</S.SpanWrapper>
				<ImgSlider images={post.images} />
				<S.ContentText>{post.content}</S.ContentText>
			</C.Wrapper>
			<C.Wrapper>
				<h4 id="commentId">댓글 {post.commentList.length}</h4>
				{/* <CommentInput /> */}
				<Comments postId={post.id} comment={post.commentList} />
			</C.Wrapper>
		</div>
	);
};

export default Content;
