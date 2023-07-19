import Header from "../common/components/header/Header";
import Content from "../features/detail/content/Content";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import * as C from "../common/constants/styles";

const Detail = () => {
	return (
		<C.Body>
			<Header />
			<C.Container>
				<Content />
				<ScrollToTop />
				<Footer />
			</C.Container>
		</C.Body>
	);
};

export default Detail;
