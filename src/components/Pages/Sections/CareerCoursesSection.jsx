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
    image: "/images/hero-bg.webp",
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
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24
      bg-gradient-to-b from-white via-sky-50 to-sky-100">

      {/* SKY FUTURISTIC GLOW (MATCHES HERO + PROGRAM + CTA) */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_40%,rgba(56,189,248,0.14),transparent_45%)]" />
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_80%_60%,rgba(125,211,252,0.12),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl 
          font-bold text-[#0f172a] tracking-tight mb-12 md:mb-16">
          Career Pathway{" "}
          <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
            Courses
          </span>
        </h2>

        {/* LEFT ARROW (SKY GLASS STYLE) */}
        <button
          ref={prevRef}
          className="absolute left-2 sm:left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full 
          bg-white/90 backdrop-blur-md border border-sky-100
          shadow-sm hover:shadow-[0_10px_30px_rgba(56,189,248,0.25)]
          flex items-center justify-center
          text-sky-600 hover:bg-sky-600 hover:text-white
          transition-all duration-300"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          ref={nextRef}
          className="absolute right-2 sm:right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full 
          bg-white/90 backdrop-blur-md border border-sky-100
          shadow-sm hover:shadow-[0_10px_30px_rgba(56,189,248,0.25)]
          flex items-center justify-center
          text-sky-600 hover:bg-sky-600 hover:text-white
          transition-all duration-300"
        >
          ›
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          spaceBetween={22}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1.15 },
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              
              {/* SKY GLASS CARD (CONSISTENT UI SYSTEM) */}
              <div className="group bg-white/80 backdrop-blur-md border border-sky-100 
                rounded-2xl shadow-sm overflow-hidden 
                transition-all duration-300 
                hover:-translate-y-2 
                hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)]
                h-full flex flex-col">
                
                {/* IMAGE */}
                <div className="w-full h-44 sm:h-48 md:h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover 
                      transition-transform duration-500 
                      group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold 
                    text-[#0f172a] leading-snug 
                    group-hover:text-sky-600 transition duration-300">
                    {course.title}
                  </h3>

                  <button className="mt-4 text-sky-600 text-sm md:text-base 
                    font-semibold flex items-center gap-1">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  {/* SKY GLOW LINE */}
                  <div className="mt-4 h-[2px] w-0 
                    bg-gradient-to-r from-sky-500 to-sky-300 
                    group-hover:w-full transition-all duration-500 rounded-full">
                  </div>
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
