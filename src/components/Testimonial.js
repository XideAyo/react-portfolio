import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Testimonial = () => {
  const wale = require('../images/51683355.jpg');
  const dayo = require('../images/9945251.jpg');
  const bright = require('../images/1608347724475.jpg');

  return (
    <div>
      <section className='md:m-20 text-gray-700 dark:text-white'>
        <div className=' md:max-w-xl lg:max-w-3xl mx-auto md:m-10'>
          <AnimationOnScroll animateIn='animate__bounceIn'>
            <h3 className='text-3xl md:text-5xl py-1 font-bold md:text-center mt-10 mb-5 dark:text-white text-gray-900'>
              Testimonials
            </h3>
          </AnimationOnScroll>
        </div>

        <div className='grid md:grid-cols-3 gap-6 text-center mt-3'>
          <div>
            <div className='block rounded-lg shadow-lg bg-white'>
              <div
                className='overflow-hidden rounded-t-lg h-28'
                style={{ backgroundColor: '#9d789b' }}
              ></div>
              <div className='w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white'>
                <img src={wale} />
              </div>
              <div className='p-6 text-gray-800'>
                <h4 className='text-2xl font-semibold mb-4'>Afolabi Olawale</h4>
                <h4 className='text-md font-semibold mb-4'>
                  FrontEnd Developer, DuroNetworks
                </h4>
                <hr />
                <p className='mt-4 text-sm'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='w-6 pr-2 inline-block'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                  It's been a pleasure working with Ayo. I appreciate his
                  dedication to the projects we have worked on together
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='block rounded-lg shadow-lg bg-white'>
              <div
                className='overflow-hidden rounded-t-lg h-28'
                style={{ backgroundColor: '#7a81a8' }}
              ></div>
              <div className='w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white'>
                <img src={dayo} />
              </div>
              <div className='p-6 text-gray-800'>
                <h4 className='text-2xl font-semibold mb-4'>Onifade Adedayo</h4>
                <h4 className='text-md font-semibold mb-4'>
                  Product Lead, Elta Solutions
                </h4>
                <hr />
                <p className='mt-4 text-sm'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='w-6 pr-2 inline-block'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                  Ayo is a craftsman that tries his hands on new technologies to
                  achieve competences during my time working with him
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='block rounded-lg shadow-lg bg-white'>
              <div
                className='overflow-hidden rounded-t-lg h-28'
                style={{ backgroundColor: '#6d5b98' }}
              ></div>
              <div className='w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white'>
                <img src={bright} />
              </div>
              <div className='p-6 text-gray-800'>
                <h4 className='text-2xl font-semibold mb-4'>Adeleke Bright</h4>
                <h4 className='text-md font-semibold mb-4'>
                  Backend Engineer, MaonTech
                </h4>
                <hr />
                <p className='mt-4 text-sm'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='w-6 pr-2 inline-block'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                  Ayo pays attention to design details and delivers exactly what
                  i want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
