import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";
import { BsPencil, BsTrash } from "react-icons/bs";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput.js";
import { addComment, fetchComment, deleteComment, modifyComment } from "../../../api/post/post.js";
import token from "../../../common/components/token/token.jsx";

const Comments = () => {
	const { postId } = useParams(); // 게시물 ID

	// 토큰 정보
	const [isToken, tokenInfo] = token();
	const username = tokenInfo["username"];

	const navigate = useNavigate();

	// 등록된 댓글 확인
	const { data: commentList } = useQuery("comment", () => fetchComment(postId), {
		refetchOnWindowFocus: true, // 윈도우 포커스 시마다 새로운 데이터 가져오기
	});

	const deleteQueryClient = useQueryClient();
	const handleClickDeleteBtn = (commentId) => {
		deleteComment({ postId, commentId }).then(() => {
			deleteQueryClient.invalidateQueries("comment");
		});
	};

	// 댓글 등록
	const [inputCom, setInputCom, handleChangenIputCom] = useInput();
	const inputQueryClient = useQueryClient();
	const addCommentMutation = useMutation(addComment, {
		onSuccess: () => {
			alert("댓글 등록이 완료되었습니다.");
			inputQueryClient.invalidateQueries("comment");
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

	// 인풋창에서 엔터키(키코드 13) 입력 시 댓글 등록

	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			handleCommentSubmit();
		}
	};

	// 댓글 수정
	const [isModify, setIsModify] = useInput(false); // 수정 버튼 선택 유무
	const [seleComment, setSeleComment] = useInput(); // 선택된 댓글 정보를 저장
	const [modifyCmt, setModifyCmt, handleChangenModifyCmt] = useInput();

	// 수정을 요청한 댓글 정보를 담는 함수
	const handleClickModifyBtn = (item) => {
		setSeleComment(item);
		setModifyCmt(item.comment);
		setIsModify(!isModify);
	};

	// 실제 댓글 수정 요청을 보내는 함수
	const modifyQueryClient = useQueryClient();
	const handleClickModifyPutBtn = () => {
		modifyComment({
			postId: postId,
			commentId: seleComment.comment_id,
			editComment: JSON.stringify({ comment: modifyCmt }),
		}).then(setModifyCmt(""), modifyQueryClient.invalidateQueries("comment"));
		setIsModify(!isModify);
	};

	// 시간 포맷 함수
	const formatCreatedAt = (date) => {
		return new Intl.DateTimeFormat("ko-KR", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		}).format(new Date(date));
	};

	return (
		<div>
			{isModify ? (
				<S.CommentWrapper>
					<S.CommentInput
						type="text"
						value={modifyCmt}
						onChange={handleChangenModifyCmt}
					/>
					<S.CommentInputBtn
						onClick={() => handleClickModifyPutBtn()}
						width="11"
						height="5">
						수정
					</S.CommentInputBtn>
					<S.CommentInputBtn onClick={() => setIsModify(!isModify)} width="11" height="5">
						취소
					</S.CommentInputBtn>
				</S.CommentWrapper>
			) : (
				<S.CommentWrapper>
					<S.CommentInput
						type="text"
						placeholder="댓글 내용"
						value={inputCom}
						onChange={handleChangenIputCom}
						onKeyDown={handleKeyDown}
					/>
					<S.CommentInputBtn onClick={handleCommentSubmit} width="13" height="5">
						등록
					</S.CommentInputBtn>
					<S.CommentUl>
						{commentList?.map((item) => {
							return (
								<S.CommentLi key={item.comment_id}>
									<S.CommentDiv>
										<C.Span fontSize="12">
											{item.comment_nickname} ㆍ
											{formatCreatedAt(item.createdAt)}
										</C.Span>
										{isToken && username === item.comment_nickname ? (
											<S.CommentDiv>
												<S.CommnetButton
													onClick={() => handleClickModifyBtn(item)}>
													<BsPencil />
												</S.CommnetButton>
												<S.CommnetButton
													onClick={() =>
														handleClickDeleteBtn(item.comment_id)
													}>
													<BsTrash />
												</S.CommnetButton>
											</S.CommentDiv>
										) : (
											<></>
										)}
									</S.CommentDiv>
									<C.Span fontSize="16">{item.comment}</C.Span>
								</S.CommentLi>
							);
						})}
					</S.CommentUl>
				</S.CommentWrapper>
			)}
		</div>
	);
};

export default Comments;
