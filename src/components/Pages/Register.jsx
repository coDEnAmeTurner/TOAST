import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";
import "./Register.css";

export const Register = () => {
    return (
        <>
            <Navbar />
            <div className="register-container">
                <div class="Join-us">
                    Join us
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

                <div class="label verify-pass">
                    비밀번호 확인 *
                </div>
                <div class="textbox textbox-copy-8"></div>

                <div className="label">
                    주소
                </div>
                <div class="textbox textbox-copy-9"></div>
                <div class="textbox textbox-copy-10"></div>

                <div className="label">
                    연락처
                </div>
                <div class="textbox textbox-copy-11"></div>

                <div class="line"></div>


                <div class="confirm1">
                    <img src={require("../../img/11-px-check-box.png")}
                        class="px_check_box" />
                    이용약관
                    <div class="text-style-1">개인정보 처리 방침 </div>
                    <div class="text-style-2">에 동의합니다. (필수)</div>
                </div>

                <div class="confirm2">
                    <img src={require("../../img/11-px-non-cneck-box.png")}
                        class="px_non_cneck_box"></img>
                    광고 및 메일 수신에 동의합니다. (선택)
                </div>
                <div class="textbox-copy-2">가입하기</div>
            </div>
            <Footer />
        </>

    )
}