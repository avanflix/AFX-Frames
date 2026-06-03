"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const videos = [
  "/videos/Video2.mp4",
  "/videos/Video1.mp4",
  "/videos/Video2.mp4",
  "/videos/Video1.mp4",
];

export default function HeroVideoSlider() {
  return (
    <section
      className="heroSlider"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        marginTop: "-70px",
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="heroSwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div
              className="slideWrapper"
              style={{
                width: "100%",
                height: "calc(100vh + 70px)",
              }}
            >
              <video
                className="heroVideo"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                  display: "block",
                }}
              >
                <source src={video} type="video/mp4" />
              </video>

              <div
                className="overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.45))",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}