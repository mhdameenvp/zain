import blog1 from "../../../assets/images/program-1.jpg";
import blog2 from "../../../assets/images/civil.jpg";
import blog3 from "../../../assets/images/program-3.jpg";
import userImg from "../../../assets/images/patel.jpg";

const blogs = [
  {
    title: "Business Management",
    date: "20-December-2025",
    desc: "Business management programs develop leadership, strategic thinking, and decision-making skills essential for success in today's competitive business world.",
    image: blog1,
  },
  {
    title: "Civil Engineering",
    date: "20-December-2025",
    desc: "Civil engineering focuses on designing, constructing, and maintaining infrastructure that supports modern society and sustainable development.",
    image: blog2,
  },
  {
    title: "Bsc microbiology",
    date: "20-December-2025",
    desc: "Microbiology focuses on the study of microorganisms and their vital role in healthcare, research, biotechnology, and environmental science.",
    image: blog3,
  },
];

const BlogSection = () => {
  return (
    <section className="w-full bg-[#f2f6fb] py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Featured Blog Heading ===== */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm text-[#2f4ea1] font-medium mb-2">
            Featured Blog
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f4ea1] mb-4">
            Latest trends in Study Industry
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The study industry is shifting toward personalized, tech-driven learning
            and practical skill-based courses. There is also rising interest in
            global education and career-focused programs.
          </p>
        </div>

        {/* ===== Blog Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-44 sm:h-48 md:h-52">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-[#2f4ea1] mb-1">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-400 mb-3">
                  {blog.date}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {blog.desc}
                </p>

                <button className="text-sm font-medium text-[#2f4ea1] flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Success Stories Section ===== */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-sm text-[#2f4ea1] font-medium mb-2">
            Success Stories
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2f4ea1] mb-8">
            What Our Students Say
          </h2>

          {/* Testimonial Card */}
          <div className="bg-[#dfe9f5] rounded-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto shadow-sm">
            
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <img
                src={userImg}
                alt="Student"
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
              />
            </div>

            {/* Name */}
            <h3 className="text-base sm:text-lg font-semibold text-[#2f4ea1]">
              Ananya Patel
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 mb-4">
              MBBS Student at AIMS
            </p>

            {/* Quote */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto">
              "I was confused between engineering and medicine after 10th.
              The counselors at EduPath helped me understand my true calling.
              Now I'm pursuing my dream of becoming a doctor."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;