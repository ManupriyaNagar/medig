"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const banners = [
  { img:"/img2.webp", alt: "Prohance" },
  { img:"/img3.webp", alt: "Doctor Consultation" },
  { img:"/img4.webp", alt: "Cancer Medicines" },
];

export default function PromoSlider() {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={10}
      breakpoints={{
        768: { slidesPerView: 3, spaceBetween: 16 },
      }}
      className="w-full container mx-auto"
    >
      {banners.map((banner, i) => (
        <SwiperSlide key={i}>
          <Image
            src={banner.img}
            alt={banner.alt}
            width={500}
            height={200}
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
