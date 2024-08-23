import "./WhatHappened.css"

const WhatHappened = () => {
    return (
        <div className="what-happened-div">
            <div class="what-happened">
                WHAT HAPPENED
                <img src={require("../../img/video-object-05.png")}
                    class="VideoObject_05"></img>
            </div>
            <div class="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe2">
                How to create mobile-optimized videos in minutes. Not a designer,
                every team makes a lot of videos Can be trimmed. Take the first
                <img src={require("../../img/video-object-06.png")}
                    class="VideoObject_06"></img>
                <img src={require("../../img/video-object-07.png")}
                    class="VideoObject_07"></img>
            </div>
            <div style={{   
                display: "flex",
                justifyContent: "center"
            }}>
                <div class="Rectangle-702">SEE MORE</div>

            </div>
            <div className="video-container">
                <img src={require("../../img/video.png")}
                    class="video Video"/>
                <img src={require("../../img/video-object-04.png")}
                    class="video VideoObject_04"/>
                <img src={require("../../img/video-object-09.png")}
                    class="video VideoObject_09"/>
                <img src={require("../../img/video-object-03.png")}
                    class="video VideoObject_03"/>
                <img src={require("../../img/video-object-08.png")}
                    class="video VideoObject_08"/>
                <img src={require("../../img/video-object-01.png")}
                    class="video VideoObject_01"/>
                

            </div>
        </div>
    )
}

export default WhatHappened;