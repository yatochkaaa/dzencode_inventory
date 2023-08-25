import React from "react";
import { ListUl, Trash3Fill } from "react-bootstrap-icons";
import { Order } from "../utils/types";
import {
  formattedPrice,
  formattedOrderDate,
  formattedMonthYearDate,
} from "../utils/functions";

interface Props {
  order: Order;
}

const OrderItem: React.FC<Props> = ({ order }) => {
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
      <td>{order.title}</td>

      <td className="d-flex">
        <button className="table__menu">
          <ListUl width={24} height={24} stroke="#586c7c" />
        </button>

        <div>
          <div className="table__productsAmount">{order.products.length}</div>
          <div className="table__productsAmountTitle">
            {getProductString(order.products.length)}
          </div>
        </div>
      </td>

      <td>
        <div className="table__date">
          {formattedOrderDate(order.date)}
          <div className="table__additionDate">
            {formattedMonthYearDate(order.date)}
          </div>
        </div>
      </td>

      <td>
        <div className="table__price">
          <div className="table__additionPrice">
            {formattedPrice(getSumPrice(0))} $
          </div>
          {formattedPrice(getSumPrice(1))}{" "}
          <span className="table__currency">UAH</span>
        </div>
      </td>

      <td>
        <button className="table__trash">
          <Trash3Fill fill="#586c7c" />
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
