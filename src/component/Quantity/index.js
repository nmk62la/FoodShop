import { memo } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const Quantity = ({ hasAddToCart = true }) => {
  const navigate = useNavigate();

  return (
    <div className="quantity-container">
      <div className="quantity">
        <span className="qtybtn">-</span>
        <input type="number" defaultValue={1} />
        <span className="qtybtn">+</span>
      </div>
      {hasAddToCart && (
        <button type="submit" className="button-submit" onClick={() => navigate(ROUTERS.USER.SHOPPING_CART)}>
          Thêm giỏ hàng
        </button>
      )}
    </div>
  );
};

export default memo(Quantity);
