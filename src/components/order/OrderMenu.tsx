import React from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Table } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

import OrderMenuItem from "./OrderMenuItem";
import { Order, Product } from "../../utils/types";
import CloseButton from "../buttons/CloseButton";

interface Props {
  activeOrder: Order;
  setActiveOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  handleShowDeleteOrderProductModal: (product: Product) => void;
  currentProducts: Product[] | null;
}

const OrderMenu: React.FC<Props> = ({
  activeOrder,
  setActiveOrder,
  handleShowDeleteOrderProductModal,
  currentProducts,
}) => {
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
          <AnimatePresence>
            {currentProducts &&
              currentProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <OrderMenuItem
                    key={product.id}
                    product={product}
                    handleShowDeleteOrderProductModal={() =>
                      handleShowDeleteOrderProductModal(product)
                    }
                  />
                </motion.tr>
              ))}
          </AnimatePresence>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderMenu;
