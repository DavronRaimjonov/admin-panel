import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #333;
  padding: 15px 0;
`;
export { CardGrid, Title };
