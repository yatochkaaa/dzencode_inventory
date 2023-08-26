import React from "react";
import { Image } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
  handleTrashClick?: () => void;
}

const OrderMenuItem: React.FC<Props> = ({ product, handleTrashClick }) => {
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

      <td>
        <div className="tableData__mainInfo">
          <div className="tableData__title">{product.title}</div>
          <div className="tableData__specification">
            {product.specification}
          </div>
        </div>
      </td>

      {handleTrashClick && (
        <>
          <td>
            <div
              className={`tableData__condition ${
                !product.isNew && "tableData__condition--used"
              } `}
            >
              {product.isNew ? "Свободен" : "В ремонте"}
            </div>
          </td>

          <td>
            <button onClick={handleTrashClick} className="tableData__trash">
              <Trash3Fill fill="#586c7c" />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default OrderMenuItem;
