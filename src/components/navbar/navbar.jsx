import { useContext } from "react";
import { Context } from "../../context";
import { Container } from "../../style";
import { NavbarFlex, NavItem, NavLink } from "./style";
const Navbar = () => {
  const { data, setData } = useContext(Context);
  return (
    <NavbarFlex>
      <Container>
        <NavLink to={"/"} className="logo">
          <h1>Logo</h1>
        </NavLink>
        <NavItem>
          <NavLink to={"/admin"}>Admin</NavLink>
          <NavLink to={"/product"}>Products</NavLink>
          <p>Count: {data.length}</p>
        </NavItem>
      </Container>
    </NavbarFlex>
  );
};

export default Navbar;
