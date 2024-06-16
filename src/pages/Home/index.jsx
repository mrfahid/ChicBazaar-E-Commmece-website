import { Main, Product, Banner, Subscribe } from "../../components";
import TestimonialCarousel from "../../components/Testimonials/Testimonials";
import TopRatedProducts from "../ToRatedProducts/TopRatedProducts";

const Home = () => {
  return (
    <>
      <Main />
      <Product />
      <TopRatedProducts />
      <Banner />
      <Subscribe />
      <TestimonialCarousel />
    </>
  );
};

export default Home;
