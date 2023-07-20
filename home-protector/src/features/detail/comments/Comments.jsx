import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";

import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput.js";
import { addComment, deleteComment } from "../../../api/post/post.js";
import token from "../../../common/components/token/token.jsx";

const Comments = (payload) => {
	const postId = payload["postId"]; // 게시물 ID
	const comment = payload["comment"]; // 게시물 볋 등록돈 댓글 리스크

	// 토큰 정보
	const [isToken, tokenInfo] = token();
	const username = tokenInfo["username"];

	const navigate = useNavigate();

	// 등록된 댓글 확인 (수정 필요)
	const [commentList, setCommentList] = useState(comment);
	const queryViewClient = useQueryClient();
	const handleClickDeleteBtn = (commentId) => {
		deleteComment({ postId: payload["postId"], commentId }).then(() => {
			setCommentList((prevCommentList) =>
				prevCommentList.filter((item) => item.comment_id !== commentId)
			);
			queryViewClient.invalidateQueries("post");
		});
	};

	// 댓글 등록
	const [inputCom, setInputCom, handleChangenIputCom] = useInput();
	const queryAddClient = useQueryClient();
	const addCommentMutation = useMutation(addComment, {
		onSuccess: () => {
			alert("댓글 등록이 완료되었습니다.");
			queryAddClient.invalidateQueries("post");
			setInputCom("");
		},
	});

	const handleCommentSubmit = () => {
		if (isToken) {
			try {
				addCommentMutation.mutate({
					postId: postId,
					newComment: JSON.stringify({ comment: inputCom }),
				});
			} catch (error) {
				alert("오류가 발생했습니다.");
			}
		} else {
			alert("로그인 후 이용해주세요.");
			navigate("/login");
		}
	};

	return (
		<div>
			<S.CommentInput type="text" placeholder="댓글 내용" value={inputCom} onChange={handleChangenIputCom}/>
			<S.CommentInputBtn onClick={handleCommentSubmit}>등록</S.CommentInputBtn>
			<S.CommentUl>
				{commentList?.map((item) => {
					return (
						<S.CommentLi key={item.comment_id}>
							<S.CommentDiv>
								<C.Span fontSize="12">{item.comment_nickname} ㆍ 1시간 전</C.Span>
								{isToken && username === item.comment_nickname ? (
									<S.CommnetButton
										onClick={() => handleClickDeleteBtn(item.comment_id)}>
										삭제
									</S.CommnetButton>
								) : (
									<></>
								)}
							</S.CommentDiv>
							<C.Span fontSize="16">{item.comment}</C.Span>
						</S.CommentLi>
					);
				})}
			</S.CommentUl>
		</div>
	);
};

export default Comments;