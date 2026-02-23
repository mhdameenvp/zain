const StatusSection = () => {
  return (
    <section className="w-full mt-32 sm:mt-40 md:mt-48 lg:mt-56 px-4 sm:px-6 lg:px-8">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">
        
        {/* THEME BLENDED CARD (MATCHES HERO BACKGROUND) */}
        <div className="rounded-3xl 
                        bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50
                        border border-sky-100
                        shadow-lg 
                        px-6 sm:px-10 md:px-14 
                        py-10 sm:py-12 md:py-14
                        transition-all duration-300 hover:shadow-xl">
          
          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 md:gap-12 text-center">
            
            {/* STAT 1 */}
            <div className="group">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sky-600">
                5000+
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg font-medium">
                Students Guided
              </p>

              {/* SUBTLE DESIGN LINE */}
              <div className="mx-auto mt-4 h-[3px] w-12 
                              bg-gradient-to-r from-sky-400 to-cyan-400 
                              rounded-full transition-all duration-300 
                              group-hover:w-20"></div>
            </div>

            {/* STAT 2 */}
            <div className="group sm:border-x sm:border-sky-100">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-600">
                98%
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg font-medium">
                Success Rate
              </p>

              <div className="mx-auto mt-4 h-[3px] w-12 
                              bg-gradient-to-r from-cyan-400 to-teal-400 
                              rounded-full transition-all duration-300 
                              group-hover:w-20"></div>
            </div>

            {/* STAT 3 */}
            <div className="group">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-600">
                50+
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg font-medium">
                Expert Counselors
              </p>

              <div className="mx-auto mt-4 h-[3px] w-12 
                              bg-gradient-to-r from-teal-400 to-sky-400 
                              rounded-full transition-all duration-300 
                              group-hover:w-20"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;