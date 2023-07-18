import Header from "../common/components/header/Header";
import Content from "../features/detail/content/Content";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import PostBanner from "../features/detail/postBanner/PostBanner";
import CommentInput from "../features/detail/commentInput/CommentInput";
import Comments from "../features/detail/comments/Comments";
import * as C from "../common/constants/styles";

const Detail = () => {
	return (
		<C.Container>
			<Header />
			<PostBanner />
			<C.Wrapper>
				<Content />
				<CommentInput />
				<Comments />
			</C.Wrapper>
			<ScrollToTop />
			<Footer />
		</C.Container>
	);
};

export default Detail;