import "./HappenedIssue.css"

const HappenedIssue = () => {
    return (
        <div class="happened_issue_div">
            <img src={require("../../img/news-object-03.png")}
                class="NewsObject_03"></img>
            <img src={require("../../img/news-object-02.png")}
                class="NewsObject_02"></img>

            <span class="Happeneds-issue">
                HAPPENED'S ISSUE
            </span>
            <span class="happened_issue_sidenote">
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </span>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div class="Rectangle-702">SEE MORE</div>

            </div>
            <div className="brand_list_div">
                <div class="Rectangle-678">
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <span class="whpn-issue">
                            WHPN
                            ISSUE
                        </span>

                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img src={require("../../img/news-img-01.png")}
                            class="NewsImg_01" alt="news-img-01" />

                    </div>
                </div>
                <div className="Rectangle-678" style={{
                    backgroundColor: "black"
                }}>
                    B BRAND
                    <img src={require("../../img/2c83cbd4bbb1787891368cae87a0fb49.jpg")} class="brand-image" alt="brand-image" />
                </div>
                <div className="Rectangle-678" style={{
                    backgroundColor: "black"
                }}>
                    C BRAND
                    <img src={require("../../img/news-img-03.png")} class="brand-image" alt="brand-image" />
                </div>
                <div className="Rectangle-678">
                    D BRAND
                    <img src={require("../../img/news-img-04.png")} class="brand-image" alt="brand-image" />
                </div>
                <div className="Rectangle-678" style={{
                    backgroundColor: "black"
                }}>
                    E BRAND
                    <img src={require("../../img/news-img-05.png")} class="brand-image" alt="brand-image" />
                </div>
                <img src={require("../../img/news-object-04.png")}
                    class="NewsObject_04"></img>
                <img src={require("../../img/news-object-03a.png")}
                    class="NewsObject_03a"></img>
                <img src={require("../../img/news-object-05.png")}
                    class="NewsObject_05"></img>
            </div>
        </div>
    )
}

export default HappenedIssue;