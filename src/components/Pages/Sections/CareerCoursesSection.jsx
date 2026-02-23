"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../../assets/images/program-1.jpg";
import img2 from "../../../assets/images/program-2.jpg";
import img3 from "../../../assets/images/program-3.jpg";
import img4 from "../../../assets/images/hero-bg.jpg";
import img5 from "../../../assets/images/cta.jpg";

const courses = [
  {
    title: "Engineering & Technology",
    image: img1,
  },
  {
    title: "Aviation Technology",
    image: img2,
  },
  {
    title: "Bio Medical Engineering",
    image: img3,
  },
  {
    title: "Medical & Paramedical",
    image: img4,
  },
  {
    title: "Business Management",
    image: img5,
  },
];

const CareerCoursesSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-[#dfeaf5] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* TITLE */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f4ea1] mb-8 md:mb-12">
          Career Pathway Courses
        </h2>

        {/* CUSTOM SMALL AESTHETIC ARROWS */}
        <button
          ref={prevRef}
          className="absolute left-0 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 
          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
          rounded-full bg-white/90 backdrop-blur 
          shadow-md hover:shadow-lg 
          flex items-center justify-center
          text-[#2f4ea1] hover:bg-[#2f4ea1] hover:text-white
          transition-all duration-300"
        >
          ‹
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 
          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
          rounded-full bg-white/90 backdrop-blur 
          shadow-md hover:shadow-lg 
          flex items-center justify-center
          text-[#2f4ea1] hover:bg-[#2f4ea1] hover:text-white
          transition-all duration-300"
        >
          ›
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={16}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },   // Mobile
            480: { slidesPerView: 1.3 }, // Large phones
            640: { slidesPerView: 2 },   // Tablet
            768: { slidesPerView: 2.5 }, // iPad
            1024: { slidesPerView: 3 },  // Laptop
            1280: { slidesPerView: 4 },  // Desktop
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                {/* IMAGE */}
                <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2f4ea1] leading-snug">
                    {course.title}
                  </h3>

                  <button className="mt-3 text-blue-600 text-sm sm:text-base font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More →
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default CareerCoursesSection;