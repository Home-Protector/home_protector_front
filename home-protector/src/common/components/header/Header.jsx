import * as S from "./style";
import logo from '../../../img/logo.png'
import { useNavigate } from "react-router-dom";
import base64 from 'base-64';

const Header = () => {
	const accessToken = localStorage.getItem("accessToken"); // 사용자 토근 (token)

	const handleClickLogout = () => { // 로그아웃 버튼 클릭 시
		localStorage.clear();
		alert("로그아웃되었습니다.")
		navigate("/");
	};

	let headerDiv = '';
	const navigate = useNavigate();
	if (accessToken) { // 회원
		// token 디코딩하여 저장된 정보 가져오는 내용
		let payload = accessToken.substring(accessToken.indexOf('.')+1,accessToken.lastIndexOf('.'));
		let dec = JSON.parse(base64.decode(payload));

		headerDiv = <S.NavWrapper>
									<S.UserWrapper>{dec.nickname} 님</S.UserWrapper>
									<S.NavBtn onClick={() => {handleClickLogout()}}>로그아웃</S.NavBtn>
									<S.WritingBtn to="/form">글쓰기</S.WritingBtn>
								</S.NavWrapper>
	} else { // 비회원
		headerDiv = <S.NavWrapper>
						<S.NavLink to="/login">로그인</S.NavLink>
						<S.NavLink to="/signup">회원가입</S.NavLink>
						<S.WritingBtn to="/form">글쓰기</S.WritingBtn>
					</S.NavWrapper>
	}

	return (
		<S.Header>
			<S.TitleLink to="/"><S.LogoImg src={logo} alt="logo" /></S.TitleLink>
			{headerDiv}
		</S.Header>
	);
};

export default Header;