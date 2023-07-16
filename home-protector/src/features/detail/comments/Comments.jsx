import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";

const Comments = () => {
	return (
		<div>
			<S.CommentUl>
				{[...Array(10)].map((_, index) => (
					<S.CommentLi key={index}>
						<C.Span fontSize="12">작성자 ㆍ 1시간 전</C.Span>
						<C.Span fontSize="16">안녕하세요</C.Span>
					</S.CommentLi>
				))}
			</S.CommentUl>
		</div>
	);
};

export default Comments;
