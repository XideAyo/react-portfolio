import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';
import ayo from '../images/AYO.png';
import code from '../images/code.png';
import design from '../images/design.png';
import { ProjectData } from '../slider/slideData';
import Slider from '../slider/Slider';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Contact from '../components/Contact';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      {' '}
      <div className='text-center p-8 py-10 text-poppins'>
        <h2 className='text-4xl py-2 text-teal-600 font-bold md:text-6xl '>
          Akinwale Ayomide
        </h2>
        <h3 className='text-xl py-2 md:text-3xl dark:text-white'>
          MERN Full-Stack Developer and UI/UX Designer
        </h3>
        <p className='text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
          I have a serious passion for building user-friendly and aesthetic web
          products.I am passionate about learning new technologies and design
          trends. I am interested in the entire web development spectrum and
          working on ambitious projects with positive people.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <AiFillGithub />
      </div>
      <div className='flex justify-center relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96'>
        <img src={ayo} alt='' className='object-cover object-center' />
      </div>
      <section>
        <div className='dark:text-white md:text-md max-w-2xl mx-auto text-poppins'>
          <AnimationOnScroll animateIn='animate__bounceIn'>
            <h3 className=' text-4xl md:text-5xl py-1 font-bold md:text-center mt-10 '>
              Services I Offer
            </h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn='animate__fadeInLeftBig'
            animateOut='animate__fadeInLeftBig'
          >
            <p className='text-lg py-2 leading-8 text-gray-80'>
              Since the beginning of my journey as a
              <span className='text-teal-500 font-semibold'> Developer</span>{' '}
              and
              <span className='text-teal-500 font-semibold'>
                {' '}
                a UI/UX Designer
              </span>
              , I have worked on a few projects and collaborated with talented
              people to create digital products for both business and consumer
              use
            </p>
            <p className='text-lg py-2 leading-8 text-gray-800 dark:text-white'>
              I offer a wide range of services incuding programming and teaching
            </p>
          </AnimationOnScroll>
        </div>
        <div className='lg:flex md:flex gap-10 overflow-hidden'>
          <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white md:w-2xl'>
            <img
              src={design}
              alt=''
              className='object-cover object-center w-24 h-24 mx-auto'
            />
            <h3 className='text-lg font-medium pt-8 pb-2'>UI/UX Designs</h3>
            <p className='py-2'>
              Creating UI Designs as well as User Experience that meets your
              needs
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Adobe Xd</p>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Adobe Photoshop</p>
          </div>
          <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white md:w-2xl'>
            <img
              src={code}
              alt=''
              className='object-cover object-center w-24 h-24 mx-auto'
            />
            <h3 className='text-lg font-medium pt-8 pb-2'>FrontEnd Web Dev</h3>
            <p className='py-2'>
              Creating aesthetic and responsive UI Interfaces while paying
              attention to every design details
            </p>
            <h4 className='py-4 text-teal-600'>FrontEnd Tools I use</h4>
            <p className='text-gray-800 py-1'>ReactJs</p>
            <p className='text-gray-800 py-1'>NextJs</p>
            <p className='text-gray-800 py-1'>Redux</p>
            <p className='text-gray-800 py-1'>ChakraUI</p>
            <p className='text-gray-800 py-1'>TailWindCss</p>
          </div>
          <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white md:w-2xl'>
            <img
              src={code}
              alt=''
              className='object-cover object-center w-24 h-24 mx-auto'
            />
            <h3 className='text-lg font-medium pt-8 pb-2'>BackEnd Wed Dev</h3>
            <p className='py-2'>
              Writing backend codes to power and develop functional web apps
            </p>
            <h4 className='py-4 text-teal-600'>BackEnd Tools I use</h4>
            <p className='text-gray-800 py-1'>ExpressJs</p>
            <p className='text-gray-800 py-1'>MongoDb</p>
            <p className='text-gray-800 py-1'>NodeJs</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <AnimationOnScroll animateIn='animate__bounceIn'>
            <h3 className='text-3xl py-1 font-bold dark:text-white md:text-center mt-10 '>
              Portfolio
            </h3>{' '}
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn='animate__fadeInLeftBig'
            animateOut='animate__fadeInLeftBig'
          >
            {' '}
            <p className='text-lg py-2 leading-8 text-gray-80 dark:text-white md:text-md max-w-2xl mx-auto'>
              Since the beginning of my journey as a
              <span className='text-teal-500 font-semibold'>Developer </span>{' '}
              and
              <span className='text-teal-500 font-semibold'>
                {' '}
                a UI/UX Designer
              </span>
              , I have worked on a few projects and collaborated with talented
              people to create digital products for both business and consumer
              use
            </p>
          </AnimationOnScroll>
        </div>
        <Slider slides={ProjectData} />
        <Testimonial />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
