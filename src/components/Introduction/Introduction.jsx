import "./Introduction.css";
import introductionSrc from "../../img/introduction-bg.png";

const Introduction = () => {
  return (
    <div className="introduction_bg_container">
      <img src={introductionSrc} class="introduction_bg" alt="introduction" />
      <span class="What-Happened">What Happened!</span>
      <span class="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first step to your
        brand's success. How to create mobile-optimized videos in minutes.
      </span>
    </div>
  );
};

export default Introduction;
