import * as S from "./style";

import useInput from "../../../hooks/useInput";
import { login } from "../../../api/user/user";
import { Link, useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from "react-query";

const Login = () => {
	const [username, setUsername, handleChangeUsername] = useInput(); // 아이디 (id)
	const [password, setPassword, handleChangePassword] = useInput(); // 비밀번호 (password)

	const navigate = useNavigate();
	const queryClient = new QueryClient();
	const mutation = useMutation(login, { // api요청 초기화하고, 성공 또는 실패 시 실행할 콜백함수 정의
		onSuccess: (data) => {
			const accessToken = data.headers.authorization;	// 서버에서 발급받은 token 값 가져오기

			if (!accessToken) { // accessToken이 없을 경우 로그인 막기
				alert("로그인에 실패하였습니다.");
				return;
			}

			localStorage.setItem("accessToken", accessToken); // 서버로부터 받은 응답에서 token을 추출하여 localStorage에 저장
			queryClient.invalidateQueries("user"); // 사용자 데이터 갱신 (갱신 후 최신 데이터를 가져오기 위함 (쿼리 캐시 무효화))
			alert("로그인에 성공하였습니다.");
			navigate("/"); // 성공한 경우 main 페이지로 이동
		},
		onError: (error) => {
			alert("아이디 또는 비밀번호가 틀렸습니다.");
		},
	});

	const handleClickLoginBtn = (e) => {
		e.preventDefault();	// 페이지 새로 고침 방지

		const userInfo = {
			username,
			password,
		};
		mutation.mutate(userInfo); // 입력한 userInfo를 로그인 api 전달.
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
						value={username}
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