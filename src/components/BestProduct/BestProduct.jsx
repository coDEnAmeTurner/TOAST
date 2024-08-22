/* eslint-disable jsx-a11y/img-redundant-alt */
import "./BestProduct.css";
import besBgSrc from "../../img/bes-bg.png";
import bestImage01Src from "../../img/best-image-01.png";
import bestImage02Src from "../../img/best-image-02.png";
import bestImage03Src from "../../img/best-image-03.png";
import productIcon01Src from "../../img/producticon-01.png";
import productIcon02Src from "../../img/producticon-02.png";
import productIcon03Src from "../../img/producticon-03.png";
import goIconSrc from "../../img/go-icon.png";

const BestProduct = () => {
  return (
    <div className="Bes_bg_container">
      <img src={besBgSrc} class="Bes_bg" alt="Best Product" />

      <div class="Best-Product">Best Product</div>

      <div class="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </div>

      <div className="best_image_container">
        <div className="best_image_container_item">
          <img src={bestImage01Src} class="BestImage_01" alt="Best Image 01" />
          <img
            src={productIcon01Src}
            class="Producticon 01"
            alt="producticon 01"
          />
          <div class="best_image_button_box">
            <span class="How-to-create-mobile-optimized">
              How to create mobile-optimized
            </span>
            <img
              src={goIconSrc}
              class="go_icon"
              alt="go icon"
            ></img>
          </div>
        </div>
        <div className="best_image_container_item">
          <img src={bestImage02Src} class="BestImage_02" alt="Best Image 02" />
          <img
            src={productIcon02Src}
            class="Producticon 02"
            alt="producticon 02"
          />
          <div class="best_image_button_box">
            <span class="How-to-create-mobile-optimized">
              How to create mobile-optimized
            </span>
            <img
              src={goIconSrc}
              class="go_icon"
              alt="go icon"
            ></img>
          </div>
        </div>
        <div className="best_image_container_item">
          <img src={bestImage03Src} class="BestImage_03" alt="Best Image 03" />
          <img
            src={productIcon03Src}
            class="Producticon 03"
            alt="producticon 03"
          />
          <div class="best_image_button_box">
            <span class="How-to-create-mobile-optimized">
              How to create mobile-optimized
            </span>
            <img
              src={goIconSrc}
              class="go_icon"
              alt="go icon"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
