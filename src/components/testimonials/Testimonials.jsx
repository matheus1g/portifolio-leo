import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';

import { Pagination, A11y, Autoplay} from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">O que os alunos dizem</h2>
      <span className="section__subtitle">Depoimentos</span>

      <Swiper 
        className="testimonials__container"
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        autoplay
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, A11y, Autoplay]}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {Data.map(({id,image, title, description}) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}> 
              <img src={image} alt={title} className="testimonial__img"/>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials