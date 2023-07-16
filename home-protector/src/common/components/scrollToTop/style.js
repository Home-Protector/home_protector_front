import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const ScrollToTop = styled.div`
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
