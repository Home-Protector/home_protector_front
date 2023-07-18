import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const ScrollToTop = styled.div`
	box-sizing: border-box;
	position: fixed;
	right: 30px;
	bottom: 30px;
	background-color: ${colors.background};
	color: ${colors.primary};
	border-radius: 50%;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	width: 40px;
	height: 40px;
	font-size: 25px;
	text-align: center;
	cursor: pointer;
  outline: none;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
    color: ${colors.secondary};
  }
`;
