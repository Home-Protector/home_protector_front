import Header from "../common/components/header/Header";
import PostInput from "../features/form/postInput/PostInput";
import Footer from "../common/components/footer/Footer";
import * as C from "../common/constants/styles";

const Form = () => {
	return (
		<C.Container>
			<Header />
			<PostInput />
			<Footer />
		</C.Container>
	);
};

export default Form;
