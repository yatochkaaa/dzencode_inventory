import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "../productsSlice";
import { setOrders } from "../ordersSlice";
import { products, orders } from "../../mocks";

export const fetchProductsAction = (dispatch: Dispatch) => {
  dispatch(setProducts(products));
};

export const fetchOrdersAction = (dispatch: Dispatch) => {
  dispatch(setOrders(orders));
};
