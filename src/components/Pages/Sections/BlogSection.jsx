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
    <section className="relative w-full bg-gradient-to-b from-white via-sky-50 to-sky-100 py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.14),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(125,211,252,0.12),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm text-sky-600 font-semibold mb-2 tracking-[0.2em] uppercase">
            Featured Blog
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 tracking-tight">
            Latest Trends in Study {" "}
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              Industry
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The study industry is shifting toward personalized, tech-driven learning
            and practical skill-based courses. There is also rising interest in
            global education and career-focused programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl shadow-[0_15px_40px_rgba(56,189,248,0.12)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(56,189,248,0.22)]"
            >
              <div className="w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-1 tracking-tight group-hover:text-sky-600 transition duration-300">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-400 mb-3">{blog.date}</p>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">{blog.desc}</p>

                <button className="text-sm font-semibold text-sky-600 flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    -&gt;
                  </span>
                </button>

                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-sky-500 to-sky-300 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <p className="text-sm text-sky-600 font-semibold mb-2 uppercase tracking-[0.2em]">
            Success Stories
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-10 tracking-tight">
            What Our {" "}
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>

          <div className="relative bg-white/85 backdrop-blur-2xl border border-sky-100 rounded-3xl p-8 sm:p-10 md:p-12 max-w-3xl mx-auto shadow-[0_20px_50px_rgba(56,189,248,0.15)] hover:shadow-[0_30px_70px_rgba(56,189,248,0.25)] transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-200 to-sky-100 blur-2xl opacity-30 rounded-3xl"></div>

            <div className="relative">
              <div className="flex justify-center mb-5">
                <img
                  src={userImg}
                  alt="Student"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 testimonial-text-strong">
                Ananya Patel
              </h3>

              <p className="text-sm text-sky-700 mb-5 testimonial-text-strong">
                MBBS Student at AIMS
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mx-auto testimonial-text-strong">
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
