import styled from "styled-components";
import { colors } from "../../../common/constants/colors";

const H1 = styled.h1`
	text-align: center;
	margin: 100px 0;
`;

const LoginForm = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		width: 300px;
		height: 50px;
		border: 1px solid ${colors.liner};

		&:first-child {
			border-top-right-radius: 4px;
			border-top-left-radius: 4px;
			margin-bottom: -1px;
		}

		&:last-child {
			border-bottom-right-radius: 4px;
			border-bottom-left-radius: 4px;
		}

		&::placeholder {
			color: ${colors.liner};
			font-size: 18px;
		}
	}
`;

const SummitBtn = styled.button`
	width: 300px;
	height: 50px;
	margin: 20px 0;
	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	font-size: 20px;
	font-weight: bold;
`;

const ToSignUp = styled.div`
	text-align: center;

	&:first-child {
		color: ${colors.primary};
	}
`;

export { H1, LoginForm, InputWrapper, SummitBtn, ToSignUp };
