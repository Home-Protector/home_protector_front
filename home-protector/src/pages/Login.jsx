import React from "react";
import Header from "../common/components/header/Header";
import { styled } from "styled-components";
import { colors } from "../common/constants/colors";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<container>
			<Header />
			<StyledH1>Home Protector</StyledH1>
			<StyledForm>
				<InputWrapper>
					<input
						type="text"
						placeholder="아이디"
						id="username"
						name="username"
						required
					/>
					<input
						type="password"
						placeholder="비밀번호"
						id="password"
						name="password"
						required
					/>
				</InputWrapper>
				<StyledBtn type="submit">로그인</StyledBtn>
			</StyledForm>
			<StyledSignUp>
				아직 회원이 아니신가요?
				<Link to="/signup">회원가입</Link>
			</StyledSignUp>
		</container>
	);
};

export default Login;

export const StyledH1 = styled.h1`
	text-align: center;
	margin: 100px 0;
`;

export const StyledForm = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InputWrapper = styled.div`
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

export const StyledBtn = styled.button`
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

export const StyledSignUp = styled.div`
	text-align: center;

	&:first-child {
		color: ${colors.primary};
	}
`;
