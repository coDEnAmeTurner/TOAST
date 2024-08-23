import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div class="Rectangle-12-copy-3"></div>
            <div className="footer-info">
                <div className="footer-what-happened">
                    <div class="what-happened">
                        what happened
                    </div>
                    <div class="desc">
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] 29CM 강남 스토어 영업 종료
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] iOS 10 이하 버전 지원 중단 안내
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                    </div>
                </div>
                <div className="footer-info-details">
                    <div className="container">
                        <div class="footer-title">
                            about us
                        </div>
                        <div class="desc about-us-desc">
                            회사 소개
                            인재 채용
                            상시 할인 혜택
                        </div>
                    </div>
                    <div className="container">
                        <div class="footer-title">
                            my order
                        </div>
                        <div class="desc my-order-desc">
                            내 주문
                            주문 배송
                            취소 / 교환 / 반품 내역
                            상품 리뷰 내역
                            증빙 서류 발급
                        </div>
                    </div>
                    <div className="container">
                        <div class="footer-title">
                            my account
                        </div>
                        <div class="desc my-account-desc">
                            회원 정보 수정
                            회원 등급
                            마일리지 현황
                            쿠폰
                        </div>
                    </div>
                    <div className="container">
                        <div class="footer-title">
                            help
                        </div>
                        <div class="desc help-desc">
                            1 : 1 상담 내역
                            상품 Q & A 내역
                            공지 사항
                            자주하는 질문
                            고객의 소리
                        </div>
                    </div>
                </div>
            </div>
            <div class="Rectangle-12-copy-3a"></div>
            <div className="footer-author">
                <div class="a2020-2021-what-happened-corp-l-">
                    © 2020-2021 what happened corp  l  (주) 왓헤픈<span class="text-style-1">｜</span>
                    대표자 : 홍길<span class="text-style-2">｜</span>
                    사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 1<span class="text-style-3">｜</span>
                    FAX : 070-0000-0000  l  서비스 이용약관
                    <span class="text-style-4">개인정보처리방침</span>
                </div>
                <div class="footer-icons">
                    <img src={require("../../img/snsicon-01.png")}></img>
                    <img src={require("../../img/snsicon-02.png")}></img>
                    <img src={require("../../img/snsicon-03.png")}></img>
                </div>

            </div>
        </div>
    )
}

export default Footer;