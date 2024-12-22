import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Hero from './Hero';
import Hero2 from './Hero2';

const HeroContainer = () => {
    return (
        <section>
            <Swiper
                loop={true} // Enable continuous looping
                autoplay={{
                    delay: 5000, // Delay between slides (in ms)
                    disableOnInteraction: false, // Keep autoplay running even when user interacts
                }}
                pagination={{
                    clickable: true, // Make dots clickable
                    dynamicBullets: true, // Dynamic dots based on the number of slides
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"

                
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <Hero2 />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroContainer;
