import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "../productsSlice";
import { products } from "../../mocks";

export const fetchProductsAction = (dispatch: Dispatch) => {
  dispatch(setProducts(products));
};
