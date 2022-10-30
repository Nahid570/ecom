import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  position: relative;
  height: 50vh;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  outline: none;
  border: 2px solid lightgray;
  background-color: teal;
  padding: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default Category;
