import React from "react";
import { Container } from "../../style";
import ProductsItem from "./product-item/products-item";
import { CardGrid, Title } from "./style";
const Products = () => {
  return (
    <Container>
      <Title>Products: </Title>
      <CardGrid>
        <ProductsItem />
      </CardGrid>
    </Container>
  );
};

export default Products;
