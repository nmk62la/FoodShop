import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import { memo } from "react";
import {
  AiOutlineCopy,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { formatter } from "utils/fomater";

const ProductDetailPage = () => {
  const imgs = [cat1Img, cat2Img, cat3Img];

  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 product__detail__pic">
            <img src={cat3Img} alt="product-pic" />
            <div className="main">
              {imgs.map((item, key) => (
                <img src={item} alt="product-pic" key={key} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 product__detail__text">
            <h2>Rau củ xanh</h2>
            <div className="seen-icon">
              <AiOutlineEye />
              {` 10 (lượt đã xem) `}
            </div>
            <h3>{formatter(2000000)}</h3>
            <p>
              SiVi SHOP là một trong những hệ thống cửa hàng hoa quả nhập khẩu ở
              Đà Nẵng cung cấp cho quý khách những trái dưa lưới Egarden tươi
              ngon nhất cũng như các loại hoa quả nhập khẩu, hoa quả vùng miền
              khác.
            </p>
            <ul>
              <li>
                <b>Tình trạng:</b> <span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng:</b> <span>20</span>
              </li>
              <li>
                <b>Chia sẻ:</b>{" "}
                <span>
                  <AiOutlineFacebook />
                  <AiOutlineLinkedin />
                  <AiOutlineCopy />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductDetailPage);
