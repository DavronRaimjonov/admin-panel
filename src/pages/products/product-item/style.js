import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  img {
    width: 100%;
  }
  h2 {
    padding: 8px 0;
    font-size: 22px;
    font-weight: 600;
  }
  p:nth-of-type(1) {
    font-size: 14px;
    width: 100%;
  }
  p:nth-of-type(2) {
    padding: 8px 0;
    font-size: 22px;
    font-weight: 600;
  }
  .card_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 100px;
      height: 25px;
      background-color: #007acc;
      border: none;
      outline: none;
      color: #fff;
      font-size: 14px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export { Card };
