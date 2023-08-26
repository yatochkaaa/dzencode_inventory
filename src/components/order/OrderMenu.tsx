import React from "react";
import { PlusCircleFill, X } from "react-bootstrap-icons";
import OrderMenuItem from "./OrderMenuItem";
import { Order, Product } from "../../utils/types";
import { Table } from "react-bootstrap";

interface Props {
  activeOrder: Order;
  setActiveOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  products: Product[];
}

const OrderMenu: React.FC<Props> = ({
  activeOrder,
  setActiveOrder,
  products,
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

        <button
          onClick={() => setActiveOrder(null)}
          className="orderMenu__cross shadow"
        >
          <X height={24} width={24} fill="#98a4ac" />
        </button>
      </div>

      <Table className="orderMenu__list">
        <tbody>
          {products.map((product) => (
            <OrderMenuItem product={product} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderMenu;
