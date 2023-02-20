import { useState } from "react";
import { Link } from 'react-router-dom';
import { SubTitle } from "../header/subTitle/subTitle";
import "./LoginUs.css";

export default function LoginUs({ setOnuser, userlist, setPaycash }) {
    const [inputId, setInputValue] = useState('');  // 입력값.
    const [inputPw, setInputValue2] = useState('');


    function onChangeInput(e) {
        if (e.target.name === 'Id') {
            setInputValue(e.target.value);
        } else {
            setInputValue2(e.target.value);
        }
    }

    /* =================================================================================== */


    function checkEnter(e) {
        if (e.keyCode === 13 && inputId !== '' && inputPw !== '') {
            confirm();
        }
    }


    function confirm() {
        const filteredInfo = userlist.filter((item) => item.userID === inputId);

        if (inputId && inputPw) {
            if (filteredInfo.length === 0 || inputPw !== filteredInfo[0].userPW) {
                alert('아이디 또는 비밀번호를 잘 못 입력하였습니다. 😡');
            } else {
                alert('로그인 성공!!!!!!!!!!! 😊');
                setOnuser(inputId);
                setPaycash([inputId]);
            }
        } else {
            alert('아이디,비밀번호를 입력해 주세요. 😡');
        }
    }



    return (
        <>
            <div className="Login_main">
                <SubTitle subTitleName={"LOGIN"} />
                <div className="Login_middle">
                    <div className="Login">
                        <div className="LoginTop_id">
                            <label htmlFor="UserID">아이디</label>
                            <input
                                type="text"
                                id="UserID"
                                placeholder="아이디"
                                maxLength={20}

                                onChange={onChangeInput}
                                onKeyDown={checkEnter}
                                value={inputId}
                                name='Id'
                            />
                        </div>
                        <div className="LoginTop_pw">
                            <label htmlFor="UserPW">비밀번호</label>
                            <input
                                type="password"
                                id="UserPW"
                                placeholder="비밀번호"
                                maxLength={20}

                                onChange={onChangeInput}
                                onKeyDown={checkEnter}
                                value={inputPw}
                                name='Pw'
                            />

                        </div>
                        <button className="LoginBtn" onClick={confirm}>로그인</button>
                        <div className="save1">
                            <input type="checkbox" id="check1" defaultChecked />
                            보안접속
                            <label htmlFor="check2">
                                <input type="checkbox" id="check2" />
                                아이디저장
                            </label>
                            <a href="../id_pw_search/id_pw_search.html">아이디/비밀번호 찾기</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="joinBtn">
                <strong>아직 회원이 아니세요?</strong>
                <p>
                    회원이 되시면 할인쿠폰, 이벤트 참여 등 다양한 혜택을 누리실 수 있습니다.
                    <br />
                    가입해라 이것드라.
                </p>
                <Link to="/JoinUs">신규회원가입</Link>
            </div>
        </>
    );
}