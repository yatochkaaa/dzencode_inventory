import React from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Order, Product } from "../../utils/types";
import CloseButton from "../buttons/CloseButton";
import OrderMenuList from "./OrderMenuList";

interface Props {
  selectedOrder: Order;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  handleShowDeleteOrderProductModal: (product: Product) => void;
  currentProducts: Product[] | null;
}

const OrderMenu: React.FC<Props> = ({
  selectedOrder,
  setSelectedOrder,
  handleShowDeleteOrderProductModal,
  currentProducts,
}) => {
  return (
    <div className="orderMenu">
      <div className="orderMenu__header">
        <h1 className="orderMenu__title">{selectedOrder.title}</h1>
        <button className="orderMenu__addProduct">
          <PlusCircleFill
            height={20}
            width={20}
            className="me-2"
            fill="#80b444"
          />
          Добавить продукт
        </button>

        <CloseButton onClose={() => setSelectedOrder(null)} />
      </div>

      <OrderMenuList
        handleShowDeleteOrderProductModal={handleShowDeleteOrderProductModal}
        currentProducts={currentProducts}
      />
    </div>
  );
};

export default OrderMenu;
