import * as S from "./style";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { modifyPost } from "../../../api/post/post";
import useInput from "../../../hooks/useInput";

function PostModify() {
	const location = useLocation();
	const data = location.state; // 게시물 정보 가져오기

	const navigate = useNavigate();
	if (!data) {
		// 데이터가 없는 경우 이전 페이지로 이동
		alert("오류가 발생했습니다. 다시 시도해주세요.");
		navigate(-1);
	}

	const [title, setTitle, handleChangeTitle] = useInput(data["title"]); // 제목
	const [content, setContent, handleChangeContent] = useInput(data["content"]); // 내용

	const [images, setImages] = useState([]); // 이미지
	const handleImageChange = (e) => {
		const img = e.target.files;
		const temps = [...images];
		temps.push(img);
		setImages(temps);
	};

	const handleClickModifyBtn = () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		if (images) {
			// 이미지의 경우 필수는 아님
			for (let i = 0; i < images.length; i++) {
				formData.append("images", images[i][0]);
			}
		}
		modifyPost({ postId: data.id, editPost: formData }).then(() => {
			navigate(-1);
		});
	};

	return (
		<S.Article>
			<S.InputDiv>
				<S.InputSpan fontSize="18" fontWeight="700">사진을 추가해주세요.</S.InputSpan>
				<S.InputSpan fontSize="14">최대 10장까지 올릴 수 있어요.</S.InputSpan>
				<S.Label htmlFor="File">PC에서 불러오기</S.Label>
				<S.Input
					type="file"
					id="File"
					name="files"
					multiple="multiple"
					onChange={handleImageChange}
				/>
			</S.InputDiv>
			<S.Textarea
				type="text"
				height="35"
				fontSize="30"
				border="2px solid gray"
				value={title}
				onChange={handleChangeTitle}
				placeholder="제목을 입력해주세요."
			/>
			<S.Textarea
				type="text"
				height="500"
				fontSize="15"
				value={content}
				onChange={handleChangeContent}
				placeholder="내용을 입력해주세요."
			/>
			<S.ButtonDiv>
				<S.Button onClick={() => handleClickModifyBtn()}>수정</S.Button>
				<S.Button onClick={() => navigate(-1)}>취소</S.Button>
			</S.ButtonDiv>
		</S.Article>
	);
}

export default PostModify;