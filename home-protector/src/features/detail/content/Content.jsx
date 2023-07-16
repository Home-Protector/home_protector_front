import * as S from "./style.js";
import * as C from "../../../common/constants/styles.js";
import Sidebar from "../sidebar/Sidebar";

const Content = () => {
	return (
		<S.ContentWrapper>
			<C.Span fontSize="21" fontWeight="700">
				디자이너의 10평 원룸, 감각적인 소품들로 느낌있게!
			</C.Span>
			<C.Span fontSize="14">나는작성자ㆍ 1시간 전</C.Span>

			<C.Span>나는 내용</C.Span>
			<Sidebar />
		</S.ContentWrapper>
	);
};

export default Content;
