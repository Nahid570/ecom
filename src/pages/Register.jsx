import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(
      rgba(24, 21, 21, 0.664),
      rgba(48, 43, 43, 0.658)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  border: 2px solid white;
  width: 50%;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  gap: 1rem;
  padding: 10px;
  outline: none;
  border: 0.5px solid white;
  background-color: transparent;
  margin: 20px 10px 0px 0px;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  ::-webkit-input-placeholder {
    color: white;
    font-weight: bold;
  }
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
  color: whitesmoke;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  border: 0.5px solid whitesmoke;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
