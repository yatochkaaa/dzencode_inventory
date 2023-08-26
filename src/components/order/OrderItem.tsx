import React from "react";
import { ListUl, Trash3Fill } from "react-bootstrap-icons";
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

  return (
    <tr>
      {!activeOrder && <td>{order.title}</td>}

      <td>
        <div className="d-flex">
          <button
            className="tableData__menu"
            onClick={() => setActiveOrder(order)}
          >
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
                {formattedPrice(getSumPrice(0))} $
              </div>
              {formattedPrice(getSumPrice(1))}{" "}
              <span className="tableData__currency">UAH</span>
            </div>
          </td>

          <td>
            <button className="tableData__trash">
              <Trash3Fill fill="#586c7c" />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default OrderItem;
