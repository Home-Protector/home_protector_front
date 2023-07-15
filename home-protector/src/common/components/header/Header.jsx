import * as S from "./style";

const Header = () => {
	return (
		<S.Header>
			<S.TitleLink to="/">HOME PROTECTOR</S.TitleLink>
			<div>
				<S.SingleLink to="/login">로그인</S.SingleLink>
				<S.SingleLink to="/signup">회원가입</S.SingleLink>
				<S.SingleLink to="/form">글쓰기</S.SingleLink>
			</div>
		</S.Header>
	);
};

export default Header;
