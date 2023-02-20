import { Link } from 'react-router-dom';
import { getProduct } from './../../getData/getProduct';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./shopp.css";

export const Shopp = () => {
    const [titlesearch, setTitlesearch] = useState([]);
    const [titleon, setTitleon] = useState({});
    const { title } = useParams();
    useEffect(() => {
        getProduct().then((data) => {
            setTitlesearch(data.data.productsData.filter((product) => product.title === title));
            setTitleon(data.data.shopData.find((product) => product.id === title));
        });
    }, [title]);

    return (
        <div className='main'>
            <div className="ID_id">
                <div className="ID_imgcontainer">
                    <img className="ID_itemimg" src={titleon.img} alt="itemimage" />
                </div>
                <div className="ID_detail">
                    <h2>{titleon.id}</h2>
                    <div className="ID_review_content">
                        <h3> {titleon.summary}</h3>
                    </div>
                    <div className="ID_deliver">
                        <span>배송방법 택배</span>
                        <span>배송비 3,000 원</span>
                    </div>
                    <div className="ID_quantity">
                        <span>가게위치</span>
                        <span>{titleon.location}</span>
                    </div>
                    <div className="ID_finalprice">
                        <span>최소주문</span>
                        <span>{titleon.minOrder}</span>
                    </div>
                    <div className="ID_etcbutton">
                        <span className="ID_button">
                            <Link to="/">♡</Link>
                        </span>
                    </div>
                </div>
            </div>



            <div className="ID_detail_container">
                <div className="ID_detail_content">
                    <h2>메뉴</h2>
                    {
                        titlesearch.map((el, i) => (
                            <Link to={`/SelectProduct/${el.productNum}`} key={i} >
                                <div className="SD_review_content">
                                    <img src={el.image} className="SD_menuImg" alt='1' />
                                    <div className="SD_menuID">{el.title}</div>
                                    <div className="SD_menuSumm">{el.name}</div>
                                    <div className="SD_menuPrice">{el.price}원</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}