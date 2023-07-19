import Header from "../common/components/header/Header";
import * as C from "../common/constants/styles";
import SignupForm from "../features/signup/signupForm/SignupForm";
import Footer from "../common/components/footer/Footer";

// 회원가입
const SignUp = () => {
	return (
		<C.Body>
			<Header />
			<C.Container>
				<SignupForm />
				<Footer />
			</C.Container>
		</C.Body>
	);
};

export default SignUp;
