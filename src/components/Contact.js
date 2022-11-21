import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Contact = () => {
  const ayo = require('../images/AYO.png');
  return (
    <div className='min-h-screen p-6 flex items-center justify-center text-poppins'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <div className='bg-white rounded shadow-xl p-4 px-4 md:p-8 mb-6'>
            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
              <div className='text-gray-600'>
                <p className='font-medium text-xl'>Contact Me</p>
                <p>Contact me for all enquires.</p>
                <Player
                  autoplay
                  loop
                  src='https://assets3.lottiefiles.com/packages/lf20_sxk2ofvv.json'
                  style={{ height: '300px', width: '300px' }}
                >
                  <Controls
                    visible={true}
                    buttons={['play', 'repeat', 'frame', 'debug']}
                  />
                </Player>
              </div>
              <div className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                  <div className='md:col-span-5'>
                    <label for='full_name'>Full Name</label>
                    <input
                      type='text'
                      name='full_name'
                      id='full_name'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                    />
                  </div>

                  <div className='md:col-span-5'>
                    <label for='email'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value=''
                      placeholder='email@domain.com'
                    />
                  </div>
                  <div className='md:col-span-5'>
                    <label for='email'>Your Message</label>
                    <textarea
                      name='message'
                      id=''
                      cols='10'
                      rows='5'
                      className=' border mt-1 rounded px-4 w-full bg-gray-50'
                    ></textarea>
                  </div>

                  <div className='md:col-span-5 text-right'>
                    <div className='inline-flex items-end'>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
