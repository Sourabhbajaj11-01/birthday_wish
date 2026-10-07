"use client";

import React from "react";
import MarqueeAlongSvgPath from "../LineCmp";

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

// Local photos from /public/ref — resolve to /ref/*.jpg at runtime.
const imgs = [
  // First batch
  { src: "/ref/IMG-20261007-WA0015.jpg" },
  { src: "/ref/IMG-20261007-WA0016.jpg" },
  { src: "/ref/IMG-20261007-WA0018.jpg" },
  { src: "/ref/IMG-20261007-WA0027.jpg" },
  { src: "/ref/IMG-20261007-WA0031.jpg" },
  { src: "/ref/IMG-20261007-WA0033.jpg" },
  { src: "/ref/IMG-20261007-WA0034.jpg" },
  { src: "/ref/IMG-20261007-WA0035.jpg" },
  { src: "/ref/IMG-20261007-WA0036.jpg" },
  { src: "/ref/IMG-20261007-WA0037.jpg" },
  { src: "/ref/IMG-20261007-WA0040.jpg" },
  { src: "/ref/IMG-20261007-WA0045.jpg" },
  { src: "/ref/IMG_20261007_234329_490.jpg" },
  { src: "/ref/IMG_20261007_234331_926.jpg" },
  { src: "/ref/IMG_20260905_012729_153.jpg" },
  { src: "/ref/IMG_20260905_011945_586.jpg" },
  { src: "/ref/IMG_20260822_222429_096.jpg" },
  { src: "/ref/IMG_20260821_232045_974.jpg" },
  { src: "/ref/IMG_20260821_232011_220.jpg" },
  { src: "/ref/IMG_20260629_005714_488.jpg" },
  { src: "/ref/IMG_20260819_161208_139.jpg" },
  { src: "/ref/IMG_20260305_185622_686.jpg" },
  { src: "/ref/IMG_20260416_004531_904.jpg" },
  { src: "/ref/IMG_20260305_185559_533.jpg" },
  { src: "/ref/IMG_20260303_001003_334.jpg" },
  { src: "/ref/IMG_20260304_232520_303.jpg" },
  { src: "/ref/IMG_20260305_185554_434.jpg" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex min-h-screen w-full flex-col overflow-x-hidden bg-[#FAFAF7]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap");

        .hero-display {
          font-family: "Bricolage Grotesque", sans-serif;
        }
        .hero-body {
          font-family: "Work Sans", sans-serif;
        }
        .hero-mono {
          font-family: "JetBrains Mono", monospace;
        }
      `}</style>

      {/* Top row: quiet date stamp */}
      <div className="hero-mono flex items-center justify-between px-8 pt-8 text-[11px] uppercase tracking-[0.25em] text-[#8A8A80] sm:px-14">
        <span>Oct 8</span>
      </div>

      {/* Headline */}
      <div className="px-8 pt-16 sm:px-14 sm:pt-20">
        <h1 className="hero-display text-[15vw] leading-[0.86] tracking-tight text-[#14140F] sm:text-7xl lg:text-8xl">
          <span className="font-light">Happy</span>
          <br />
          <span className="font-bold">Birthday</span>
          <br/>
          <span className="font-bold mt-1 text-amber-500">Sejall 🎉</span>
        </h1>
        <div className="mt-6 h-px w-16 bg-[#9C7A3F]" />
        <p className="hero-body mt-6 max-w-sm text-base leading-relaxed text-[#4A4A42]">
          wishing you a day filled with love, laughter, and all the happiness your heart can hold. May this year bring you endless joy and unforgettable memories. Happy Birthday!
        </p>
      </div>

      {/* The trail */}
      <div className=" absolute top-50 left-1/2 mt-0 w-screen -rotate-10 -translate-x-1/2 ">
        <MarqueeAlongSvgPath
          path={path}
          viewBox="0 0 996 330"
          width="100%"
          height="300"
          baseVelocity={5}
          slowdownOnHover={true}
          draggable={true}
          repeat={2}
          dragSensitivity={0.08}
          dragVelocityDecay={0.98}
          slowDownFactor={0.05}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          className="w-full h-full"
          responsive
          grabCursor
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="h-14 w-14 overflow-hidden border border-[#14140F]/15 bg-[#14140F]/5 transition-transform duration-300 ease-out hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`Memory ${i + 1}`}
                className="h-full w-full object-cover grayscale transition-[filter] duration-300 ease-out hover:grayscale-0"
                draggable={false}
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>

      {/* Remaining space */}
      <div className="mt-auto flex items-center justify-between px-8 pb-8 sm:px-14">
        <div className="h-px flex-1 bg-[#14140F]/10" />
        <span className="hero-mono px-4 text-[10px] uppercase tracking-[0.25em] text-[#8A8A80]">
          Made for you
        </span>
      </div>
    </section>
  );
};
