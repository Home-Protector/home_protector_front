import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import { styled } from "styled-components";
import { colors } from "../common/constants/colors";
import tempimg from '../img/tempimg.jpeg'

const Detail = () => {
  return (
    <div>
      <Header />
      <article>
        <ContentImg src={tempimg} alt="tempimg"/>
        <Container>
          <section>
            <div>
              <Span fontSize='21' fontWeight='700'>디자이너의 10평 원룸, 감각적인 소품들로 느낌있게!</Span>
              <Span fontSize='14'>나는 작성자
                <button>좋아요</button>
              </Span>
              <Span >나는 내용</Span>
            </div>
          </section>
          <Comment>
            <h4>댓글</h4>
            <div>
              <input type="text" placeholder="댓글 내용"/>
              <button>등록</button>
            </div>
            <div>
              <ul>
                <li>
                  <span fontSize='12'>작성자</span>
                  <span fontSize='16'>안녕하세요</span>
                </li>
              </ul>
            </div>
            </Comment>
        </Container>
      </article>
      <Footer />
    </div>
  )
}

export default Detail;

const Span = styled.span`
    display: block;
    margin-top: 20px;
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};

    <button></button>
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;  
    
    &:first-child {
			min-height: 1000px;
		}
`;

const ContentImg = styled.img`
    width: 100%;
    height: 40vh;
`;

const Comment = styled.section`
    display: flex;
    flex-direction: column;
`;