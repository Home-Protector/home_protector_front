import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from 'react-query';
import { signup } from "../../../api/user/user";
import useInput from "../../../hooks/useInput";
import Valitator from "../../../common/components/validator/validators";

const SignupForm = () => {
	const [username, setUsername, handleChangeUsername] = useInput();		// 아이디 (id)
	const [password, setPassword, handleChangePassword] = useInput();		// 비밀번호 (password)
	const [pwConfirm, setPwConfirm, handleChangePwConfirm] = useInput();	// 비밀번호 확인 (password check)
	const [nickname, setNickname, handleChangeNickname] = useInput();		// 별명 (nickname)

	const queryClient = new QueryClient();
	const mutation = useMutation(signup, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		}
	});
	
	const navigate = useNavigate();
	const handleSignUpButtonClick = (e) => {
		e.preventDefault();	// 페이지 새로 고침 방지

		let valueDict = {username, password, pwConfirm, nickname}
		const errorMsg = Valitator(valueDict);
		if (errorMsg.trim() !== ''){
			alert(errorMsg);
		}
		else {
			const newUser = {
				username,
				password,
				nickname
			}
			mutation.mutate(newUser);

			// 로그인 페이지로 이동
			navigate('/login');
		}
	};
	
	return (
		<div>
			<S.Title>회원가입</S.Title>
			<S.Form onSubmit={handleSignUpButtonClick}>
				<S.FormGroup>
					<S.Label htmlFor="username">아이디</S.Label>
					<S.Input
						type="text"
						name="username"
						placeholder="아이디 (2~15자)"
						minLength="4"
						maxLength="10"
						required
						value = {username}
						onChange = {handleChangeUsername}
					/>
				</S.FormGroup>
				<S.FormGroup>
					<S.Label htmlFor="password">비밀번호</S.Label>
					<p>영문, 숫자를 포함한 8자 이상, 15자 이하 비밀번호를 입력해주세요.</p>
					<S.Input
						type="password"
						name="password"
						placeholder="비밀번호"
						required
						minLength="8"
						maxLength="15"
						value = {password}
						onChange = {handleChangePassword}
					/>
				</S.FormGroup>
				<S.FormGroup>
					<S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
					<S.Input
						type="password"
						name="confirmPassword"
						placeholder="비밀번호 확인"
						required
						minLength="8"
						maxLength="15"
						value = {pwConfirm}
						onChange = {handleChangePwConfirm}
					/>
				</S.FormGroup>
				<S.FormGroup>
					<S.Label htmlFor="nickname">닉네임</S.Label>
					<p>다른 유저와 겹치지 않도록 입력해주세요. (2~10자)</p>
					<S.Input
						type="text"
						name="nickname"
						placeholder="별명 (2~10자)"
						required
						minLength="4"
						maxLength="10"
						value = {nickname}
						onChange = {handleChangeNickname}
					/>
				</S.FormGroup>
				<S.CheckboxWrapper>
					<S.Checkbox type="checkbox" id="agreed" name="agreed" required />
					<S.CheckboxLabel htmlFor="agreed">
						약관에 동의합니다.
						<Link to="/terms">약관 보기</Link>
					</S.CheckboxLabel>
				</S.CheckboxWrapper>
				<S.Button type="submit">가입하기</S.Button>
			</S.Form>
		</div>
	);
};

export default SignupForm;