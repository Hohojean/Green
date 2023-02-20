// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import SelectProduct from "./pages/SelectProduct";
import Basket from "./pages/basket";
import JoinUser from "./pages/JoinUser";
import LoginUser from "./pages/LoginUser";
import Cash from "./pages/cash";
import Shop from "./pages/shop";
import { useState } from "react";
import Footer from "./components/layout/footer";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);
  const [datas, setDatas] = useState([]);

  const converterPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const [checkLists, setCheckLists] = useState([]);
  const [onuser, setOnuser] = useState('');
  const [userlist, setUserList] = useState([]);
  const [paycash, setPaycash] = useState([]);
  const [shoplist, setShoplist] = useState([]);

  console.log('?');

  return (
    <BrowserRouter>
      <TopNavigationBar cart={cart} onuser={onuser} />
      <Routes>
        <Route path="/"
          element={<Home
            productsData={productsData}
            setProductsData={setProductsData}
            converterPrice={converterPrice}
            userlist={userlist}
            setUserList={setUserList}
            onuser={onuser}
            paycash={paycash}
            datas={datas}
            setDatas={setDatas}
            setShoplist={setShoplist}
            shoplist={shoplist}
          />}
        />
        <Route path="/SelectProduct/:productNum"
          element={<SelectProduct
            converterPrice={converterPrice}
            cart={cart}
            setCart={setCart}
          />}
        />
        <Route path="/cart"
          element={<Basket
            converterPrice={converterPrice}
            cart={cart}
            setCart={setCart}
            checkLists={checkLists}
            setCheckLists={setCheckLists}
            paycash={paycash}
            setPaycash={setPaycash}
          />}
        />
        <Route path="/JoinUs"
          element={
            <JoinUser
              userlist={userlist}
              setUserList={setUserList}
            />
          }
        />
        <Route path="/LoginUs"
          element={
            <LoginUser
              userlist={userlist}
              setOnuser={setOnuser}
              setPaycash={setPaycash}
            />
          }
        />
        <Route path="/cash"
          element={
            <Cash />
          }
        />
        <Route path="/:title"
          element={<Shop
            setShoplist={setShoplist}
          />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
