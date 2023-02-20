import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import { SubTitle } from "../header/subTitle/subTitle"
import { CartList } from './cartList';
import { CartTotal } from './cartTotal';
import { useState } from 'react';

export const Cart = ({ cart, converterPrice, setCart, checkLists, setCheckLists, paycash, setPaycash }) => {
  const [total, setTotal] = useState(0);


  const handlequantity = (type, productNum, quantity) => {
    const found = cart.filter((el) => el.productNum === productNum)[0];
    const Idx = cart.indexOf(found);

    const cartItem = {
      productNum: found.productNum,
      name: found.name,
      title: found.title,
      price: found.price,
      image: found.image,
      quantity: quantity,
    };
    if (type === "plus") {
      setCart([...cart.slice(0, Idx), cartItem, ...cart.slice(Idx + 1)]);
    }
    else {
      if (quantity === 0) return;
      setCart([...cart.slice(0, Idx), cartItem, ...cart.slice(Idx + 1)]);
    }
  }

  const removeProduct = (productNum) => {
    setCart(cart.filter((el) => el.productNum !== productNum));
    setCheckLists(checkLists.filter((el) => el !== productNum));
  }

  const checkstate = (checked, productNum) => {
    if (checked) {
      setCheckLists([...checkLists, productNum]);
    } else {
      setCheckLists(checkLists.filter((check) => check !== productNum));
    }
  }

  const checkAll = (checked) => {
    if (checked) {
      const cartItemCheck = [];
      cart.map((cartItem) => cartItemCheck.push(cartItem.productNum));
      setCheckLists(cartItemCheck);
    } else {
      setCheckLists([]);
    }
  }

  const isCheckAll = cart.length === checkLists.length && checkLists.length !== 0

  const totalFound = checkLists.map((checkList) => {
    return cart.filter((el) => el.productNum === checkList);
  });

  return (
    <>
      <header className={styles.header}>
        <SubTitle subTitleName={"장바구니"} />
      </header>
      <CartHeader
        checkAll={checkAll}
        isCheckAll={isCheckAll}
      />
      {
        cart.length === 0 ? (
          <div className={styles.not}>
            <h2>장바구니가 비었습니다.</h2>
            <p>그러니 담아라</p>
          </div>
        ) :
          cart.map((cartitems) => {
            return <CartList key={`key-${cartitems.productNum}`}
              cartitems={cartitems}
              converterPrice={converterPrice}
              handlequantity={handlequantity}
              removeProduct={removeProduct}
              checkstate={checkstate}
              checkLists={checkLists}
            />
          })
      }
      {cart.length === 0 ? "" : <CartTotal
        converterPrice={converterPrice}
        total={total}
        setTotal={setTotal}
        totalFound={totalFound}
        cart={cart}
      />}
    </>
  );
};
