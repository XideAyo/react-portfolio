import React, { useState } from 'react';
import { ProjectData } from './slideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className=''>
      <section className='slider' id='projects'>
        <FaArrowAltCircleLeft
          className='left-arrow  text-teal-600'
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className='right-arrow text-teal-600'
          onClick={nextSlide}
        />
        {ProjectData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide-active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div className='flex-slider'>
                  <div className='project-card dark:bg-white bg-black'>
                    <img src={slide.image} className='image' />
                    <div className='project-title dark:text-black text-white font-bold text-center text-md'>
                      {slide.title}
                    </div>
                    <div className='project-description dark:text-black text-white font-semibold'>
                      {slide.description}
                    </div>
                    <div className='project-tech'>
                      Technologies used
                      <div className='line'>
                        <div className='green2'></div>
                      </div>
                      {slide.technologies.map((tech, index) => {
                        return (
                          <p
                            className='project-tech dark:text-black text-white'
                            key={tech}
                          >
                            {tech}
                          </p>
                        );
                      })}
                    </div>
                    <div className='project-links'>
                      <a href={slide.code} target='_blank' className='link'>
                        See Code
                      </a>
                      <a href={slide.visit} target='_blank' className='link2'>
                        Visit Now
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Slider;
