import { memo } from "react";
import "./style.scss";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const ProductCard = ({ img, name, price }) => {
  return (
    <>
      <div className="featured__item pl-pr-10">
        <div
          className="featured__item__pic"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <AiOutlineEye />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <Link to="">{name}</Link>
          </h6>
          <h5>{formatter(price)}</h5>
        </div>
      </div>
    </>
  );
};

export default memo(ProductCard);
