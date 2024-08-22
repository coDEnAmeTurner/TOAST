import "./App.css";
import Navbar from "./components/Nav/Navbar" ;
import MainBanner from "./components/MainBanner/MainBanner";
import Introduction from "./components/Introduction/Introduction";
import BestProduct from "./components/BestProduct/BestProduct";
import ProductList from "./components/ProductList/ProductList";
import BrandStory from "./components/BrandStory/BrandStory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner/>   
      <Introduction/>
      <BestProduct/>
      <ProductList/>
      <BrandStory/>
    </div>
  );
}

export default App;
