import React from "react";
import { request } from "../axios";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const res = await request.get("/products");
      setData(res.data);
    };
    fetch();
  }, []);
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};
export default Provider;
