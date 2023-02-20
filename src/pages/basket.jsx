import { Cart } from "../components/cart/cart";

const Basket = ({ converterPrice, cart, setCart, checkLists, setCheckLists, paycash, setPaycash }) => {
  return <Cart converterPrice={converterPrice}
    cart={cart}
    setCart={setCart}
    checkLists={checkLists}
    setCheckLists={setCheckLists}
    paycash={paycash}
    setPaycash={setPaycash}
  />;
};

export default Basket;
