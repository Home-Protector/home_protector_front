import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";
import CommentInput from "../commentInput/CommentInput.jsx";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment } from "../../../api/post/post.js";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Comments = (payload) => {
	const [commentList, setCommentList] = useState(payload["comment"]);
	const queryClient = useQueryClient();
	const handleClickDeleteBtn = (commentId) => {
		deleteComment({ postId: payload["postId"], commentId }).then(() => {
			setCommentList((prevCommentList) =>
				prevCommentList.filter((item) => item.comment_id !== commentId)
			);
		});
	};

	const accessToken = localStorage.getItem("accessToken");
	const infoDict = accessToken ? jwt_decode(accessToken) : {};
	const username = infoDict["username"];

	return (
		<div>
			<CommentInput />
			<S.CommentUl>
				{commentList?.map((item) => {
					return (
						<S.CommentLi key={item.comment_id}>
							<S.CommentDiv>
								<C.Span fontSize="12">{item.comment_nickname} ㆍ 1시간 전</C.Span>
								{username === item.comment_nickname ? (
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
