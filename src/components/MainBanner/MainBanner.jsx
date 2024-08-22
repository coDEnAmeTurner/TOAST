import mainBannerSrc from "../../img/main-banner.png";
import "./MainBanner.css"
const MainBanner = () => {
  return (
    <div className="main_banner_container">
      <img
        src={mainBannerSrc}
        className="main_banner"
        alt="Main Banner"
      />
      
    </div>
   
  );
};

export default MainBanner;
