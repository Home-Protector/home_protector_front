import styled from "styled-components";
// import { colors } from "./colors";

const Body = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const Container = styled.div`
	margin: 150px auto 0;
	max-width: 1280px;
`;

const Wrapper = styled.div`
	max-width: 800px;
	min-height: 500px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

const Span = styled.span`
	display: block;
	margin-top: 10px;
	font-size: ${(props) => props.fontSize}px;
	font-weight: ${(props) => props.fontWeight};
`;

export { Body, Container, Wrapper, Span };
