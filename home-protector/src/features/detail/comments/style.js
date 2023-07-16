import styled from "styled-components";
import { colors } from "../../../common/constants/colors";
import { Link } from "react-router-dom";

const CommentUl = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

const CommentLi = styled.li`
	margin: 20px 0;
`;

export { CommentUl, CommentLi };
