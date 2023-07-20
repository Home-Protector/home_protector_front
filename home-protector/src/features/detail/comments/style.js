import styled from "styled-components";
import { colors } from "../../../common/constants/colors";
import { Link } from "react-router-dom";

// 댓급 입력
export const CommentInput = styled.input`
	width: 75%;
	height: 4.2vh;
`;

export const CommentInputBtn = styled.button`
	width: ${props => props.width}%;
	height: ${props => props.height}vh;

	/* width: 13%;
	height: 5vh; */

	margin-left: 5px;

	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
`;

// 댓글 출력
export const CommentUl = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

export const CommentLi = styled.li`
	margin: 20px 0;
`;

export const CommentDiv = styled.div`
	display: flex;
	font-size: 12px;
`;

export const CommnetButton = styled.button`
	margin-top: 9px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const CommentWrapper = styled.div`
	position: relative;
`