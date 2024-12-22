import React from "react";
import retreatImage from '../../../assets/home/retreat.png';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Adjust import according to your chosen icon library

const UpcomingRetreats = () => {
  return (
    <div className="my-28">
      {/* Section Heading */}
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-secondary">
          <span className="text-black dark:text-white">Upcoming</span> Retreats
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">
            Join us for our upcoming retreats designed to deepen your practice and connect with nature.
          </p>
         
        </div>
      </div>

      {/* Retreat Cards */}
      <div className="grid grid-cols-3 gap-8">
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={retreatImage} // Corrected import
            alt="Retreat 1"
            style={{
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
            }}
            loading="lazy"
            decoding="async"
            sizes="max(33.3333vw, 50px)"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-white justify-center p-4">
            <div className="text-white text-4xl font-bold flex  mb-2">
               Retreat #1
            </div>
            <hr className="w-full border-gray-300 mb-2" />
            <p className="flex  text-xl">
              <FaCalendarAlt className="mr-2" /> January 15-20, 2025
            </p>
            <p className="flex  text-xl">
              <FaMapMarkerAlt className="mr-2" /> Location:Rishikesh, Uttarakhand
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={retreatImage} // Corrected import
            alt="Retreat 2"
            style={{
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
            }}
            loading="lazy"
            decoding="async"
            sizes="max(33.3333vw, 50px)"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-white justify-center p-4">
            <div className="text-white text-4xl font-bold flex  mb-2">
                Retreat #2
            </div>
            <hr className="w-full border-gray-300 mb-2" />
            <p className="flex  text-xl">
              <FaCalendarAlt className="mr-2" /> February 5-10, 2025
            </p>
            <p className="flex  text-xl">
              <FaMapMarkerAlt className="mr-2" /> Location: Manali, Himachal Pradesh
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={retreatImage} // Corrected import
            alt="Retreat 3"
            style={{
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
            }}
            loading="lazy"
            decoding="async"
            sizes="max(33.3333vw, 50px)"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-white justify-center p-4">
            <div className=" text-4xl font-bold flex  mb-2">
              Retreat #3
            </div>
            <hr className="w-full border-gray-300 mb-2" />
            <p className="flex text-xl">
              <FaCalendarAlt className="mr-2" /> December  10-15, 2025
            </p>
            <p className="flex text-xl">
              <FaMapMarkerAlt className="mr-2" /> Location: India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRetreats;
