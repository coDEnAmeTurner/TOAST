import "./Product.css";

const Product = ({ imgSrc }) => {
  return (
    <div className="product_list_item">
      <img src={imgSrc} class="img_01" alt={imgSrc} />
      <span class="what-happen-How-to-create">[What happen] How to create</span>
      <div className="product_list_item_details">
        <span class="-won">2,500 won</span>
        <div className="product_list_item_likes">
          <img src={require("../../img/hearticon.png")} class="Hearticon" alt="heart icon"/>
          <span class="-copy">236</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
