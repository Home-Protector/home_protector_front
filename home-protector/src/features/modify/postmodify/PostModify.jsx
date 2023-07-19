import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { modifyPost } from "../../../api/post/post";

function PostModify() {
    const navigate = useNavigate();

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
                />
            </S.InputDiv>
            <S.Textarea
                type="text"
                height="35"
                fontSize="30"
                border="2px solid gray"
                placeholder="제목을 입력해주세요."
            />
            <S.Textarea 
                type="text" 
                height="500" 
                fontSize="15" 
                placeholder="내용을 입력해주세요."
            />
            <S.ButtonDiv>
                <S.Button>수정</S.Button>
                <S.Button onClick={() => {navigate(-1)}}>취소</S.Button>
            </S.ButtonDiv>
        </S.Article>
    )
}

export default PostModify;