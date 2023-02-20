import './gallery.css';
// import { Product } from "../products/product";
import { useEffect, useState } from "react";
import { getProduct } from './../../getData/getProduct';
import GalleryList from './GalleryList';
import { Link } from 'react-router-dom';

export const Gallery = ({ productsData, setProductsData, converterPrice, userlist, setUserList, onuser, setDatas, datas, shoplist, setShoplist }) => {

  const [currItem, setCurrItem] = useState([]);

  const onView = (id) => {
    setCurrItem(datas.find(item => item.bannerID === id));
  }

  useEffect(() => {
    getProduct().then((data) => {
      setProductsData(data.data.productsData);
      setUserList(data.data.usersData);
      setDatas(data.data.bannerData);
      setCurrItem(data.data.bannerData[0]);
      setShoplist(data.data.shopData);
    });
  }, [setProductsData, setUserList, setDatas, setCurrItem, setShoplist]);

  const mainNewStore = [
    {
      img: "./images/파바.png", storeID: '파바', storeLink: `./item_detail/item_detail.html`, storeSigniture: '마음샌드', signitureLink: "./ item_detail / item_detail.html",
    },
    {
      img: "./images/그린하우스.png", storeID: '그린하우스', storeLink: "./item_detail/item_detail.html", storeSigniture: '밤식빵', signitureLink: "./item_detail/item_detail.html",
    },
    {
      img: "./images/소금과빛.jpg", storeID: '소금과빛', storeLink: "./item_detail/item_detail.html", storeSigniture: '소보루', signitureLink: "./item_detail/item_detail.html",
    },
    {
      img: "./images/김영모.jpg", storeID: '김영모제과점', storeLink: "./item_detail/item_detail.html", storeSigniture: '몽블랑', signitureLink: "./item_detail/item_detail.html",
    },
  ]

  function NewStoreMaker() {
    let output = [];
    mainNewStore.forEach(function (v, i) {
      output[i] = <div key={i + "g"} className="M_recommend_item">
        <Link to={`/${mainNewStore[i].storeID}`}><img src={mainNewStore[i]['img']} alt=" M_item" /></Link>
        <span><Link to={`/${mainNewStore[i].storeID}`}>{mainNewStore[i]['storeID']}</Link></span>
        <span><Link to="/">{mainNewStore[i]['storeSigniture']}</Link></span>
      </div>
    });
    return (
      <div className="M_recommend_list">
        {output}
      </div>
    )
  }

  return (
    <>
      <div className="wrap">
        <GalleryList datas={datas} onView={onView} currItem={currItem} />
      </div>

      <div className="M_recommend">
        <h1>새로 입점했어요</h1>
        <NewStoreMaker />
      </div>
    </>
  );
};
