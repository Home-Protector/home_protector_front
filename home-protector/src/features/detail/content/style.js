import styled from "styled-components";
import { colors } from "../../../common/constants/colors";
export const ContentWrapper = styled.div`
	min-height: 500px;
`;

export const SpanWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const ContentImg = styled.img`
	width: 90%;
	height: 100%;
	object-fit: cover;
`;

export const ImgWrapper = styled.div`
	width: 100%;
	height: calc(100vh - 500px);
	min-height: 250px;
	overflow: hidden;
`;

export const DivWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const ButtonWrapper = styled.div`
	margin-top: 2px;
	width: 105px;
	display: flex;
	justify-content: space-between;
`;

export const Button = styled.button`
	width: 50px;
	height: 30px;

	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
`;

export const ContentText = styled.div`
	min-height: 500px;
	margin-bottom: 10px;
	border-bottom: 1px solid ${colors.liner};
`;
