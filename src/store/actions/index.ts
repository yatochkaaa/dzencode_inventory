import { Dispatch, createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "../productsSlice";
import { setOrders } from "../ordersSlice";
import { products, orders } from "../../mocks";

export interface DeleteProductFromOrderPayload {
  orderId: number;
  productId: number;
}

export const fetchProductsAction = (dispatch: Dispatch) => {
  dispatch(setProducts(products));
};

export const fetchOrdersAction = (dispatch: Dispatch) => {
  dispatch(setOrders(orders));
};

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  (orderId: number) => {
    return orderId;
  }
);

export const deleteProductFromOrder = createAsyncThunk(
  "orders/deleteProductFromOrder",
  ({ orderId, productId }: DeleteProductFromOrderPayload) => {
    return { orderId, productId };
  }
);
