import styled from "styled-components";
import { categories } from "../data";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 20px;
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
