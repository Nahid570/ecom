import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(rgba(24, 21, 21, 0.664), rgba(48, 43, 43, 0.658)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
  width: 40%;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
  color: white;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>sign in</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button>Login</Button>
          <Link>Don't have an account? Create a new one</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
