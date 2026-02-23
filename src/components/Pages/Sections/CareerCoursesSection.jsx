"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const courses = [
  {
    title: "Engineering & Technology",
    image: "/images/program-1.jpg",
  },
  {
    title: "Aviation Technology",
    image: "/images/program-2.jpg",
  },
  {
    title: "Bio Medical Engineering",
    image: "/images/program-3.jpg",
  },
  {
    title: "Medical & Paramedical",
    image: "/images/hero-bg.jpg",
  },
  {
    title: "Business Management",
    image: "/images/cta.jpg",
  },
];

const CareerCoursesSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full bg-gradient-to-b from-emerald-50 via-white to-green-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      
      {/* FUTURISTIC GLOW BACKGROUND */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE (AESTHETIC GRADIENT) */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f2a44] mb-10 md:mb-14">
          Career Pathway{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Courses
          </span>
        </h2>

        {/* LEFT ARROW (GLASS FUTURISTIC) */}
        <button
          ref={prevRef}
          className="absolute left-1 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10
          w-9 h-9 md:w-11 md:h-11
          rounded-full bg-white/70 backdrop-blur-xl border border-emerald-100
          shadow-lg hover:shadow-emerald-200/50
          flex items-center justify-center
          text-emerald-600 hover:bg-emerald-500 hover:text-white
          transition-all duration-300 hover:scale-110"
        >
          ‹
        </button>

        {/* RIGHT ARROW (GLASS FUTURISTIC) */}
        <button
          ref={nextRef}
          className="absolute right-1 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10
          w-9 h-9 md:w-11 md:h-11
          rounded-full bg-white/70 backdrop-blur-xl border border-emerald-100
          shadow-lg hover:shadow-emerald-200/50
          flex items-center justify-center
          text-emerald-600 hover:bg-emerald-500 hover:text-white
          transition-all duration-300 hover:scale-110"
        >
          ›
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={18}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              
              {/* FUTURISTIC GLASS CARD */}
              <div className="group bg-white/60 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-emerald-200/50 h-full flex flex-col">
                
                {/* IMAGE WITH ZOOM EFFECT */}
                <div className="w-full h-44 sm:h-48 md:h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1f2a44] leading-snug group-hover:text-emerald-600 transition duration-300">
                    {course.title}
                  </h3>

                  {/* FUTURISTIC BUTTON LINK */}
                  <button className="mt-4 text-emerald-600 text-sm md:text-base font-semibold flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  {/* BOTTOM GLOW LINE */}
                  <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
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