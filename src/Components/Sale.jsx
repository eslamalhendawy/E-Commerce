import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import ProductsGrid from "./ProductsGrid";
import Skeleton from "@mui/material/Skeleton";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";

function Sale() {
  const URL = "https://clothey-api.onrender.com/promotions/products";

  useEffect(() => {
    document.title = `Clothey | Sale`;
    window.scrollTo(0, 0);
  }, []);

  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(URL)
      .then((res) => {
        setProducts(res.data);
        setFetching(false);
      })
      .catch((e) => console.log(e));
    }
    fetchProducts();
  }, [])

  return (
    <>
      <Search />
      <div className="contaner mx-auto px-6 py-12 bg-white">
        <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-7xl mb-6">Sale</h1>
      </div>
      <div className="md:flex xl:space-x-10 xl:p-10">
        <div className="md:flex-1 bg-cover bg-center flex flex-col space-y-3 justify-center items-center px-12 py-20 xl:py-[100px]" style={{ backgroundImage: "url(/images/recycled-shoe-store-promo-image-2.jpg)" }}>
          <p className="text-white font-semibold text-lg">Refer a friend</p>
          <h2 className="text-white text-4xl text-center font-semibold">Get 20% OFF</h2>
          <button className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Learn More</button>
        </div>
        <div className="md:flex-1 xl:py-[140px] bg-cover bg-center flex flex-col space-y-6 justify-center items-center px-12 py-20" style={{ backgroundImage: "url(/images/recycled-shoe-store-promo-image-1.jpg)" }}>
          <p className="text-white font-semibold text-lg">Promotion</p>
          <h2 className="text-white text-4xl text-center font-semibold">Student Discount</h2>
          <button className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Learn More</button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h3 className="text-[#212529] text-3xl my-3">On Sale</h3>
          <Link to="/collection/all" className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">VIEW ALL PRODUCTS</Link>
        </div>
        {fetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
            <div>
              <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </div>
          </div>
        ) : (
          <ProductsGrid cardsInfo={products} />
        )}
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Sale;
