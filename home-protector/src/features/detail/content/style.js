import styled from "styled-components";

export const ContentWrapper = styled.div`
	min-height: 500px;
	position: relative;
`;

export const SpanWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const ContentImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ImgWrapper = styled.div`
	width: 100%;
	height: calc(100vh - 500px);
	min-height: 250px;
	overflow: hidden;
`;
