import { Gallery } from "../components/main/main";

const Home = ({ productsData, setProductsData, converterPrice, userlist, setUserList, setDatas, onuser, paycash, datas, shoplist, setShoplist }) => {
  return <Gallery productsData={productsData}
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
  />;
};

export default Home;
