import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteOrder, deleteProductFromOrder } from "../store/actions";
import { AppDispatch } from "../store";
import OrderItem from "../components/order/OrderItem";
import OrderMenu from "../components/order/OrderMenu";
import { RootState } from "../store";
import { CATEGORY } from "../utils/consts";
import { Order, Product } from "../utils/types";
import DeleteOrderProductModal from "../components/modals/DeleteOrderProductModal";

const Orders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders } = useSelector((state: RootState) => state.orders);

  const [showModal, setShowModal] = React.useState(false);
  const [activeOrder, setActiveOrder] = React.useState<Order | null>(null);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [currentProducts, setCurrentProducts] = React.useState<
    Product[] | null
  >(activeOrder ? activeOrder.products : null);

  React.useEffect(() => {
    if (activeOrder) {
      setCurrentProducts(activeOrder?.products);
    }
  }, [activeOrder]);

  const handleDeleteOrder = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  const handleShowDeleteOrderProductModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleDeleteProductFromState = (productId: number) => {
    if (!currentProducts) return;

    const updatedProducts = currentProducts.filter(
      (product) => product.id !== productId
    );
    setCurrentProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId: number) => {
    if (activeOrder) {
      dispatch(
        deleteProductFromOrder({
          orderId: activeOrder.id,
          productId,
        })
      );
      handleDeleteProductFromState(productId)
      setShowModal(false);
    }
  };

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
                handleDeleteOrder={handleDeleteOrder}
              />
            ))}
          </tbody>
        </Table>

        {activeOrder && (
          <OrderMenu
            activeOrder={activeOrder}
            currentProducts={currentProducts}
            setActiveOrder={setActiveOrder}
            handleShowDeleteOrderProductModal={handleShowDeleteOrderProductModal}
          />
        )}
      </div>

      <DeleteOrderProductModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedProduct={selectedProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default Orders;
