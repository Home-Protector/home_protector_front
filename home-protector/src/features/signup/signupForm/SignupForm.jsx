import * as S from "./style";
import { Link } from "react-router-dom";
import React from "react";

const SignupForm = () => {
	return (
		<div>
			<S.Title>회원가입</S.Title>
			<S.Form>
				<S.FormGroup>
					<S.Label htmlFor="username">아이디</S.Label>
					<S.Input
						type="text"
						id="username"
						name="username"
						placeholder="아이디"
						required
					/>
				</S.FormGroup>
				<S.FormGroup>
					<S.Label htmlFor="password">비밀번호</S.Label>
					<p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
					<S.Input
						type="password"
						id="password"
						name="password"
						placeholder="비밀번호"
						required
					/>
				</S.FormGroup>
				<S.FormGroup>
					<S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
					<S.Input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="비밀번호 확인"
						required
					/>
				</S.FormGroup>
				<S.FormGroup>
					<S.Label htmlFor="nickname">닉네임</S.Label>
					<p>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
					<S.Input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="별명 (2~15자)"
						required
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
