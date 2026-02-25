const StatusSection = () => {
  const stats = [
    { value: "5000 +", label: "Students Guided" },
    { value: "98%", label: "Success Rate" },
    { value: "50 +", label: "Expert Counselors" },
  ];

  return (
    <section className="relative w-full -mt-10 sm:-mt-12 md:-mt-14 lg:mt-0 z-20 px-4 sm:px-6 md:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-none bg-[#dbe7f4] px-5 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-[0_10px_22px_rgba(31,63,149,0.12)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h2 className="text-[#1f3f95] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
                  {stat.value}
                </h2>
                <p className="mt-1.5 text-[#24417b] text-lg sm:text-xl md:text-2xl font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-6 sm:h-7 md:h-8" />
      <div className="absolute -z-10 inset-x-0 top-16 sm:top-20 bottom-0 bg-[#f4f5f7]" />
    </section>
  );
};

export default StatusSection;
