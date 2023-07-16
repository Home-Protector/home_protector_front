import Header from "../common/components/header/Header";
import LoginForm from "../features/login//loginForm/LoginForm";
import * as C from "../common/constants/styles";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";

const Login = () => {
	return (
		<C.Container>
			<Header />
			<LoginForm />
			<ScrollToTop />
			<Footer />
		</C.Container>
	);
};

export default Login;
