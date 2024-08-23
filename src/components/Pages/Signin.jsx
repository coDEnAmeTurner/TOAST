import { useNavigate } from "react-router-dom";
import "./Signin.css";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";

export const Signin = () => {
    const nav = useNavigate();
    return (
        <>
            <Navbar />
            <div className="register-container">
                <div class="Welcome">
                    Welcome!
                </div >
                <div class="line"></div>
                <div class="label email">
                    아이디(이메일) *
                </div>
                <div class="textbox"></div>

                <div class="label pass">
                    비밀번호 *
                </div>
                <div class="textbox textbox-copy-7"></div>

                <div class="signin-textbox-copy-2">가입하기</div>

                <div class="SNS-">
                    SNS 계정으로 로그인
                </div>
                <div className="social">
                    <img src={require("../../img/naver-icon.png")}
                        class="naver_icon"></img>
                    <img src={require("../../img/kakao-icon.png")}
                        class="kakao_icon"></img>
                    <img src={require("../../img/facebook-icon.png")}
                        class="facebook_icon"></img>
                    <img src={require("../../img/google-icon.png")}
                        class="google-icon"></img>

                </div>
                <div class="Rectangle-702" style={{ width: "50vw", padding: "0 25vw 0 18vw" }} onClick={() => { nav("/register") }}>
                    <span class="easy-sign-up">
                        계정이 없으신가요? 간편가입하기
                    </span>
                </div>

                <span className="find-email">
                    아이디(이메일)찾기
                </span>
                <span className="find-password">
                    비밀번호 찾기
                </span>
            </div>

            <Footer /></>
    )
}