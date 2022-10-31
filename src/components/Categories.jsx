import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
    gap: "0",
    padding: "0px",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category key={category.id} item={category} />
      ))}
    </Container>
  );
};

export default Categories;
