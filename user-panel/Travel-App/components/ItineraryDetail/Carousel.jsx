import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images provided, use a default image
  const carouselImages = images.length > 0 
    ? images.map(img => img.url || img)
    : ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=60"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-6 sm:px-0 px-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="sm:aspect-[20/9] aspect-[20/12]">
          <img
            src={carouselImages[currentIndex]}
            alt={`Trip Image ${currentIndex + 1}`}
            className="w-full h-full object-cover object-center rounded-xl"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=60";
            }}
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute sm:left-4 left-2 top-1/2 transform -translate-y-1/2 bg-white sm:p-2 p-1 rounded-full shadow-lg"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute sm:right-4 right-2 top-1/2 transform -translate-y-1/2 bg-white sm:p-2 p-1 rounded-full shadow-lg"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      <div className="flex justify-center sm:space-x-2 space-x-1 mt-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-16 sm:h-12 h-10 rounded-lg shadow-md border-2 ${
              index === currentIndex
                ? "border-orange-500"
                : "border-transparent"
            }`}
            style={{
              backgroundImage: `url(${carouselImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;