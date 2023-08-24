import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchProductsAction } from "../store/actions";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  React.useEffect(() => {
    if (products.length === 0) {
      fetchProductsAction(dispatch);
    }
  }, [dispatch, products]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Products;
