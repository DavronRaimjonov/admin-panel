import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import { Admin, Products, Home, ProductDescription } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="admin" element={<Admin />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
