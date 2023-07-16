import styled from "styled-components";
import { colors } from "../../../common/constants/colors";

const CommentInput = styled.input`
	width: 75%;
	height: 4.2vh;
`;

const CommentInputBtn = styled.button`
	width: 13%;
	height: 5vh;

	margin-left: 5px;

	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
`;

export { CommentInput, CommentInputBtn };
