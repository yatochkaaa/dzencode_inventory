import React from "react";
import { Image } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { Product } from "../../utils/types";

interface Props {
  product: Product;
  handleShowDeleteOrderProductModal?: () => void;
}

const OrderMenuItem: React.FC<Props> = ({
  product,
  handleShowDeleteOrderProductModal,
}) => {
  return (
    <>
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

      {handleShowDeleteOrderProductModal && (
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
            <button
              onClick={handleShowDeleteOrderProductModal}
              className="tableData__trash"
            >
              <Trash3Fill fill="#586c7c" />
            </button>
          </td>
        </>
      )}
    </>
  );
};

export default OrderMenuItem;
