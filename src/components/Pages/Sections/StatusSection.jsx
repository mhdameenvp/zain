const StatusSection = () => {
  const stats = [
    { value: "5000+", label: "Students Guided" },
    { value: "98%", label: "Success Rate" },
    { value: "50+", label: "Expert Counselors" },
  ];

  return (
    <section className="relative w-full mt-6 sm:mt-8 md:mt-10 px-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/10 to-transparent" />
      <div className="relative w-full py-12 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/35 bg-slate-900/75 px-5 sm:px-8 lg:px-12 py-6 sm:py-9 backdrop-blur-xl shadow-[0_24px_70px_rgba(6,182,212,0.25)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.24),transparent_36%),radial-gradient(circle_at_92%_80%,rgba(45,212,191,0.2),transparent_38%)]" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl border border-cyan-300/20 bg-slate-950/35 px-4 sm:px-6 py-5 sm:py-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_14px_34px_rgba(34,211,238,0.22)] ${index === 1 ? "sm:scale-[1.02]" : ""}`}
                >
                  <h2 className="bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-300 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    {stat.value}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-slate-100">
                    {stat.label}
                  </p>
                  <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;
