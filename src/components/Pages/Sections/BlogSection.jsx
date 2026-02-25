const blogs = [
  {
    title: "Business Management",
    date: "20 December 2025",
    desc: "Business management develops leadership, strategic thinking, and decision-making skills for modern careers.",
    image: "/images/program-1.jpg",
  },
  {
    title: "Civil Engineering",
    date: "20 December 2025",
    desc: "Civil engineering focuses on infrastructure planning and sustainable development for future-ready cities.",
    image: "/images/civil.jpg",
  },
  {
    title: "BSc Microbiology",
    date: "20 December 2025",
    desc: "Microbiology explores healthcare, research, biotechnology, and environmental science opportunities.",
    image: "/images/program-3.jpg",
  },
];

const userImg = "/images/patel.jpg";

const BlogSection = () => {
  return (
    <section className="w-full bg-[#f1f3f7] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.12em] text-[#2a57b8] font-semibold">Featured Blog</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#1f3f95]">Latest Trends in Education</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((blog) => (
            <div key={blog.title} className="bg-white border border-[#dde5f1] shadow-sm overflow-hidden hover:shadow-md transition">
              <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#1f3f95]">{blog.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{blog.date}</p>
                <p className="text-[#34445f] mt-3 leading-relaxed">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-white border border-[#dde5f1] p-8 sm:p-10 text-center shadow-sm max-w-3xl mx-auto">
          <img src={userImg} alt="Student" className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#dbe7f4]" />
          <h3 className="mt-4 text-xl font-semibold text-[#1f3f95]">Ananya Patel</h3>
          <p className="text-[#2a57b8]">MBBS Student at AIMS</p>
          <p className="mt-4 text-[#34445f] leading-relaxed">
            I was confused between engineering and medicine after 10th. The counselors helped me
            understand my strengths, and now I am confidently pursuing my dream career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
