import Header from "../common/components/header/Header";
import LoginForm from "../features/login//loginForm/LoginForm";
import * as C from "../common/constants/styles";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";

const Login = () => {
	return (
		<C.Body>
			<Header />
			<C.Container>
				<LoginForm />
				<ScrollToTop />
				<Footer />
			</C.Container>
		</C.Body>
	);
};

export default Login;