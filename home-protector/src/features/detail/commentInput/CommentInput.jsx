import * as S from "./style";

const CommentInput = () => {
	return (
		<div>
			<h4>댓글</h4>
			<div>
				<S.CommentInput type="text" placeholder="댓글 내용" />
				<S.CommentInputBtn>등록</S.CommentInputBtn>
			</div>
		</div>
	);
};

export default CommentInput;
