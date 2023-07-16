import Header from "../common/components/header/Header";
import * as C from "../common/constants/styles";
import SignupForm from "../features/signup/signupForm/SignupForm";
import Footer from "../common/components/footer/Footer";

const SignUp = () => {
	return (
		<C.Container>
			<Header />
			<SignupForm />
			<Footer />
		</C.Container>
	);
};

export default SignUp;
