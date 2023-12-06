
import React, { useState } from 'react';
import Slider from 'react-slick';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ParallaxSlider.css';

const ParallaxSlider = ({ slides }) => {
  const [transitionSpeed, setTransitionSpeed] = useState(500); // Initial transition speed
  const [parallaxIntensity, setParallaxIntensity] = useState(20); // Initial parallax intensity

  const settings = {
    dots: true,
    infinite: true,
    speed: transitionSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleSpeedChange = (newSpeed) => {
    setTransitionSpeed(newSpeed);
  };

  const handleParallaxIntensityChange = (newIntensity) => {
    setParallaxIntensity(newIntensity);
  };

  return (
    <div>
      <div>
        <label htmlFor="transitionSpeed">Transition Speed:</label>
        <input
          type="range"
          id="transitionSpeed"
          name="transitionSpeed"
          min="100"
          max="2000"
          step="100"
          value={transitionSpeed}
          onChange={(e) => handleSpeedChange(Number(e.target.value))}
        />
        <span>{transitionSpeed} ms</span>
      </div>
      <div>
        <label htmlFor="parallaxIntensity">Parallax Intensity:</label>
        <input
          type="range"
          id="parallaxIntensity"
          name="parallaxIntensity"
          min="0"
          max="50"
          step="5"
          value={parallaxIntensity}
          onChange={(e) => handleParallaxIntensityChange(Number(e.target.value))}
        />
        <span>{parallaxIntensity}%</span>
      </div>
      <ParallaxProvider>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <Parallax y={[-parallaxIntensity, parallaxIntensity]} tagOuter="figure">
                <img className="parallax-image" src={slide.image} alt={`Slide ${index}`} />
              </Parallax>
              <div className="text-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </ParallaxProvider>
    </div>
  );
};

export default ParallaxSlider;


