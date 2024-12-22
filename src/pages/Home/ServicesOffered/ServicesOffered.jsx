import React from "react";

const services = [
  {
    title: "Hatha Yoga",
    imgSrc: "https://framerusercontent.com/images/7kobWKdFleAEAIcZUJDB7J4Csw.png"
  },
  {
    title: "Vinyasa Yoga",
    imgSrc: "https://framerusercontent.com/images/wxvvpcX6J03HymIkH1wyFyWU5pI.png"
  },
  {
    title: "Yin Yoga",
    imgSrc: "https://framerusercontent.com/images/TG6cAn9rUmr2e9jQSWMr0YSG0Q.png"
  },
  {
    title: "Power Yoga",
    imgSrc: "https://framerusercontent.com/images/zW4E5flirEKNypBUQXRF2sTj7Yc.png"
  },
  {
    title: "Detox Yoga",
    imgSrc: "https://framerusercontent.com/images/1YRezWy61KfAoaByCJTk7xRjw.png"
  },
  {
    title: "Yoga Stretch",
    imgSrc: "https://framerusercontent.com/images/jWnbsOtKeAYqLoVVQA4mChN2A.png"
  },
  {
    title: "Breath Work",
    imgSrc: "https://framerusercontent.com/images/7kobWKdFleAEAIcZUJDB7J4Csw.png"
  },
  {
    title: "Yoga Therapy",
    imgSrc: "https://framerusercontent.com/images/wxvvpcX6J03HymIkH1wyFyWU5pI.png"
  },
  {
    title: "Yoga for Total Fitness",
    imgSrc: "https://framerusercontent.com/images/TG6cAn9rUmr2e9jQSWMr0YSG0Q.png"
  },
  {
    title: "Prenatal & Postnatal Yoga",
    imgSrc: "https://framerusercontent.com/images/zW4E5flirEKNypBUQXRF2sTj7Yc.png"
  },
  {
    title: "Yoga for Mental Peace",
    imgSrc: "https://framerusercontent.com/images/1YRezWy61KfAoaByCJTk7xRjw.png"
  },
  {
    title: "Advanced Yoga",
    imgSrc: "https://framerusercontent.com/images/jWnbsOtKeAYqLoVVQA4mChN2A.png"
  }
];

const ServicesOffered = () => {
  return (
    <div className="my-28">
      {/* Section Heading */}
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-secondary">
          <span className="text-black dark:text-white">Why</span> Choose Us
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">
            Discover our range of services designed to help you achieve mental and physical wellness.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={service.imgSrc}
              alt={service.title}
              style={{
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
              }}
              loading="lazy"
              decoding="async"
              sizes="max(33.3333vw, 50px)"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;
