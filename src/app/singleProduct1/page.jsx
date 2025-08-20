import ProductPage from "@/components/Pages/ProductPage";

export default function SingleProduct() {
  const productData = {
    title: "Parachute Advansed Gold Pure Coconut Hair Oil | For Long & Strong Hair",
    brand: "Marico Limited",
    images: [
      "/img1.webp",
      "/img2.webp",
      "/img3.webp",
      "/img4.webp",
      "/img5.webp",
      "/img6.webp",
    ],
    rating: 4.5,
    reviews: 147,
    reviewCount: 15,
    highlights: [
      "Contains pure coconut oil for deep nourishment",
      "Enriched with Vitamin E that may support hair strength",
      "May contribute to long and strong-looking hair",
      "Can help give a naturally radiant shine to hair",
    ],
    mrp: 400,
    price: 160,
    discount: 60,
    description:
      "This coconut oil is enriched with Vitamin E to nourish hair, prevent dryness, and strengthen roots. Ideal for daily use.",
    customerReviews: [
      { user: "Amit", rating: 5, comment: "Excellent quality oil!" },
      { user: "Sneha", rating: 4, comment: "Good fragrance, works well." },
    ],
    similar: [
      { title: "Dabur Amla Hair Oil", img: "/products/amla.png", price: 120 },
      { title: "Indulekha Hair Oil", img: "/products/indulekha.png", price: 210 },
      { title: "Patanjali Coconut Oil", img: "/products/patanjali.png", price: 95 },
    ],
  };

  return <ProductPage product={productData} />;
}
