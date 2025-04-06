import { Quantity } from "component";
import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { formatter } from "utils/fomater";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";

const ShoppingCartPage = () => {
  return (
    <>
      <Breadcrumb name="Giỏ hàng" />
      <div className="container">
        <div className="table__cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shopping__cart__item">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="product-pic"
                  />
                  <h4>Tên sản phẩm 1</h4>
                </td>
                <td>{formatter(200000)}</td>
                <td><Quantity quantity="2" hasAddToCart={false} /></td>
                <td>{formatter(400000)}</td>
                <td className="icon_close">
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPage);
