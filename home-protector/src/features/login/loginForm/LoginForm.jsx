import * as S from "./style";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<S.H1>회원 로그인</S.H1>
			<S.LoginForm>
				<S.InputWrapper>
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
