import * as S from "./style";
import tempimg from "../../../img/tempimg.jpeg";

// 임시

const Posts = () => {
	return (
		<div>
			<S.MainUl>
				{}
				{Array.from({ length: 30 }, (_, index) => (
					<S.MainLi key={index}>
						<S.MainLink>
							<S.MainLiImg src={tempimg} alt="tempimg" />
							<S.MainTextSpan fontSize="17">내가 제목</S.MainTextSpan>
							<S.MainTextSpan fontSize="11">나는 야옹</S.MainTextSpan>
							<S.MainTextSpan fontSize="10">스크랩 50 ㆍ 조회 300</S.MainTextSpan>
						</S.MainLink>
					</S.MainLi>
				))}
			</S.MainUl>
		</div>
	);
};

export default Posts;
