import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchOrdersAction } from "../store/actions";

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);

  React.useEffect(() => {
    if (orders.length === 0) {
      fetchOrdersAction(dispatch);
    }
  }, [dispatch, orders]);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>{order.title}</div>
      ))}
    </div>
  );
};

export default Orders;
