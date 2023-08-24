import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import ordersReducer from "./ordersSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
