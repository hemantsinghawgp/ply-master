import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from '../../../assets/home/trainer.jpg';

const PopularInstructor = () => {
  return (
    <div className="my-28">
      {/* Section Heading */}
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-secondary">
          <span className="text-black dark:text-white">Our</span> Instructor
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">
            Meet our highly skilled instructor dedicated to guiding you on your yoga journey.
          </p>
        </div>
      </div>

      {/* Static Instructor Card */}
      <div className="flex justify-center">
        <div
          className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden p-8 text-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: `rgba(0, 0, 0, 0.05) 0px 0.796192px 2.38858px -0.625px,
                        rgba(0, 0, 0, 0.05) 0px 2.41451px 7.24352px -1.25px,
                        rgba(0, 0, 0, 0.05) 0px 6.38265px 19.148px -1.875px,
                        rgba(0, 0, 0, 0.05) 0px 20px 60px -2.5px`,
          }}
        >
          {/* Instructor Photo */}
          <img
            className="rounded-full border-4 border-gray-300 h-48 w-48 mx-auto mb-6"
            src={img}
            alt="Instructor"
          />

          {/* Instructor Info */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
           Samresh Keshyap
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Yoga Instructor</p>
          <p className="text-gray-600 dark:text-gray-400">
            Samresh has over 10 years of experience in yoga, specializing in helping individuals achieve
            mental and physical wellness. He has trained over 500 students globally.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center mt-6 space-x-6">
            <a href="#" className="text-secondary text-2xl hover:opacity-80">
              <FaLinkedin />
            </a>
            <a href="#" className="text-secondary text-2xl hover:opacity-80">
              <FaFacebook />
            </a>
            <a href="#" className="text-secondary text-2xl hover:opacity-80">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
