import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import OrderItem from "../components/order/OrderItem";
import OrderMenu from "../components/order/OrderMenu";
import { RootState } from "../store";
import { CATEGORY } from "../utils/consts";
import { Order } from "../utils/types";

const Orders: React.FC = () => {
  const { orders } = useSelector((state: RootState) => state.orders);

  const [activeOrder, setActiveOrder] = React.useState<Order | null>(null);

  return (
    <div className="page">
      <div className="page__title">
        {CATEGORY.ORDERS} / {orders.length}
      </div>

      <div
        className={`page__content ${activeOrder && "page__content--splitted"}`}
      >
        <Table className="tableData" responsive={activeOrder ? false : true}>
          <tbody>
            {orders.map((order) => (
              <OrderItem
                key={order.id}
                order={order}
                activeOrder={activeOrder}
                setActiveOrder={setActiveOrder}
              />
            ))}
          </tbody>
        </Table>

        {activeOrder && (
          <OrderMenu
            activeOrder={activeOrder}
            setActiveOrder={setActiveOrder}
            products={activeOrder.products}
          />
        )}
      </div>
    </div>
  );
};

export default Orders;
