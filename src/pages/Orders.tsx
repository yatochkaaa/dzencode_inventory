import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CATEGORY } from "../utils/consts";
import { Table } from "react-bootstrap";
import OrderItem from "../components/OrderItem";

const Orders: React.FC = () => {
  const { orders } = useSelector((state: RootState) => state.orders);

  return (
    <div className="page">
      <div className="page__title">
        {CATEGORY.ORDERS} / {orders.length}
      </div>

      <Table className="table">
        <tbody>
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
