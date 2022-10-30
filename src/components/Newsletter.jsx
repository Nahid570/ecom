import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 4rem;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 60%;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  flex: 8;
  padding-left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  outline: none;
  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
