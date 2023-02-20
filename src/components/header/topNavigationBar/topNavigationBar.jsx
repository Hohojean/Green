// import styles from "./topNavigationBar.module.css";
import "./topNavigationBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const TopNavigationBar = ({ cart, onuser }) => {
  return (
    // <header className={styles.header}>
    //   <div className={styles.inner}>
    //     <Link to="/">
    //       <h1 className={styles.logo}>
    //         <img src="/images/main_logo.png" alt="logo" />
    //       </h1>
    //     </Link>
    //     <div className={styles.input_wrap}>
    //       <input type="text" placeholder="상품을 검색해보세요!" />
    //       <button className={`${styles.searchButton}${styles.searchButton}`} type="submit">
    //         <FontAwesomeIcon icon={faSearch} />
    //       </button>
    //     </div>
    //   </div>

    //   <div className={styles.menu}>
    //     <Link to="/cart">
    //       <div className={styles.shopping_cart}>
    //         <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
    //         {cart.length >= 1 ? (
    //           <div className={styles.new_shopping_cart}>
    //             <p>{cart.length}</p>
    //           </div>
    //         ) : ""}
    //       </div>
    //     </Link>
    //     <Link to="/LoginUs">
    //       <div className={styles.mypage}>
    //         <FontAwesomeIcon icon={faUser} size="2x" color="black" />
    //       </div>
    //     </Link>
    //   </div>
    // </header>
    <header>
      <nav className="header_top">
        <div>
          <Link to="/"><img src="./images/12121212-removebg-preview.png" alt="logo" /></Link>
        </div>
        <div>
          <ul className="main_cate">
            <li><strong><em>Bread</em></strong>
              <ul className="sub_cate">
                <Link to="/">
                  <li>식빵</li>
                </Link>
                <Link to="/">
                  <li>간식빵</li>
                </Link>
                <Link to="/">
                  <li>건강빵</li>
                </Link>
                <Link to="/">
                  <li>도넛</li>
                </Link>
                <Link to="/">
                  <li>페스츄리/파이</li>
                </Link>
              </ul>
            </li>
            <li><strong><em>Cake</em></strong>
              <ul className="sub_cate">
                <Link to="/">
                  <li>생크림 케이크</li>
                </Link>
                <Link to="/">
                  <li>티라미수</li>
                </Link>
                <Link to="/">
                  <li>클래식 케이크</li>
                </Link>
              </ul>
            </li>
            <li><strong><em>Present</em></strong>
              <ul className="sub_cate">
                <Link to="/">
                  <li>롤케이크</li>
                </Link>
                <Link to="/">
                  <li>파운드/카스테라</li>
                </Link>
                <Link to="/">
                  <li>구움과자/전통선물</li>
                </Link>
              </ul>
            </li>
            <li><strong><em>Dessert</em></strong>
              <ul className="sub_cate">
                <Link to="/">
                  <li>쿠키/타르트</li>
                </Link>
                <Link to="/">
                  <li>초코/캔디</li>
                </Link>
                <Link to="/">
                  <li>마카롱</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="user_cate">
            <li><FontAwesomeIcon icon={faUser} size="2x" color="black" />
              <ul className="sub_cate">
                <Link to="/LoginUs">
                  <li>로그인</li>
                </Link>
                <Link to="/">
                  <li>주문내역</li>
                </Link>
                <Link to="/">
                  <li>마이페이지</li>
                </Link>
              </ul>
            </li>
            <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} size="2x" color="black" /></Link></li>
          </ul>
        </div>
      </nav>
    </header >
  );
};
