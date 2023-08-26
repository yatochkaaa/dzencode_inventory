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
          className={`tableData__statusCircle ${
            !product.isNew && "tableData__statusCircle--used"
          }`}
        ></div>
      </td>

      <td>
        <Image className="tableData__image" src={product.photo} />
      </td>

      <td className="tableData__mainInfo">
        <div className="tableData__title">{product.title}</div>
        <div className="tableData__specification">{product.specification}</div>
      </td>

      <td>
        <div className="tableData__type">{product.type}</div>
      </td>

      <td className="tableData__guarantee">
        <div className="tableData__timeRange">
          <span className="tableData__timeRangePrefix">с</span>
          {formattedGuaranteeDate(product.guarantee.start)}
        </div>

        <div className="tableData__timeRange">
          <span className="tableData__timeRangePrefix">по</span>
          {formattedGuaranteeDate(product.guarantee.end)}
        </div>
      </td>

      <td>
        <div className="tableData__price">
          <div className="tableData__additionPrice">
            {formattedPrice(product.price[0].value)} $
          </div>
          {formattedPrice(product.price[1].value)}{" "}
          <span className="tableData__currency">{product.price[1].symbol}</span>
        </div>
      </td>

      <td>
        <div className="tableData__order">{findOrderById(product.order)}</div>
      </td>

      <td>
        <button className="tableData__trash">
          <Trash3Fill fill="#586c7c" />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
