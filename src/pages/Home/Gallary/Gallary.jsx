import React from "react";
import image0 from "../../../assets/gallary/image-0.jpg";
import image1 from "../../../assets/gallary/image-1.jpg";
import image2 from "../../../assets/gallary/image-2.jpg";
import image3 from "../../../assets/gallary/image-3.jpg";
import image4 from "../../../assets/gallary/image-4.jpg";

const Gallary = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className=" mb-16">
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Gallery</span> 
        </h1>
      </div>
      <div className="md:grid grid-cols-2 items-center justify-center border gap-4">
        <div className="mb-4 md:mb-0"> 
          <img src={image0} alt=""  className="md:h-[] w-full mx-auto" />
        </div>
        <div className="gap-4 grid grid-cols-2 items-start">
          <div className="">
            <img src={image1} alt="" className="md:h-[]"/>
          </div>
          <div>
            <img src={image2} alt="" className="md:h-[]" />
          </div>
          <div> 
            <img src={image3} alt="" className="md:h-[]"/>
          </div>
          <div>
            <img src={image4} alt="" className="md:h-[]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
