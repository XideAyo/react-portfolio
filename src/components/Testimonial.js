import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const testimony = [
    {
      person: 'Mr Adeleke Bright',
      title: 'BackEnd Developer , BigJara',
      comment:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae iusto amet',
    },
    {
      person: 'Mr Ifedayo ',
      title: 'BackEnd Developer , BigJara',
      comment:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae iusto amet',
    },
    {
      person: 'Mr Wale',
      title: 'BackEnd Developer , BigJara',
      comment:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae iusto amet',
    },
  ];

  return (
    <div>
      <h1 className='md:text-center text-3xl py-1 font-bold dark:text-white mt-10'>
        Testimonials
      </h1>
      <div className='test-section mt-5'>
        {testimony.map((test, index) => {
          return (
            <motion.div className='card' onClick={() => setIsOpen(!isOpen)}>
              <motion.h2>{test.person}</motion.h2>
              {isOpen && (
                <>
                  <motion.div>
                    <p>{test.title}</p>
                    <p>{test.comment}</p>
                  </motion.div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
