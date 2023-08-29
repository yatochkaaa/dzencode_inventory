import React from "react";
import { Table } from "react-bootstrap";

import OrderMenuItem from "./OrderMenuItem";
import { Product } from "../../utils/types";

interface Props {
  handleShowDeleteOrderProductModal: (product: Product) => void;
  currentProducts: Product[] | null;
}

const OrderMenuList: React.FC<Props> = ({
  handleShowDeleteOrderProductModal,
  currentProducts,
}) => {
  return (
    <Table className="orderMenu__list">
      <tbody>
        {currentProducts &&
          currentProducts.map((product) => (
            <OrderMenuItem
              key={product.id}
              product={product}
              handleShowDeleteOrderProductModal={() =>
                handleShowDeleteOrderProductModal(product)
              }
            />
          ))}
      </tbody>
    </Table>
  );
};

export default OrderMenuList;
