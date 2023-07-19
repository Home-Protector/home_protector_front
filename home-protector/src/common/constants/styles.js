import styled from "styled-components";
// import { colors } from "./colors";

const Container = styled.div`
	box-sizing: border-box;
	margin: 0 auto;
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

export { Container, Wrapper, Span };
