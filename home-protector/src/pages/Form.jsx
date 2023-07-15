import Header from "../common/components/header/Header";
import { styled } from "styled-components";
import { colors } from "../common/constants/colors";

const Form = () => {
  return (
    <div>
      <Header />
      <Article>
        <InputDiv>
          <InputSpan fontSize='18' fontWeight='700'>사진을 추가해주세요.</InputSpan>
          <InputSpan fontSize='14'>최대 10장까지 올릴 수 있어요.</InputSpan>
          <Label for="input-file">PC에서 불러오기</Label>
          <Input type="file" id="input-file" accept="image/jpg, image/png, image/gif"/>
        </InputDiv>
        <Textarea type="text" height="35" fontSize="30" border="2px solid gray" placeholder="제목을 입력해주세요."/>
        <Textarea type="text" height="500" fontSize="15" placeholder="내용을 입력해주세요."/>
        <ButtonDiv>
          <Button>등록</Button>
          <Button>취소</Button>
        </ButtonDiv>
      </Article>
    </div>
  )
}

export default Form;

const Article = styled.article`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60%;
    height: 45vh;

    margin-bottom: 30px;

    background-color: #eee;

    border-radius: 4px;
`;

const InputSpan= styled.span`
	display: block;
	font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
`;

const Label = styled.label`
    padding: 6px 25px;
    margin: 10px;
    background-color: ${colors.primary};
    color: ${colors.background};
    border-radius: 4px;
    color: white;
    cursor: pointer;
`;

const Input = styled.input`
    display: none;
`;

const Textarea = styled.textarea`
    resize: none;
    margin-top: 20px;
    width: 60%;
    border: none;
    border-bottom: ${(props) => props.border};

    font-size: ${(props) => props.fontSize}px;

    height: ${(props) => props.height}px;

    // 스크롤바 스타일링
    overflow: auto;
    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
      // 스크롤바 배경색
      background-color: #f1f1f1;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 45%;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: ${colors.primary};
    color: ${colors.background};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
`;