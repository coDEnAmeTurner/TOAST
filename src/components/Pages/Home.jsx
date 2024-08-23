import MainBanner from "../MainBanner/MainBanner";
import Introduction from "../Introduction/Introduction";
import BestProduct from "../BestProduct/BestProduct";
import ProductList from "../ProductList/ProductList";
import BrandStory from "../BrandStory/BrandStory";
import HappenedIssue from "../HappenedsIssue/HappenedIssue";
import WhatHappened from "../WhatHappened/WhatHappened";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Introduction />
            <BestProduct />
            <ProductList />
            <BrandStory />
            <HappenedIssue />
            <WhatHappened />
            <Footer />
        </>
    )
}

export default Home;