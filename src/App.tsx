import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { RootState } from "./store";
import { fetchProductsAction, fetchOrdersAction } from "./store/actions";
import AppRouter from "./components/AppRouter";
import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import "./styles/styles.css";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const { orders } = useSelector((state: RootState) => state.orders);

  React.useEffect(() => {
    if (products.length === 0) {
      fetchProductsAction(dispatch);
    }
  }, [dispatch, products]);

  React.useEffect(() => {
    if (orders.length === 0) {
      fetchOrdersAction(dispatch);
    }
  }, [dispatch, orders]);

  return (
    <BrowserRouter>
      <Header />
      <NavigationMenu />
      <Container style={{ marginLeft: 200, padding: "60px 100px" }}>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
};

export default App;
