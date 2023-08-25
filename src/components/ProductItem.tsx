import React from "react";
import { Image } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { Order, Product } from "../utils/types";
import { formattedPrice, formattedGuaranteeDate } from "../utils/functions";

interface Props {
  product: Product;
  orders: Order[];
}

const ProductItem: React.FC<Props> = ({ product, orders }) => {
  const findOrderById = (id: number) => {
    return orders.find((order) => order.id === id)?.title;
  };

  return (
    <tr>
      <td>
        <div
          className={`table__statusCircle ${
            !product.isNew && "table__statusCircle--used"
          }`}
        ></div>
      </td>

      <td>
        <Image className="table__image" src={product.photo} />
      </td>

      <td className="table__mainInfo">
        <div className="table__title">{product.title}</div>
        <div className="table__specification">{product.specification}</div>
      </td>

      <td>
        <div className="table__type">{product.type}</div>
      </td>

      <td className="table__guarantee">
        <div className="table__timeRange">
          <span className="table__timeRangePrefix">с</span>
          {formattedGuaranteeDate(product.guarantee.start)}
        </div>

        <div className="table__timeRange">
          <span className="table__timeRangePrefix">по</span>
          {formattedGuaranteeDate(product.guarantee.end)}
        </div>
      </td>

      <td>
        <div className="table__price">
          <div className="table__additionPrice">
            {formattedPrice(product.price[0].value)} $
          </div>
          {formattedPrice(product.price[1].value)}{" "}
          <span className="table__currency">{product.price[1].symbol}</span>
        </div>
      </td>

      <td>
        <div className="table__order">{findOrderById(product.order)}</div>
      </td>

      <td>
        <button className="table__trash">
          <Trash3Fill fill="#586c7c" />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
