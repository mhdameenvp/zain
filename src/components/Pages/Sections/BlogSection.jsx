const blogs = [
  {
    title: "Business Management",
    date: "20-December-2025",
    desc: "Business management programs develop leadership, strategic thinking, and decision-making skills essential for success in today's competitive business world.",
    image: "/images/program-1.jpg",
  },
  {
    title: "Civil Engineering",
    date: "20-December-2025",
    desc: "Civil engineering focuses on designing, constructing, and maintaining infrastructure that supports modern society and sustainable development.",
    image: "/images/civil.jpg",
  },
  {
    title: "Bsc microbiology",
    date: "20-December-2025",
    desc: "Microbiology focuses on the study of microorganisms and their vital role in healthcare, research, biotechnology, and environmental science.",
    image: "/images/program-3.jpg",
  },
];

const userImg = "/images/patel.jpg";

const BlogSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-emerald-50 to-green-50 py-16 sm:py-20 md:py-24 overflow-hidden">
      
      {/* FUTURISTIC GLOW BACKGROUND */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Featured Blog Heading ===== */}
        <div className="text-center mb-14">
          <p className="text-sm text-emerald-600 font-semibold mb-2 tracking-wider uppercase">
            Featured Blog
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f2a44] mb-4">
            Latest Trends in Study{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Industry
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The study industry is shifting toward personalized, tech-driven learning
            and practical skill-based courses. There is also rising interest in
            global education and career-focused programs.
          </p>
        </div>

        {/* ===== FUTURISTIC BLOG CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-emerald-200/50"
            >
              {/* Image with Zoom Effect */}
              <div className="w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-[#1f2a44] mb-1 group-hover:text-emerald-600 transition duration-300">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-400 mb-3">
                  {blog.date}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {blog.desc}
                </p>

                <button className="text-sm font-semibold text-emerald-600 flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Bottom Glow Line */}
                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== SUCCESS STORIES / TESTIMONIAL ===== */}
        <div className="mt-20 md:mt-24 text-center">
          <p className="text-sm text-emerald-600 font-semibold mb-2 uppercase tracking-wider">
            Success Stories
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f2a44] mb-10">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>

          {/* FUTURISTIC GLASS TESTIMONIAL CARD */}
          <div className="relative bg-white/60 backdrop-blur-2xl border border-emerald-100 rounded-3xl p-8 sm:p-10 md:p-12 max-w-3xl mx-auto shadow-xl hover:shadow-emerald-200/40 transition-all duration-500">
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 to-green-200 blur-2xl opacity-30 rounded-3xl"></div>

            <div className="relative">
              {/* Profile Image */}
              <div className="flex justify-center mb-5">
                <img
                  src={userImg}
                  alt="Student"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#1f2a44]">
                Ananya Patel
              </h3>

              {/* Role */}
              <p className="text-sm text-emerald-600 mb-5">
                MBBS Student at AIMS
              </p>

              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
                "I was confused between engineering and medicine after 10th.
                The counselors helped me understand my true calling.
                Now I'm confidently pursuing my dream career with the right guidance."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;