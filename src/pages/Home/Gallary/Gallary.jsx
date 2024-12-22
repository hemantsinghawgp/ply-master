import React from "react";
import image0 from "../../../assets/gallary/image-0.jpg";
import image1 from "../../../assets/gallary/image-1.jpg";
import image2 from "../../../assets/gallary/image-2.jpg";
import image3 from "../../../assets/gallary/image-3.jpg";
import image4 from "../../../assets/gallary/image-4.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Gallary = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      {/* Heading and paragraph section */}
      <div className="mb-16 flex flex-col md:flex-row items-center gap-4">
        {/* Left Heading */}
        <h2
          className="text-4xl whitespace-nowrap"
          style={{
            fontFamily: `"Inter", sans-serif`,
            fontWeight: "bold"
          }}
        >
          Pure Lifestyle Yoga
        </h2>

        <div
          style={{
            width: "5px",
            height: "100px",
            backgroundColor: "#000", // Set to black for visibility
           
          }}
        ></div>

        {/* Right Paragraph */}
        <p
          className="text-lg text-gray-700"
          style={{
            fontFamily: `"Inter", sans-serif`,
          }}
        >
         With over 20 years of experience, Pure Lifestyle Yoga is go-to destination for both online and offline yoga classes, designed to transform lifestyle. Join our vibrant community and discover the many benefits of yoga!
        </p>
      </div>

      {/* Gallery section */}
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiperGallery"
      >
        <SwiperSlide>
          <img src={image0} alt="Gallery Image 0" className="object-cover w-[370px] h-[555px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Gallery Image 1" className="object-cover w-[370px] h-[555px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Gallery Image 2" className="object-cover w-[370px] h-[555px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Gallery Image 3" className="object-cover w-[370px] h-[555px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Gallery Image 4" className="object-cover w-[370px] h-[555px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallary;
