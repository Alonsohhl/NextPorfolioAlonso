"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import item01img from "@/assets/images/portfolio-item/item_01.jpg";
import item02img from "@/assets/images/portfolio-item/item_02.jpg";
import item03img from "@/assets/images/portfolio-item/item_03.jpg";

export default function CustomSwiper() {
  return (<Swiper
    pagination={{ clickable: true }}
    loop={false}
    speed={750}
    autoplay
    modules={[Pagination, Autoplay]}
    autoHeight
    id="single-portfolio-slider"
    className="slider single-portfolio-slider relative swiper-container"
  >
    <SwiperSlide className="swiper-slide">
      <img src={item01img.src} alt="" />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={item02img.src} alt="" />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={item03img.src} alt="" />
    </SwiperSlide>
  </Swiper>)
}
