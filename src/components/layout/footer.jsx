import { Link } from 'react-router-dom';
import "./footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="footer_top">
                <Link to="/">Home</Link>
                <a href="../guide/guide.html">Guide</a>
                <a href="mailto:yulmi416@gmail.com" title="스팸성 메일은 차단됩니다.">
                    Store inquiry
                </a>
                <a href="../user_law/user_law.html">Agreement</a>
                <a href="../user_law/privacypolicy.html">Privacy policy</a>
            </div>
            <div className="footer_middle">
                <div>
                    <span>Customer center</span>
                    <p>
                        <br />
                        02. 345. 5439
                        <br />
                        월-금 10:00 - 17:00
                        <br />
                    </p>
                </div>
                <div>
                    <span>Bank Account</span>
                    <br />
                    <p>
                        <br />
                        신한 110-344544-110
                        <br />
                        빵셔틀(김유림)
                    </p>
                </div>
                <div>
                    <span>Community</span>
                    <br />
                    <p>
                        <br />
                        <a href="../community/community_Notice.html">공지사항</a>
                        <br />
                        <a href="../community/community_QNA.html">Q &amp; A</a>
                        <br />
                        <a href=".">FAQ</a>
                    </p>
                </div>
            </div>
            <div className="footer_bottom">
                <span>법인명: (주)식빵 주식회사</span>
                <span>대표: 빵셔틀</span>
                <span>전화: 1588-8888</span>
                <span>개인정보관리책임자: 빵셔틀(bbangshuttle@gmail.com)</span>
                <span>이메일: bbangshuttle@gmail.com</span>
            </div>
            <div className="copyright">
                <p>COPYRIGHT ⓒ 2022 BBANGSHUTTLE ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}

export default Footer;