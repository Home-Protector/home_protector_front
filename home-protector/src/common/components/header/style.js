import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";

const Header = styled.header`
	width: 100%;
	margin: 0 auto;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: ${colors.background};
`;

const InnerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 110px;
	max-width: 1500px;
	margin: 0 auto;
`;
const TitleLink = styled(Link)`
	font-size: 40px;
	font-weight: bold;
	text-decoration: none;
	color: ${colors.primary};
`;

const LogoImg = styled.img`
	width: 200px;
	height: 100%;
`;

const NavWrapper = styled.div`
	display: flex;
	align-items: center;

	& > *:not(:last-child) {
		margin-right: 15px;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: end;

		& > *:not(:last-child) {
			margin: 0 0 10px;
		}
	}
`;

const UserWrapper = styled.div`
	display: flex;
	font-size: 14px;
`;

const NavLink = styled(Link)`
	margin-right: 15px;
	text-decoration: none;
	color: ${colors.text};
`;

const SingleLink = styled(Link)`
	margin-right: 15px;
	text-decoration: none;
	color: ${colors.background};
	background-color: ${colors.primary};
	display: block;
	width: 80px;
	height: 35px;
	font-size: 17px;
	font-weight: bold;
	border-radius: 5px;
	text-align: center;
	line-height: 2;
`;

const WritingBtn = styled(Link)`
	text-decoration: none;
	color: ${colors.background};
	background-color: ${colors.primary};
	display: block;
	width: 80px;
	height: 35px;
	font-size: 17px;
	font-weight: bold;
	border-radius: 5px;
	text-align: center;
	line-height: 2;
`;

const NavBtn = styled.button`
	border: none;
	background: none;
	color: ${colors.secondary};
	text-decoration: underline;
	cursor: pointer;
`;

export {
	Header,
	TitleLink,
	LogoImg,
	NavWrapper,
	UserWrapper,
	NavLink,
	WritingBtn,
	SingleLink,
	NavBtn,
	InnerHeader,
};
