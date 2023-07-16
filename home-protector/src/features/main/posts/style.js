import styled from "styled-components";
// import { colors } from "../common/constants/colors";
import { Link } from "react-router-dom";

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

const MainTextSpan = styled.span`
	display: block;
	font-size: ${(props) => props.fontSize}px;
`;

export { MainUl, MainLi, MainLiImg, MainLink, MainTextSpan };
