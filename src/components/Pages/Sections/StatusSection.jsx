const stats = [
  { number: "5000 +", label: "Students Guided" },
  { number: "98%", label: "Success Rate" },
  { number: "50 +", label: "Expert Counselors" },
];

const StatusSection = () => {
  return (
    <section className="relative z-20 -mt-20 md:-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* COMPACT PREMIUM CARD */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 py-6 md:py-8 px-6 md:px-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6 md:gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${
                  index !== stats.length - 1
                    ? "sm:border-r border-gray-200"
                    : ""
                }`}
              >
                {/* NUMBER */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2f4ea1]">
                  {item.number}
                </h2>

                {/* LABEL */}
                <p className="mt-1 text-sm md:text-base text-gray-600 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatusSection;