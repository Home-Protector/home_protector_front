import * as S from "./style.js";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../../../hooks/useInput.js";
import { useParams } from "react-router-dom";
import { addComment } from "../../../api/post/post.js";

const CommentInput = () => {
	const [comment, setComment, handleChangeComment] = useInput();
	const { postId } = useParams();

	const queryClient = useQueryClient();
	const addCommentMutation = useMutation(addComment, {
		onSuccess: () => {
			queryClient.invalidateQueries("comment");
		},
	});

	const handleCommentSubmit = () => {
		// 	try {
		// 		await addCommentMutation.mutateAsync({
		// 			postId: postId,
		// 			newComment: {
		// 				text: comment,
		// 			},
		// 		});
		// 		console.log("comment");
		// 		setComment("");
		// 	} catch (error) {
		// 		alert("오류가 발생했습니다.");
		// 	}
		addCommentMutation.mutate(setComment);
	};

	return (
		<div>
			<h4 id="commentId">댓글</h4>
			<div>
				<S.CommentInput
					type="text"
					placeholder="댓글 내용"
					value={comment}
					onChange={handleChangeComment}
				/>
				<S.CommentInputBtn onClick={handleCommentSubmit}>등록</S.CommentInputBtn>
			</div>
		</div>
	);
};

export default CommentInput;
