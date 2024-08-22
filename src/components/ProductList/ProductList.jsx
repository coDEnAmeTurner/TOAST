import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  return (
    <>
      <div className="product_list_div">
        {[...Array(25).keys()].map((idx) => {
          return (
            <Product
              imgSrc={require("../../img/img-" +
                (idx + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                }) +
                ".png")}
            />
          );
        })}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <div class="Rectangle-702">SEE MORE</div>

      </div>
    </>
  );
};

export default ProductList;
