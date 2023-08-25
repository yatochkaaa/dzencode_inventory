import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CategoryTitle from "../components/PageTitle";
import { CATEGORY } from "../utils/consts";
import { Table } from "react-bootstrap";

const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <div className="page">
      <CategoryTitle
        categoryName={CATEGORY.ORDERS}
        categoryLength={orders.length}
      />

      <Table className="table">
        {orders.map((order) => (
          <div key={order.id}>{order.title}</div>
        ))}
      </Table>
    </div>
  );
};

export default Orders;
