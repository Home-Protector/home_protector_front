import Header from "../common/components/header/Header";
import Footer from "../common/components/footer/Footer";
import { styled } from "styled-components";
import { colors } from "../common/constants/colors";
import tempimg from '../img/tempimg.jpeg';

const Detail = () => {
  return (
    <div>
      <Header />
      <article>
        <ContentImg src={tempimg} alt="tempimg"/>
        <Container>
          <Content>
            <div>
              <Span fontSize='21' fontWeight='700'>디자이너의 10평 원룸, 감각적인 소품들로 느낌있게!</Span>
              <Span fontSize='14'>나는작성자ㆍ 1시간 전</Span>
              <Span>나는 내용</Span>
            </div>
            <Aside>
              <AsideBtn>🤍</AsideBtn>
              <AsideBtn>💬</AsideBtn> 
              <AsideBtn>📎</AsideBtn> 
            </Aside>
          </Content>
          <Comment>
            <h4>댓글</h4>
            <div>
              <CommentInput type="text" placeholder="댓글 내용"/>
              <CommentInputBtn>등록</CommentInputBtn>
            </div>
            <div>
              <CommentUl>
                <CommentLi>
                  <Span fontSize='12'>작성자 ㆍ 1시간 전</Span>
                  <Span fontSize='16'>안녕하세요</Span>
                </CommentLi>
                <CommentLi>
                  <Span fontSize='12'>작성자11 ㆍ 12시간 전</Span>
                  <Span fontSize='16'>안녕하세요11</Span>
                </CommentLi>
              </CommentUl>
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
  margin-top: 10px;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentImg = styled.img`
  width: 100%;
  height: 50vh;
`;

const Content = styled.div`
  width: 100%;
  position: relative;

  div {
    min-height: 500px;
  }
`;

const Aside = styled.aside`
  position: absolute;
  top: 10px;
  right: 0;
`;

const AsideBtn = styled.button`
position: relative;
  display: block;
  width: 54px;
  height: 54px;
  padding: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #dadce0;
  color: #828c94;
  border-radius: 100%;
  font-size: 24px;
  line-height: 0;
  box-shadow: 1px 3px 4px 0 rgba(209,213,217,.2);
  transition: border-color .2s,color .2s,background-color .2s;
`

const Comment = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentInput = styled.input`
  width: 75%;
  height: 4.2vh;
`;

const CommentInputBtn = styled.button`
  width: 13%;
  height: 5vh;

  margin-left: 5px;

	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
`;

const CommentUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CommentLi = styled.li`
  margin: 20px 0;
`;