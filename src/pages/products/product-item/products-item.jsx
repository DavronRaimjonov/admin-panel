import { useContext } from "react";
import { Link } from "react-router-dom";
import { request } from "../../../axios";
import { Context } from "../../../context";
import { Card } from "./style";

const ProductsItem = () => {
  const { data, setData } = useContext(Context);
  const deleteProduct = (id) => {
    const fetch = async () => {
      await request.delete("/products/" + id);
      setData((p) => p.filter((item) => item.id != id));
    };
    fetch();
  };
  return (
    <>
      {data.map((item) => (
        <Card key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description.slice(0, 70)}...</p>
          <p>{item.price} $</p>
          <div className="card_btn">
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
            <Link to={`/product/${item.id}`}>Description</Link>
          </div>
        </Card>
      ))}
    </>
  );
};

export default ProductsItem;
