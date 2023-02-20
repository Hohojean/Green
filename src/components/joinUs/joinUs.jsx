import { Formik } from "formik";
import * as Yup from "yup";
import "./JoinUs.css";
import { Link } from 'react-router-dom';
import { SubTitle } from "../header/subTitle/subTitle";


export const UserJoin = ({ setUserList, userlist }) => {
    function cancel(e) {
        if (window.confirm("회원가입을 정말 취소 하시겠습니까? 정말? 왜? 왜지??? 돼지야!!")) {
            alert("퉤");
        } else {
            e.preventDefault();
            alert("사랑해♡");
        }
    }

    function gg() {
        alert("메렁 바보야 으흐흐흐흐흐 약오르지??");
    }

    const validationSchema = Yup.object().shape({
        userid: Yup.string()
            .min(4, "최소 4자리 이상 입력하시오")
            .max(16, "최대 16자리까지 입력 가능합니다.")
            .matches(/^[a-z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\sA-Z가-힣]*$/
                , "아이디에 대문자, 한글, 특수문자는 입력할 수 없습니다."),
        // .required("아이디를 입력하고 넘어가라 이자시가"),
        username: Yup.string()
            .min(2, "최소 2자리 이상 입력하시오.")
            .matches(
                /^[가-힣][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s0-9a-zA-Z]*$/,
                "이름에 영어,숫자,특수문자가 입력되면 안 돼지."
            ),
        // .required("이름을 입력하고 넘어가라 이자시가"),

        password: Yup.string()
            .min(8, "비밀번호는 최소 8자리 이상 입력하세요")
            .max(20, "비밀번호는 최대 20자리까지 입력 가능합니다!")
            // .required("패스워드를 입력하고 넘어가라 이자시가"),
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
                "공백을 제외한 알파벳,숫자,특수문자까지 모두 입력해야 돼지"
            ),
        password2: Yup.string()
            .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다!"),
        // .required("필수 입력 값입니다!"),

        phoneNum: Yup.string()
            .min(11, "핸드폰 번호를 올바르게 입력해 주세요.")
            .max(11, "올바른 형식으로 입력해 주세요.")
            // .required("핸드폰 입력 안하냐 아자시가")
            .matches(
                /^[0-9][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\sa-zA-Z]*$/,
                "숫자만 입력하시요"
            ),

        email: Yup.string()
            .email("올바른 이메일 형식이 아닙니다!"),
        // 
    });



    return (
        <Formik
            initialValues={{
                userid: "",
                username: "",
                password: "",
                password2: "",
                phoneNum: "",
                email: "",
            }}
            validationSchema={validationSchema}
            validateOnMount={true}
        >
            {({ values, handleSubmit, handleChange, errors }) => (
                <>
                    <div className="jointop">
                        <SubTitle subTitleName={"JOIN"} />
                        <div className="box_top1">
                            <div className="topbox">
                                <h4>
                                    <span>02</span>
                                    회원정보입력
                                </h4>
                                <p>
                                    간단한
                                    <span>개인정보</span>를 입력해 주시면, 회원가입이 완료됩니다.
                                </p>
                            </div>
                        </div>
                        <div className="mainbox1">
                            <label htmlFor="join_sms"></label>
                            <table>
                                <tbody>

                                    <tr>
                                        <th htmlFor="join_id">아이디 *</th>
                                        <td>
                                            <input
                                                type="text"
                                                name="userid"
                                                minLength={8}
                                                maxLength={20}
                                                className="jid"
                                                id="join_id"
                                                required=""

                                                value={values.userid}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <button onClick={gg} className="id_check">
                                                중복확인
                                            </button>
                                            <div className="error-message">
                                                {errors.userid}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th htmlFor="join_name">이름 *</th>
                                        <td>
                                            <input
                                                type="text"
                                                name="username"
                                                id="join_name"
                                                className="jname"
                                                required=""

                                                value={values.username}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <div className="error-message">
                                                {errors.username}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th htmlFor="join_pw">비밀번호 *</th>
                                        <td>
                                            <input
                                                type="password"
                                                name="password"
                                                id="join_pw"
                                                className="jpw"
                                                required=""

                                                value={values.password}
                                                variane="outlined"
                                                onChange={handleChange}
                                            />
                                            4자리 이상의 알파벳,숫자,특수문자의 조합
                                            <div className="error-message">
                                                {errors.password}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th htmlFor="join_pw2">비밀번호 확인 *</th>
                                        <td>
                                            <input
                                                type="password"
                                                name="password2"
                                                className="jpw2"
                                                id="join_pw2"
                                                required=""

                                                value={values.password2}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            비밀번호를 한번 더 입력해주세요.
                                            <div className="error-message">
                                                {errors.password2}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th htmlFor="join_call">휴대전화번호 *</th>
                                        <td>
                                            <input
                                                type="text"
                                                maxLength={13}
                                                id="join_call"
                                                className="jcall"
                                                placeholder=" - 없이 입력"
                                                required=""
                                                name="phoneNum"

                                                value={values.phoneNum}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />

                                            <label htmlFor="join_sms">
                                                <input type="checkbox" name="sms" id="join_sms" />
                                                SMS 정보 수신
                                            </label>
                                            <div className="error-message">
                                                {errors.phoneNum}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="join_email">이메일 *</th>
                                        <td>
                                            <input
                                                type="text"
                                                name="email"
                                                id="join_email1"
                                                className="jemail1"

                                                value={values.email}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="checkbox"
                                                name="mailing"
                                                id="mailing"
                                                className="jmailing"
                                            />
                                            <label htmlFor="mailing">이메일 정보 수신</label>
                                            <div className="error-message">
                                                {errors.email}
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Confirm_btn">
                        <span className="Confirm_btn1">
                            <button onClick={() => {
                                const errorKeys = Object.keys(errors);
                                const valueValues = Object.values(values);

                                if (errorKeys.length !== 0) {
                                    alert('올바른 값을 입력해주세요');
                                } else if (!valueValues.includes('')) {
                                    alert('회원가입 축하해요오오오옹~~!!!')
                                    setUserList([...userlist, {
                                        userID: values.userid,
                                        userName: values.username,
                                        userPW: values.password,
                                        userPhone: `${values.phoneNum}`,
                                        userEmail: values.email,
                                    }]);
                                    console.log(userlist);
                                } else if (valueValues.includes('')) {
                                    alert('입력란을 채워주세요');
                                }
                            }}>확인</button>
                        </span>
                        <span className="Confirm_btn2">
                            <Link to="/" onClick={cancel}>취소</Link>
                        </span>
                    </div>
                </>
            )}
        </Formik>
    );
}

export default UserJoin;