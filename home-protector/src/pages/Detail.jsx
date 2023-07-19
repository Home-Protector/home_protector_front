import Header from "../common/components/header/Header";
import Content from "../features/detail/content/Content";
import Footer from "../common/components/footer/Footer";
import ScrollToTop from "../common/components/scrollToTop/ScrollToTop";
import CommentInput from "../features/detail/commentInput/CommentInput";
import Comments from "../features/detail/comments/Comments";
import * as C from "../common/constants/styles";

const Detail = () => {
	return (
		<div>
			<Header />
			<Content />
			<C.Wrapper>
				<CommentInput />
				<Comments />
			</C.Wrapper>
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Detail;
