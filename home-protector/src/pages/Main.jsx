import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import { Link } from "react-router-dom";
import tempimg from '../img/tempimg.jpeg'

// 임시
import { styled } from "styled-components";
import { colors } from "../common/constants/colors";

const Main = () => {


	return (
		<div>
			<Header />
			<article>
				{/* 정렬 */}
				<div>
					<SortUi>
						<Sortli><SortButton>인기순 ▽</SortButton></Sortli>
						<Sortli><SortButton>조회순 ▽</SortButton></Sortli>
						<Sortli><SortButton>최신순 ▽</SortButton></Sortli>
					</SortUi>
				</div>
				<div>
					<MainUl>
						<MainLi>
							<MainLink>
								<MainLiImg src={tempimg} alt="tempimg"/>
								<MainTextSpan fontSize='17'>내가 제목</MainTextSpan>
								<MainTextSpan fontSize='11'>나는 야옹</MainTextSpan>
								<MainTextSpan fontSize='10'>스크랩 50 ㆍ 조회 300</MainTextSpan>
							</MainLink>
						</MainLi>
						<MainLi>
							<MainLink>
								<MainLiImg src={tempimg} alt="tempimg"/>
								<MainTextSpan fontSize='17'>내가 제목</MainTextSpan>
								<MainTextSpan fontSize='11'>나는 야옹</MainTextSpan>
								<MainTextSpan fontSize='10'>스크랩 50 ㆍ 조회 300</MainTextSpan>
							</MainLink>
						</MainLi>
						<MainLi>
							<MainLink>
								<MainLiImg src={tempimg} alt="tempimg"/>
								<MainTextSpan fontSize='17'>내가 제목</MainTextSpan>
								<MainTextSpan fontSize='11'>나는 야옹</MainTextSpan>
								<MainTextSpan fontSize='10'>스크랩 50 ㆍ 조회 300</MainTextSpan>
							</MainLink>
						</MainLi>
						<MainLi>
							<MainLink>
								<MainLiImg src={tempimg} alt="tempimg"/>
								<MainTextSpan fontSize='17'>내가 제목</MainTextSpan>
								<MainTextSpan fontSize='11'>나는 야옹</MainTextSpan>
								<MainTextSpan fontSize='10'>스크랩 50 ㆍ 조회 300</MainTextSpan>
							</MainLink>
						</MainLi>
						<MainLi>
							<MainLink>
								<MainLiImg src={tempimg} alt="tempimg"/>
								<MainTextSpan fontSize='17'>내가 제목</MainTextSpan>
								<MainTextSpan fontSize='11'>나는 야옹</MainTextSpan>
								<MainTextSpan fontSize='10'>스크랩 50 ㆍ 조회 300</MainTextSpan>
							</MainLink>
						</MainLi>
					</MainUl>
				</div>
			</article>
			<aside>
				<ScrollToTop>▲</ScrollToTop>
			</aside>
			<Footer />
		</div>
	);
};

export default Main;

// css
const ScrollToTop = styled.div`
	position: fixed;
	right: 20px;
	bottom: 20px;
	background-color: ${colors.background};
	color: ${colors.primary};
	border-radius: 50%;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	width: 50px;
	height: 50px;
	font-size: 30px;
	text-align: center;
`;

const SortUi = styled.ul`
	display: flex;
	margin-left: 10px;
	list-style-type: nome;
`;

const Sortli = styled.li`
	border: none;
	list-style-type: none;
`;

const SortButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;

const MainUl = styled.ul`
	list-style-type: none;
	max-width: 1200px;
	padding: 0;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	place-items: center;
	justify-items: center;
	box-sizing: border-box;

	@media (max-width: 1150px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MainLi = styled.li`
	text-align: center;
	width: 22rem;
	height: 22rem;

	@media (max-width: 1150px) {
    width: 35rem;
		height: 35rem;
  }

	@media (max-width: 800px) {
		width: 30rem;
		height: 30rem;
	}

	@media (max-width: 500px) {
		width: 20rem;
		height: 20rem;
	}
`;

const MainLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

const MainLiImg = styled.img`
	width: 100%;
	height: 70%;
	border-radius: 10px;
`;

const MainTextSpan= styled.span`
	display: block;
	font-size: ${(props) => props.fontSize}px;
`;