import styled from "styled-components";
import { popularProducts } from "../data";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 20px;
  ${mobile({
    padding: "0px",
    gap: "0.5rem",
  })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </Container>
  );
};

export default Products;
