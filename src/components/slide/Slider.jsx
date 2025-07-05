import React from "react";
import "./slide.css";
import { useState } from "react";
import { useEffect } from "react";
const images = [
  { src: "../../src/assets/slide1.jpg", alt: "슬라이드 1" },
  { src: "../../src/assets/slide2.jpg", alt: "슬라이드 2" },
  { src: "../../src/assets/slide3.jpg", alt: "슬라이드 3" },
];
const Slider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="slides">
        <div 
            className="slide-container"
            style={{transform : `translateX(-${currentIdx * 100}vw)`}}
        >
        {images.map((img, index) => (
            <div
            className={`slide ${index === currentIdx ? "active" : ""}`}
            key={index}
            >
            <a href="#">
                <img src={img.src} alt={img.alt || `slide-${index}`} />
            </a>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Slider;
