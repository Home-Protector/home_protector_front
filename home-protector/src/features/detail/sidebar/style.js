import styled from "styled-components";
import { colors } from "../../../common/constants/colors";
import { Link } from "react-router-dom";

const Aside = styled.aside`
	position: absolute;
	top: 10px;
	right: -50px;
`;

const AsideBtn = styled.button`
	position: relative;
	display: block;
	width: 54px;
	height: 54px;
	padding: 14px;
	margin-bottom: 10px;
	box-sizing: border-box;
	background: #fff;
	border: 1px solid #dadce0;
	color: #828c94;
	border-radius: 100%;
	font-size: 24px;
	line-height: 0;
	box-shadow: 1px 3px 4px 0 rgba(209, 213, 217, 0.2);
	transition: border-color 0.2s, color 0.2s, background-color 0.2s;
`;

export { Aside, AsideBtn };
