import styled from "styled-components";
import { colors } from "../../../common/constants/colors";
import { Link } from "react-router-dom";

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
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
