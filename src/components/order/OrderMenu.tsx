import React from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Table } from "react-bootstrap";

import OrderMenuItem from "./OrderMenuItem";
import { Order, Product } from "../../utils/types";
import CloseButton from "../buttons/CloseButton";

interface Props {
  activeOrder: Order;
  setActiveOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  handleTrashClick: (product: Product) => void;
  currentProducts: Product[] | null;
}

const OrderMenu: React.FC<Props> = ({
  activeOrder,
  setActiveOrder,
  handleTrashClick,
  currentProducts,
}) => {
  return (
    <div className="orderMenu">
      <div className="orderMenu__header">
        <h1 className="orderMenu__title">{activeOrder.title}</h1>
        <button className="orderMenu__addProduct">
          <PlusCircleFill
            height={20}
            width={20}
            className="me-2"
            fill="#80b444"
          />
          Добавить продукт
        </button>

        <CloseButton onClose={() => setActiveOrder(null)} />
      </div>

      <Table className="orderMenu__list">
        <tbody>
          {currentProducts &&
            currentProducts.map((product) => (
              <OrderMenuItem
                product={product}
                handleTrashClick={() => handleTrashClick(product)}
              />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderMenu;
