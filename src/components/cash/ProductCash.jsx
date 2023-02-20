import "./ProductCash.css";
import { SubTitle } from "../header/subTitle/subTitle";
import { Link } from 'react-router-dom';

export const ProductCash = () => {
    return (
        <>
            <div>
                <SubTitle subTitleName={"PAY"} />
            </div>
            <div className="cash_page">
                <form>
                    <div className="cash_card">
                        <h2>구매자 정보</h2>
                        <ul className="form-list">
                            <li className="form-list__row form-list__input-inline">
                                <div className="user_name">
                                    <label>
                                        이름
                                    </label>
                                    <input className="input" type="text" name="userName" required />
                                </div>
                            </li>
                            <li className="form-list__row form-list__input-inline">
                                <div>
                                    <label>휴대 전화</label>
                                    <div className="form-list__input-inline">
                                        <input className="input" type="text" name="first_phone" placeholder={"010"} minLength={3} maxLength={3} required />&nbsp;&nbsp;-&nbsp;&nbsp;
                                        <input className="input" type="text" name="middle_phone" minLength={4} maxLength={4} placeholder={"0000"} required />&nbsp;&nbsp;-&nbsp;&nbsp;
                                        <input className="input" type="text" name="last_phone" minLength={4} maxLength={4} placeholder={"0000"} required />
                                    </div>
                                </div>
                                <div className="user_name">
                                    <label>
                                        이메일
                                    </label>
                                    <input className="input" type="text" name="userEmail" placeholder="xxx@xxx.x" required />
                                </div>
                            </li>
                            <li className="form-list__row">
                                <label>배송지 주소</label>
                                <input className="input" type="text" name="address" required />
                            </li>
                            <li className="form-list__row">
                                <label>상세 주소</label>
                                <input className="input" type="text" name="detailaddress" required />
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="cash_card">
                        <h2>주문 정보</h2>
                        <ul className="form-list">
                            <li className="form-list__row">
                                <label>배송시 요청 사항</label>
                                <input className="input" type="text" name="requirements" required />
                            </li>
                            <li className="form-list__row form-list__input-inline">
                                <div className="user_name">
                                    <label>
                                        쿠폰
                                    </label>
                                    <input className="input" type="text" name="coupon" required />
                                </div>
                                <div className="user_name">
                                    <label>
                                        결제 예상 금액
                                    </label>
                                    <input  className="input"type="text" name="expecpay" required />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="cash_card">
                        <h2>카드 결제</h2>
                        <div className="choicePay">
                            <a href="#sinsin">
                                <div className="sinyong">신용카드</div>
                            </a>
                            <a href="#account">
                                <div className="account">무통장 입금</div>
                            </a>
                        </div>
                        <ul className="form-list" id="sinsin">
                            <li className="form-list__row">
                                <label>카드 번호</label>
                                <div id="input--cc" className="creditcard-icon">
                                    <input className="input" type="text" name="cc_number" required />
                                </div>
                            </li>
                            <li className="form-list__row form-list__row--inline">
                                <div>
                                    <label>유효기간</label>
                                    <div className="form-list__input-inline">
                                        <input className="input" type="text" name="cc_month" placeholder="MM" minLength={2} maxLength={2} required />
                                        <input className="input" type="text" name="cc_year" placeholder="YY" minLength={2} maxLength={2} required />
                                    </div>
                                </div>
                                <div>
                                    <label>
                                        CVC
                                    </label>
                                    <input className="input" type="text" name="cc_cvc" placeholder={"123"} minLength={3} maxLength={4} required />
                                </div>
                            </li>
                            <li className="form-list__row form-list__input-inline">
                                <div className="user_name">
                                    <label>
                                        결제 금액
                                    </label>
                                    <input className="input" type="text" name="paycash" required />
                                </div>
                            </li>
                        </ul>
                        <ul className="form-list" id="account">
                            <li className="form-list__row form-list__input-inline">
                                <div className="user_name">
                                    <label>
                                        은행 이름
                                    </label>
                                    <input className="input" type="text" name="bankName" required />
                                </div>
                                <div className="user_name">
                                    <label>
                                        결제 계좌
                                    </label>
                                    <input className="input" type="text" name="payaccount" required />
                                </div>
                            </li>
                            <li className="form-list__row form-list__input-inline">
                                <div className="user_name">
                                    <label>
                                        결제 금액
                                    </label>
                                    <input className="input" type="text" name="paycash" required />
                                </div>
                            </li>
                        </ul>
                        <li className="btbtn">
                            <button type="submit" className="button"><Link to="/">Pay Now</Link></button>
                        </li>
                    </div>
                </form>
            </div>
        </>
    );
};