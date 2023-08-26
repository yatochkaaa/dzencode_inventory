import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../utils/types";
import {
  deleteProductFromOrder,
  DeleteProductFromOrderPayload,
} from "./actions";

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      deleteProductFromOrder.fulfilled,
      (state, action: PayloadAction<DeleteProductFromOrderPayload>) => {
        const { orderId, productId } = action.payload;
        const order = state.orders.find((order) => order.id === orderId);

        if (order) {
          order.products = order.products.filter(
            (product) => product.id !== productId
          );
        }
      }
    );
  },
});

export const { setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
