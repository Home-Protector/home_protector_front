import * as S from "./style";
import logo from "../../../img/logo.png";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Header = () => {
	const accessToken = localStorage.getItem("accessToken"); // 사용자 토근 (token)

	const handleClickLogout = () => {
		// 로그아웃 버튼 클릭 시
		localStorage.clear();
		alert("로그아웃되었습니다.");
		navigate("/");
	};

	let headerDiv = "";
	const navigate = useNavigate();
	const infoDict = accessToken ? jwt_decode(accessToken) : {};
	const currentTime = Date.now() / 1000; // 현재 시간

	// 토근이 만료되면 자동 로그아웃
	if (currentTime > infoDict.exp) {
		alert("로그인이 만료되었습니다. 다시 로그인 해주시기 바랍니다.");
		localStorage.clear();
	}

	if (accessToken && currentTime < infoDict.exp) {
		// 회원, 토큰이 있고, 만료 시간이 끝나지 않았을 경우

		// token 디코딩하여 저장된 정보 가져오는 내용
		const infoDict = jwt_decode(accessToken);

		headerDiv = (
			<S.NavWrapper>
				<S.UserWrapper>{infoDict.nickname} 님</S.UserWrapper>
				<S.NavBtn
					onClick={() => {
						handleClickLogout();
					}}>
					로그아웃
				</S.NavBtn>
				<S.WritingBtn to="/form">글쓰기</S.WritingBtn>
			</S.NavWrapper>
		);
	} else {
		// 비회원
		headerDiv = (
			<S.NavWrapper>
				<S.NavLink to="/login">로그인</S.NavLink>
				<S.NavLink to="/signup">회원가입</S.NavLink>
				{accessToken ? <S.WritingBtn to="/form">글쓰기</S.WritingBtn> : <></>}
			</S.NavWrapper>
		);
	}

	return (
		<S.Header>
			<S.InnerHeader>
				<S.TitleLink to="/">
					<S.LogoImg src={logo} alt="logo" />
				</S.TitleLink>
				{headerDiv}
			</S.InnerHeader>
		</S.Header>
	);
};

export default Header;
