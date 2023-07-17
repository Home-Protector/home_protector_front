import * as S from "./style";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import { QueryClient, useMutation } from "react-query";
import { login } from "../../../api/user/user";

const Login = () => {
	const [username, setUsername, handleChangeUsername] = useInput(); // 아이디 (id)
	const [password, setPassword, handleChangePassword] = useInput(); // 비밀번호 (password)

	const navigate = useNavigate();

	const queryClient = new QueryClient();

	// api요청 초기화하고, 성공 또는 실패 시 실행할 콜백함수 정의
	const mutation = useMutation(login, {
		onSuccess: (data) => {
			const accessToken = data.headers.Authorization;
			// 서버로부터 받은 응답에서 token을 추출하여 localStorage에 저장
			localStorage.setItem("accessToken", accessToken);
			// 사용자 데이터 갱신
			queryClient.invalidateQueries("user");
			alert("로그인에 성공하였습니다.");
			navigate("/");
		},
		onError: (error) => {
			alert("아이디 또는 비밀번호가 틀렸습니다.");
		},
	});

	useEffect(() => {
		const storedAccessToken = localStorage.getItem("accessToken");
		if (storedAccessToken) {
			alert("로그인 상태에선 해당 페이지에 접근 할 수 없습니다.");
			navigate(-1); // 이전 페이지로 돌아가기
		}
	}, [navigate]);

	const handleClickLoginBtn = (e) => {
		e.preventDefault();

		const userInfo = {
			username,
			password,
		};
		//입력한 userInfo를 로그인 api요청에 전달.
		mutation.mutate(userInfo);

		// 초기화
		setUsername("");
		setPassword("");
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
