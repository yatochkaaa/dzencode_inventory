import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import CategoryTitle from "../components/PageTitle";
import { CATEGORY } from "../utils/consts";
import { Table } from "react-bootstrap";

const Products: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { orders } = useSelector((state: RootState) => state.orders);

  return (
    <div className="page">
      <CategoryTitle
        categoryName={CATEGORY.PRODUCTS}
        categoryLength={products.length}
      />

      <div className="table__container">
        <Table className="table">
          <tbody>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} orders={orders} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
