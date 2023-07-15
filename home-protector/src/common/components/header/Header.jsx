import * as S from "./style";
import { styled } from "styled-components";
import logo from '../../../img/logo.png'

const Header = () => {
	return (
		<S.Header>
			<S.TitleLink to="/"><Img src={logo} alt="logo" /></S.TitleLink>
			<div>
				<S.SingleLink to="/login">로그인</S.SingleLink>
				<S.SingleLink to="/signup">회원가입</S.SingleLink>
				<S.SingleLink to="/form">글쓰기</S.SingleLink>
			</div>
		</S.Header>
	);
};

export default Header;

const Img = styled.img`
	width: 200px;
	height: 100psx;
`;