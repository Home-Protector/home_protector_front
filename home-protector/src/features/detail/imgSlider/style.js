import styled from "styled-components";
import { colors } from "../../../common/constants/colors";

export const SliderWrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 500px;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 450px;
	border-radius: 10px;
	overflow: hidden;
	background-color: ${colors.liner};

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}
`;
