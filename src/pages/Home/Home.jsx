import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Newsletter from "../../components/home/Newsletter";
import Footer from "../../components/home/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}