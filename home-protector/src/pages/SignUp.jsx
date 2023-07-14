import { styled } from "styled-components";
import { colors } from "../common/constants/colors";
import { Link } from "react-router-dom";
import Header from "../common/components/header/Header";

const SignUp = () => {
	return (
		<Container>
			<Header />
			<Title>회원가입</Title>
			<Form>
				<FormGroup>
					<Label htmlFor="username">아이디</Label>
					<Input
						type="text"
						id="username"
						name="username"
						placeholder="아이디"
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">비밀번호</Label>
					<p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
					<Input
						type="password"
						id="password"
						name="password"
						placeholder="비밀번호"
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="confirmPassword">비밀번호 확인</Label>
					<Input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="비밀번호 확인"
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="nickname">닉네임</Label>
					<p>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
					<Input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="별명 (2~15자)"
						required
					/>
				</FormGroup>
				<CheckboxWrapper>
					<Checkbox type="checkbox" id="agreed" name="agreed" required />
					<CheckboxLabel htmlFor="agreed">
						약관에 동의합니다.
						<Link to="/terms">약관 보기</Link>
					</CheckboxLabel>
				</CheckboxWrapper>
				<Button type="submit">가입하기</Button>
			</Form>
		</Container>
	);
};

export default SignUp;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h3`
	margin-bottom: 20px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin-bottom: 10px;
	width: 360px;

	p {
		font-size: 14px;
		color: ${colors.secondary};
	}
`;

export const Label = styled.label`
	font-weight: bold;
`;

export const Input = styled.input`
	width: 100%;
	height: 40px;
	margin-top: 4px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const Checkbox = styled.input`
	margin-right: 8px;
`;

export const CheckboxLabel = styled.label`
	font-size: 14px;

	a {
		color: ${colors.primary};
		text-decoration: underline;
		margin-left: 150px;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 50px;
	margin-top: 20px;
	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
`;
