import { Detail } from "../components/product_detail/detail";

const SelectProduct = ({ converterPrice, cart, setCart }) => {
  return <Detail converterPrice={converterPrice} cart={cart} setCart={setCart} />;
};

export default SelectProduct;
