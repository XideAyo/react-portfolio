import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-dark py-6 text-poppins'>
      <div className='flex justify-center items-center text-white'>
        <div className='py-5'>
          <h2 className='text-center text-2xl md:text-3xl text-teal-600  font-bold'>
            Akinwale Ayomide
          </h2>
          <div className='flex justify-center items-center text-xl mt-4'>
            <p>Made with NextJs , TailWindCss and</p>
            <div className='ml-2'>
              <BsHeartFill className='text-red-600' />
            </div>
          </div>
          <div className='flex justify-center items-center text-md text-gray-500'>
            <div className='m-2'>
              <AiOutlineCopyright />
            </div>
            <p>{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
