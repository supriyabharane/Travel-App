"use client";

export default function PackagesHeroSection() {
  

  return (
    <div className="relative sm:h-[536px] h-[450px] flex flex-col justify-center items-center text-center ">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      
      <div className="relative z-10 sm:max-w-xl max-w-md mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-medium px-2">
          Country Images
        </h1>
        <p className="sm:mt-6 mt-4 text-lg sm:max-w-xl max-w-xs">
        the content of the country description goes here
        </p>
      </div>

    </div>
  );
}
