import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import Posts from "../features/main/posts/Posts";
import SortingOption from "../features/main/sortingOption/SortingOption";
import * as C from "../common/constants/styles";

const Main = () => {
	return (
		<C.Container>
			<Header />
			<SortingOption />
			<Posts />
			<ScrollToTop />
			<Footer />
		</C.Container>
	);
};

export default Main;
