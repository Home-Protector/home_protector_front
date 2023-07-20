import * as S from "./style";
import logo from "../../../img/logo.png";

import { useNavigate } from "react-router-dom";
import token from "../token/token";

const Header = () => {
	const navigate = useNavigate();

	// 로그아웃
	const handleClickLogout = () => {
		localStorage.clear();
		alert("로그아웃되었습니다.");
		navigate("/");
	};

	const [isToken, tokenInfo] = token();
	const currentTime = Date.now() / 1000; // 현재 시간

	// 토근이 만료되면 자동 로그아웃
	if (currentTime > tokenInfo.exp) {
		alert("로그인이 만료되었습니다. 다시 로그인 해주시기 바랍니다.");
		localStorage.clear();
	}

	return (
		<S.Header>
			<S.InnerHeader>
				<S.TitleLink to="/">
					<S.LogoImg src={logo} alt="logo" />
				</S.TitleLink>
				{isToken && currentTime < tokenInfo.exp ? (
					<S.NavWrapper>
						<S.UserWrapper>{tokenInfo.nickname} 님</S.UserWrapper>
						<S.NavBtn
							onClick={() => {
								handleClickLogout();
							}}>
							로그아웃
						</S.NavBtn>
						<S.WritingBtn to="/form">글쓰기</S.WritingBtn>
					</S.NavWrapper>
				) : (
					<S.NavWrapper>
						<S.NavLink to="/login">로그인</S.NavLink>
						<S.NavLink to="/signup">회원가입</S.NavLink>
						{isToken ? <S.WritingBtn to="/form">글쓰기</S.WritingBtn> : <></>}
					</S.NavWrapper>
				)}
			</S.InnerHeader>
		</S.Header>
	);
};

export default Header;