import styles from "./cart.module.css";

export const CartList = ({ cartitems,
    converterPrice,
    handlequantity,
    removeProduct,
    checkstate,
    checkLists
}) => {

    return (
        <section className={styles.cart_product_list}>
            <input type="checkbox"
                onChange={(e) => {
                    checkstate(e.currentTarget.checked, cartitems.productNum);
                }}
                checked={checkLists.includes(cartitems.productNum) ? true : false}
            />
            <div className={styles.cart_product_wrap}>
                <div className={styles.cart_product_image}>
                    <img src={cartitems.image} alt="product-img" />
                </div>

                <div className={styles.cart_product_info}>
                    <p className={styles.seller_store}>{cartitems.title}</p>
                    <p className={styles.product_name}>{cartitems.name}</p>
                    <p className={styles.price}>{converterPrice(cartitems.price)}원</p>
                    <p className={styles.delivery}>택배배송 / 무료배송</p>
                </div>
            </div>

            <div className={styles.cart_product_count}>
                <img
                    className={styles.minus}
                    src="./images/icon-minus-line.svg"
                    alt="minus"
                    onClick={() =>
                        handlequantity("minus",
                            cartitems.productNum,
                            cartitems.quantity - 1)}
                />

                <div className={styles.count}>
                    <span>{cartitems.quantity}</span>
                </div>
                <img
                    className={styles.plus}
                    src="./images/icon-plus-line.svg"
                    alt="plus"
                    onClick={() =>
                        handlequantity("minus",
                            cartitems.productNum,
                            cartitems.quantity + 1)}
                />
            </div>

            <div className={styles.cart_product_price}>
                <p className={styles.total_price} id={styles.total_price}>
                    {converterPrice(cartitems.price * cartitems.quantity)}
                </p>
            </div>

            <div className={styles.product_remove} onClick={() => { removeProduct(cartitems.productNum) }}>
                <img src="./images/icon-delete.svg" alt="delete" />
            </div>
        </section>
    );
}