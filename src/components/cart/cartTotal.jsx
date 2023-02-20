import styles from "./cart.module.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CartTotal = ({ total, setTotal, totalFound, cart, converterPrice }) => {

    useEffect(() => {
        if (totalFound) {
            const temp = totalFound.filter((el) => el.length !== 0);
            const totalprice = temp.map((el) => el[0].price * el[0].quantity);
            const reducer = (acc, cur) => acc + cur;

            if (totalprice.length === 0) {
                setTotal(0);
                return;
            }

            const itemTotal = totalprice.reduce(reducer);
            setTotal(itemTotal);
        } else {
            setTotal(0);
        }
    }, [total, setTotal, cart, totalFound]);

    return (
        <>
            <div className={styles.total}>
                <div className={styles.total_price}>
                    <p className={styles.cart_product_total_price}>총 상품금액</p>
                    <p className={styles.cart_product_price}>{converterPrice(total)}</p>
                </div>
                <div className={styles.pay_minus}>
                    <img src="./images/icon-minus-line.svg" alt="minus" />
                </div>
                <div className={styles.sale}>
                    <p className={styles.cart_product_sale}>상품 할인</p>
                    <p className={styles.cart_product_sale_price}>0원</p>
                </div>
                <div className={styles.pay_plus}>
                    <img src="./images/icon-plus-line.svg" alt="plus" />
                </div>
                <div className={styles.delivery}>
                    <p className={styles.cart_product_delivery}>배송비</p>
                    <p className={styles.cart_product_delivery_price}>0원</p>
                </div>

                <div className={styles.payment}>
                    <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
                    <p className={styles.cart_prouct_payment_price}>{converterPrice(total)}</p>
                </div>
            </div>
            <div className={styles.cart_product_price}>
                <p className={styles.total_price}></p>
                <Link to="/cash"><button className={styles.btn_submit}>주문하기</button></Link>
            </div>
        </>
    );
}