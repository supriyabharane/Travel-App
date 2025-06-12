"use client";
import React, { useRef, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineStopCircle } from "react-icons/md";
import { HiMiniPlay, HiMiniStop } from "react-icons/hi2";
const videos = [
  {
    id: 0,
    url: "https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4",
    thumbnail: "https://via.placeholder.com/600x400", // Replace with actual image URL
  },
  {
    id: 1,
    url: "https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4",
    thumbnail: "https://via.placeholder.com/600x400", // Replace with actual image URL
  },
  {
    id: 2,
    url: "https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4",
    thumbnail: "https://via.placeholder.com/600x400", // Replace with actual image URL
  },
  {
    id: 3,
    url: "https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4",
    thumbnail: "https://via.placeholder.com/600x400", // Replace with actual image URL
  },
];

export default function Gallery() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingVideos, setPlayingVideos] = useState({});

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      setPlayingVideos((prev) => ({ ...prev, [index]: true }));
    }
  };

  const handlePause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      setPlayingVideos((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <section className="sm:py-20 py-10 bg-gradient-to-r from-[#FF3131] to-[#FF914D]">
      <div className="max-w-7xl mx-auto sm:space-y-2.5 space-y-1 sm:px-0 px-4">
        <h1 className="text-4xl font-bold text-[#0A0A0A]">Our Gallery</h1>
        <p className="text-white sm:text-[16px] text-sm">
          Handpicked Getaways for Every Traveler
        </p>
        <div className="relative pt-10">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            className="coverflow max-w-7xl mx-auto"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id} className="mx-auto max-w-xl">
                <div className="relative group">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.url}
                    controls
                    className="w-full sm:h-[430px] h-[340px] object-cover rounded-xl"
                    // poster={video.thumbnail}
                    onPlay={() => setPlayingVideos((prev) => ({ ...prev, [index]: true }))}
                    onPause={() => setPlayingVideos((prev) => ({ ...prev, [index]: false }))}
                  />
                  {playingVideos[index] && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded-xl">
                      <button
                        onClick={() => handlePause(index)}
                        className="bg-white p-3 rounded-full shadow-lg text-orange-500 text-2xl hover:scale-110 transition-transform"
                      >
                        <HiMiniStop className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                  {!playingVideos[index] && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded-xl">
                      <button
                        onClick={() => handlePlay(index)}
                        className="bg-white p-3 rounded-full shadow-lg text-orange-500 text-2xl hover:scale-110 transition-transform"
                      >
                        <HiMiniPlay className="w-5 h-5"/>
                      </button>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button
            onClick={handlePrev}
            className="block absolute  sm:-left-8 -left-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white border-4 border-white sm:p-3 p-1.5 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-10"
          >
            <IoIosArrowRoundBack className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="block absolute   sm:-right-8 -right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white border-4 border-white sm:p-3 p-1.5 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-10"
          >
            <IoIosArrowRoundForward className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
