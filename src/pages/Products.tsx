import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { CATEGORY } from "../utils/consts";
import { Form, Table } from "react-bootstrap";

const Products: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { orders } = useSelector((state: RootState) => state.orders);

  const [selectedType, setSelectedType] = React.useState("All");

  const types = ["All", ...new Set(products.map((product) => product.type))];

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const filteredProducts =
    selectedType === "All"
      ? products
      : products.filter((product) => product.type === selectedType);

  return (
    <div className="page">
      <div className="page__info">
        <div className="page__title">
          {CATEGORY.PRODUCTS} / {filteredProducts.length}
        </div>

        <div className="select">
          <span className="select__title">Тип:</span>
          <Form.Select
            className="select__value"
            value={selectedType}
            onChange={handleTypeChange}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>

      <Table className="tableData" responsive>
        <tbody>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} orders={orders} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
