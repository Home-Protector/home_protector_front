import * as C from "../common/constants/styles";
import Header from "../common/components/header/Header";
import PostModify from "../features/modify/postmodify/PostModify";
import Footer from "../common/components/footer/Footer";

function Modify() {
	return (
		<C.Body>
			<Header />
			<C.Container>
				<PostModify />
				<Footer />
			</C.Container>
		</C.Body>
	);
}

export default Modify;