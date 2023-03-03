import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarFlex = styled.nav`
  background-color: #007acc;
  padding: 10px 0;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  h1 {
    font-size: 25px;
  }
`;

export const NavItem = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  p {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
`;
