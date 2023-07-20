import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import Posts from "../features/main/posts/Posts";
import * as C from "../common/constants/styles";

const Main = () => {
	return (
		<C.Body>
			<Header />
			<C.Container>
				<Posts />
				<ScrollToTop />
				<Footer />
			</C.Container>
		</C.Body>
	);
};

export default Main;