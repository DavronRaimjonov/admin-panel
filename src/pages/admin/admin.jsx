import { useContext } from "react";
import { useForm } from "react-hook-form";
import { request } from "../../axios";
import { Context } from "../../context";
import { Form } from "./style";
const Admin = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, setData } = useContext(Context);
  const submit = (datas) => {
    const addProduct = async () => {
      const res = await request.post("/products", datas);
      setData((p) => [...p, res.data]);
    };
    addProduct();
    reset();
  };
  return (
    <div>
      <Form error={errors} onSubmit={handleSubmit(submit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Product name"
        />
        <input
          {...register("image", { required: true })}
          type="text"
          placeholder="Image"
        />
        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Price"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Add Product</button>
      </Form>
    </div>
  );
};

export default Admin;
