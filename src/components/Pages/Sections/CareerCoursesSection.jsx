"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const courses = [
  { title: "Engineering & Technology", image: "/images/program-1.jpg" },
  { title: "Aviation Technology", image: "/images/program-2.jpg" },
  { title: "Bio Medical Engineering", image: "/images/program-3.jpg" },
  { title: "Medical & Paramedical", image: "/images/hero-bg.webp" },
  { title: "Business Management", image: "/images/cta.jpg" },
];

const CareerCoursesSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full py-14 sm:py-16 md:py-20 bg-[#f1f3f7]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1f3f95] mb-10">
          Career Pathway Courses
        </h2>

        <button
          ref={prevRef}
          className="absolute left-0 sm:left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#dde5f1] text-[#2a57b8] flex items-center justify-center shadow-sm hover:bg-[#2a57b8] hover:text-white transition"
          aria-label="Previous courses"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 sm:right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#dde5f1] text-[#2a57b8] flex items-center justify-center shadow-sm hover:bg-[#2a57b8] hover:text-white transition"
          aria-label="Next courses"
        >
          <ChevronRight size={20} />
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
          {courses.map((course) => (
            <SwiperSlide key={course.title}>
              <div className="bg-white border border-[#dde5f1] overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
                {/* force a fixed ratio so every image crops the same way */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5 flex-grow">
                  <h3 className="text-xl font-semibold text-[#1f3f95] leading-snug">{course.title}</h3>
                  <button className="mt-4 text-[#2a57b8] font-semibold text-sm">Learn More</button>
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
