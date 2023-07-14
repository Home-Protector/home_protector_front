import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80px;
`;

export const Title = styled.h1`
	color: ${colors.primary};
`;

export const SingleLink = styled(Link)`
	margin-right: 15px;
	text-decoration: none;
	color: ${colors.text};
`;
