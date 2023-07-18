import * as C from "../common/constants/styles";
import Header from "../common/components/header/Header";
import PostModify from "../features/modify/postmodify/PostModify";
import Footer from "../common/components/footer/Footer";

function Modify() {
  return (
    <C.Container>
        <Header />
        <PostModify />
        <Footer />
    </C.Container>
  )
}

export default Modify;