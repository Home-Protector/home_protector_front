import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import { QueryClient, useMutation } from 'react-query';
import { login } from "../../../api/user/user";

const Login = () => {
	const [username, setUsername, handleChangeUsername] = useInput();	// 아이디 (id)
	const [password, setPassword, handleChangePassword] = useInput();	// 비밀번호 (password)


	const navigate = useNavigate();
	const queryClient = new QueryClient();
	const mutation = useMutation(login, {
		onSuccess: (data) => {
			const accessToken = data.headers.Authorization;
			document.cookie = `accessToken=${accessToken}; path=/;`;
			queryClient.invalidateQueries("user");
		},
		onError: (error) => {
			console.log(error);
		}
	});

	const handleClickLoginBtn = (e) => {
		e.preventDefault();

		const userInfo = {
			username,
			password
		}
		// mutation.mutate(userInfo);  //  mutation = useMutation 호출 // 서버 개발시 open
		// 아래는 테스트용 
		let response = {headers : {Authorization : 'Bearer adfadsfa12341324asdfasdfasdf1241adsf12edsfq123r23'}}
		document.cookie = `accessToken=${response.headers.Authorization}; path=/;`;
		navigate('/')
		

		// 초기화
		setUsername('');
		setPassword('');
	};

	return (
		<div>
			<S.H1>회원 로그인</S.H1>
			<S.LoginForm onSubmit={handleClickLoginBtn}>
				<S.InputWrapper>
					<input
						type="text"
						placeholder="아이디"
						id="username"
						name="username"
						required
						value = {username}
						onChange={handleChangeUsername}
					/>
					<input
						type="password"
						placeholder="비밀번호"
						id="password"
						name="password"
						required
						value={password}
						onChange={handleChangePassword}
					/>
				</S.InputWrapper>
				<S.SummitBtn type="submit">로그인</S.SummitBtn>
			</S.LoginForm>
			<S.ToSignUp>
				아직 회원이 아니신가요?
				<Link to="/signup">회원가입</Link>
			</S.ToSignUp>
		</div>
	);
};

export default Login;
