import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";

export const Header = styled.header`
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 120px;
	padding: 20px;
`;

export const TitleLink = styled(Link)`
	font-size: 40px;
	font-weight: bold;
	text-decoration: none;
	color: ${colors.primary};
`;

export const SingleLink = styled(Link)`
	margin-right: 15px;
	text-decoration: none;
	color: ${colors.text};
`;
