import React from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Table } from "react-bootstrap";
import OrderMenuItem from "./OrderMenuItem";
import { Order, Product } from "../../utils/types";
import DeleteOrderModal from "../modals/DeleteOrderModal";
import CloseButton from "../buttons/CloseButton";

interface Props {
  activeOrder: Order;
  setActiveOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  products: Product[];
}

const OrderMenu: React.FC<Props> = ({
  activeOrder,
  setActiveOrder,
  products,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  const handleTrashClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleDeleteProduct = () => {
    // Delete product logic
    setShowModal(false);
  };

  return (
    <div className="orderMenu">
      <div className="orderMenu__header">
        <h1 className="orderMenu__title">{activeOrder.title}</h1>
        <button className="orderMenu__addProduct">
          <PlusCircleFill
            height={20}
            width={20}
            className="me-2"
            fill="#80b444"
          />
          Добавить продукт
        </button>

        <CloseButton onClose={() => setActiveOrder(null)} />
      </div>

      <Table className="orderMenu__list">
        <tbody>
          {products.map((product) => (
            <OrderMenuItem
              product={product}
              handleTrashClick={() => handleTrashClick(product)}
            />
          ))}
        </tbody>
      </Table>

      <DeleteOrderModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedProduct={selectedProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default OrderMenu;
