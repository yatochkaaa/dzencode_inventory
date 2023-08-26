import React from "react";
import { ChevronRight, ListUl, Trash3Fill } from "react-bootstrap-icons";
import { Order } from "../../utils/types";
import {
  formattedPrice,
  formattedOrderDate,
  formattedMonthYearDate,
} from "../../utils/functions";

interface Props {
  order: Order;
  activeOrder: Order | null;
  setActiveOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}

const OrderItem: React.FC<Props> = ({ order, activeOrder, setActiveOrder }) => {
  const handleOrderMenuClick = () => {
    if (activeOrder && order.id === activeOrder.id) {
      setActiveOrder(null);
    } else {
      setActiveOrder(order);
    }
  };

  const getSumPrice = (i: number) =>
    order.products.reduce((acc, cur) => acc + cur.price[i].value, 0);

  const getProductString = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "Продуктов";
    } else if (lastDigit === 1) {
      return "Продукт";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "Продукта";
    } else {
      return "Продуктов";
    }
  };

  const isProductsInOrder = () => order.products.length > 0;

  return (
    <tr>
      {!activeOrder && <td>{order.title}</td>}

      <td>
        <div className="d-flex">
          <button className="tableData__menu" onClick={handleOrderMenuClick}>
            <ListUl width={24} height={24} stroke="#586c7c" />
          </button>

          <div>
            <div className="tableData__productsAmount">
              {order.products.length}
            </div>
            <div className="tableData__productsAmountTitle">
              {getProductString(order.products.length)}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div className="tableData__date">
          {formattedOrderDate(order.date)}
          <div
            className={`tableData__additionDate ${
              activeOrder && "tableData__additionDate--active"
            }`}
          >
            {formattedMonthYearDate(order.date)}
          </div>
        </div>
      </td>

      {!activeOrder && (
        <>
          <td>
            <div className="tableData__price">
              <div className="tableData__additionPrice">
                {isProductsInOrder() ? formattedPrice(getSumPrice(0)) : 0}{" "}
                <span className="tableData__currency">
                  {isProductsInOrder()
                    ? order.products[0].price[0].symbol
                    : "USD"}
                </span>
              </div>
              {isProductsInOrder() ? formattedPrice(getSumPrice(1)) : 0}{" "}
              <span className="tableData__currency">
                {isProductsInOrder()
                  ? order.products[0].price[1].symbol
                  : "UAH"}
              </span>
            </div>
          </td>

          <td>
            <button className="tableData__trash">
              <Trash3Fill fill="#586c7c" />
            </button>
          </td>
        </>
      )}

      <td className="p-0">
        {activeOrder && order.id === activeOrder.id && (
          <button
            onClick={() => setActiveOrder(null)}
            className="tableData__arrow"
          >
            <ChevronRight strokeWidth={3} stroke="#fff" fill="#fff" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderItem;
