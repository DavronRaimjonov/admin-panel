import React from "react";
import { useParams } from "react-router-dom";
import { request } from "../../../axios";
import { Container } from "../../../style";
import { Description } from "./style";

const ProductDescription = () => {
  const { id } = useParams();
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    const fetch = async () => {
      const res = await request.get(`/products/${id}`);
      setState([res.data]);
    };
    fetch();
  }, [id]);

  return (
    <Container>
      {state.map((item) => (
        <Description key={item.id}>
          <img src={item.image} alt="" />
          <div className="txt">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price} $</p>
          </div>
        </Description>
      ))}
    </Container>
  );
};

export default ProductDescription;
