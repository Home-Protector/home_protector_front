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
		object-fit: contain;
		border-radius: 10px;
	}
`;

export const PagingAnchor = styled.a`
	/* display: block; */
	width: 50px;
	height: 50px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const Paging = styled.span`
	display: inline-block;
	width: 100%;
	height: 100%;
	vertical-align: middle;
	background: url(${(props) => props.src}) no-repeat;
	background-size: 100% 100%;
	filter: grayscale(1);
`;
