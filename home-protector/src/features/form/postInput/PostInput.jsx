import * as S from "./style";

import { useState } from "react";
import useInput from "../../../hooks/useInput";
import { addPost } from "../../../api/post/post";
import { QueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const PostInput = () => {
	const [title, setTitle, handleChangeTitle] = useInput(); // 제목
	const [content, setContent, handleChangeContent] = useInput(); // 내용

	const [images, setImages] = useState(new FormData()); // 이미지
	const handleChangeImages = (e) => {
		const img = e.target.files;
		let temp = [...images];
		temp.push(img);
		setImages(temp);
	};

	const navigate = useNavigate();
	const queryClient = new QueryClient();
	const mutation = useMutation(addPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("post");
		},
		onError: (error) => {
			alert("게시물 등록에 실패 했습니다. 다시 시도해주세요.");
		},
	});

	const handleClickAddBtn = () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		formData.append("images", images);

		mutation.mutate(formData);

		navigate(-1); // 등록 완료되면 이전 페이지로 이동
	};

	return (
		<S.Article>
			<S.InputDiv>
				<S.InputSpan fontSize="18" fontWeight="700">
					사진을 추가해주세요.
				</S.InputSpan>
				<S.InputSpan fontSize="14">최대 10장까지 올릴 수 있어요.</S.InputSpan>
				<S.Label htmlFor="input-file">PC에서 불러오기</S.Label>
				<S.Input
					type="file"
					id="input-file"
					multiple="multiple"
					onChange={handleChangeImages}
				/>
			</S.InputDiv>
			<S.Textarea
				type="text"
				height="35"
				fontSize="30"
				border="2px solid gray"
				placeholder="제목을 입력해주세요."
				value={title}
				onChange={handleChangeTitle}
			/>
			<S.Textarea
				type="text"
				height="500"
				fontSize="15"
				placeholder="내용을 입력해주세요."
				value={content}
				onChange={handleChangeContent}
			/>
			<S.ButtonDiv>
				<S.Button onClick={() => handleClickAddBtn()}>등록</S.Button>
				<S.Button onClick={() => navigate(-1)}>취소</S.Button>
			</S.ButtonDiv>
		</S.Article>
	);
};

export default PostInput;
