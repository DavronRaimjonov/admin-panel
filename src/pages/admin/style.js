import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  gap: 10px;
  margin-top: 15px;
  input {
    width: 100%;
    height: 30px;
    padding-left: 14px;
    border-radius: 5px;
    border: 2px solid ${({ error }) => (error.name ? "red" : "#007acc")};
    outline: none;
  }
  textarea {
    width: 100%;
    padding-left: 14px;
    border-radius: 5px;
    border: 2px solid ${({ error }) => (error.name ? "red" : "#007acc")};
    outline: none;
  }
  button {
    width: 100%;
    border: none;
    background-color: #007acc;
    height: 30px;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export { Form };
