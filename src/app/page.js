import HomeCategories from "@/components/Home/HomeCategories";
import LabTests from "@/components/Home/LabTests";
import Banner from "@/components/Home/Banner";
import ProductCarousel from "@/components/Home/ProductCarousel";
import Testimonials from "@/components/Home/Testimonials";
import HealthBlog from "@/components/Home/HealthBlog";
import Newsletter from "@/components/Home/Newsletter";
import FeaturedBrands from "@/components/Home/FeaturedBrands";
import FloatingCTA from "@/components/Home/FloatingCTA";
import AnimatedProductHighlight from "@/components/Home/AnimatedProductHighlight";
import Image from "next/image";

  const trendingProducts = [
    {
      title: "Shelcal 500mg Strip Of 15 Tablets",
      img: "/img1.webp",
      mrp: 158.6,
      price: 120.54,
      discount: 24,
    },
    {
      title: "Abzorb Total Skin Relief Dusting Powder",
       img: "/img1.webp",
      mrp: 160.0,
      price: 124.8,
      discount: 22,
    },
    {
      title: "Liveasy Wellness Calcium Magnesium",
       img: "/img1.webp",
      mrp: 599.0,
      price: 257.57,
      discount: 57,
    },
      {
      title: "Liveasy Wellness Calcium Magnesium",
       img: "/img1.webp",
      mrp: 599.0,
      price: 257.57,
      discount: 57,
    },
      {
      title: "Liveasy Wellness Calcium Magnesium",
      img: "/img1.webp",
      mrp: 599.0,
      price: 257.57,
      discount: 57,
    },
      {
      title: "Liveasy Wellness Calcium Magnesium",
       img: "/img1.webp",
      mrp: 599.0,
      price: 257.57,
      discount: 57,
    },
  
  ];

export default function Home() {
  return (
    <div>
      <Banner/>
      <HomeCategories/>
      <LabTests/>
      <FloatingCTA/>
      <ProductCarousel
        heading="Trending Near You"
        subheading="Popular in your city"
        products={trendingProducts}
      />
      <FeaturedBrands />
      <AnimatedProductHighlight />
      <ProductCarousel
        heading="New Launches"
        subheading="New wellness range just for you!"
        products={trendingProducts}
      />
      <HealthBlog />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
