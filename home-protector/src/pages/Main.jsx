import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import Posts from "../features/main/posts/Posts";
import SortingOption from "../features/main/sortingOption/SortingOption";
import * as S from "../common/constants/styles";

const Main = () => {
	return (
		<S.Container>
			<Header />
			<SortingOption />
			<Posts />
			<ScrollToTop />
			<Footer />
		</S.Container>
	);
};

export default Main;
