import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";
import { getProduct } from './../../getData/getProduct';
import "./deta.css";

export const Detail = ({ converterPrice, cart, setCart }) => {
  const { productNum } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const transQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data.data.productsData.find((product) => product.productNum === parseInt(productNum)));
    });
  }, [productNum]);

  const duplicateCart = (productNum, quant) => {
    const found = cart.filter((el) => el.productNum === productNum)[0];
    const duplicateIdx = cart.indexOf(found);

    const cartItem = {
      productNum: product.productNum,
      name: product.name,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quant,
    };
    setCart([...cart.slice(0, duplicateIdx), cartItem, ...cart.slice(duplicateIdx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      productNum: product.productNum,
      name: product.name,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    };

    const found = cart.find((el) => el.productNum === cartItem.productNum);

    if (found) duplicateCart(cartItem.productNum, found.quantity + quantity);
    else setCart([...cart, cartItem]);
  };

  return (
    product && (
      <>
        <main className={styles.main}>
          <div className={styles.hihit}>
            <section className={styles.product}>
              <div className={styles.product_img}>
                <img src={product.image} alt="product" />
              </div>
            </section>
            <section className={styles.product}>
              <div className={styles.product_info}>
                <p className={styles.seller_store}>{product.title}</p>
                <p className={styles.product_name}>{product.name}</p>
                <span className={styles.price}>
                  {converterPrice(product.price + "")}
                  <span className={styles.unit}>원</span>
                </span>
              </div>

              <div className={styles.delivery}>
                <p>택배배송 / 무료배송</p>
              </div>

              <div className={styles.line}></div>

              <div className={styles.amount}>
                <img
                  className={styles.minus}
                  src="/images/icon-minus-line.svg"
                  alt="minus"
                  onClick={() => { transQuantity("minus") }}
                />

                <div className={styles.count}>
                  <span>{quantity}</span>
                </div>

                <img
                  className={styles.plus}
                  src="/images/icon-plus-line.svg"
                  alt="plus"
                  onClick={() => { transQuantity("plus") }}
                />
              </div>

              <div className={styles.line}></div>

              <div className={styles.sum}>
                <div>
                  <span className={styles.sum_price}>총 상품 금액</span>
                </div>

                <div className={styles.total_info}>
                  <span className={styles.total}>
                    총 수량 <span className={styles.total_count}>{quantity}개</span>
                  </span>
                  <span className={styles.total_price}>
                    {converterPrice(product.price * quantity)}
                    <span className={styles.total_unit}>원</span>
                  </span>
                </div>
              </div>

              <div className={styles.btn}>
                <button className={styles.btn_buy}>바로 구매</button>
                <button className={styles.btn_cart} onClick={() => { handleCart() }}>장바구니</button>
              </div>
            </section>
          </div>
          <div className="ID_detail_container">
            <div className="ID_detail_content">
              <h2>상세정보</h2>
              <p>{product.detail}</p>
            </div>
            <div className="ID_review">
              <h2>구매평</h2>
              <h3> 상품을 구매하신 분들이 작성한 리뷰입니다.</h3>
              <span className="ID_R_button">
                <a href=".">구매평 작성</a>
              </span>
              <div className="ID_review_content">
                <h3>등록된 구매평이 없습니다.</h3>
              </div>
            </div>
            <div className="ID_review">
              <h2>Q&amp;A</h2>
              <h3>구매하시려는 상품에 대해 궁금한 점이 있으면 문의주세요. </h3>
              <div className="ID_review_button">
                <span className="ID_R_button">
                  <a href=".">상품문의</a>
                </span>
                <span className="ID_R_button">
                  <a href=".">1:1문의</a>
                </span>
              </div>
              <div className="ID_review_content">
                <h3>등록된 Q&amp;A가 없습니다.</h3>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  );
};
