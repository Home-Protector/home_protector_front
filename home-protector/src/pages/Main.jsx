import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import { Link } from "react-router-dom";

// 임시
import { styled } from "styled-components";
import { colors } from "../common/constants/colors";

const Main = () => {
	return (
		<>
			<Header />
			<article>
				{/* 정렬 */}
				<div>
					<sortUl>
						<li>인기순</li>
						<li>조회순</li>
						<li>최신순</li>
					</sortUl>
				</div>
				<div>
					<ul>
						<li>
							<Link>
								<h1>나는 제목</h1>
								<div>
									<span>나는 야옹</span>
									<span>스크랩 50</span>
									<span>조회 300</span>
								</div>
							</Link>
						</li>
						<li>
							<Link>
								<h1>나는 제목이에용</h1>
								<div>
									<span>나는 강아지</span>
									<span>스크랩 40</span>
									<span>조회 3000</span>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</article>
			<aside>
				<ScrollToTop>▲</ScrollToTop>
			</aside>
			<Footer />
		</>
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

const sortUl = styled.li`
	/* list-style: none; */
`;
