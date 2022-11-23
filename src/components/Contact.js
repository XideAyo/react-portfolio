import React, { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import Message from './Message';
import { AnimationOnScroll } from 'react-animation-on-scroll';

init('user_jP7z7MucxHV5VTn5fPFCZ');

const Contact = () => {
  const [formData, setformData] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
  });
  const [alert, setAlert] = useState('');
  const [variant, setVariant] = useState('');

  const { email, message, name, subject } = formData;

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_1vp1lkm', 'template_eevwce9', {
      subject: subject,
      name: name,
      email: email,
      message: message,
    });

    setTimeout(() => {
      setVariant('success');
      setAlert('Your message has successfully being sent.');
    }, 3000);
  };

  return (
    <div className='min-h-screen md:p-6 flex items-center justify-center text-poppins shadow-2xl dark:shadow-none'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <AnimationOnScroll animateIn='animate__bounceIn'>
            <h1 className='text-center dark:text-white text-gray-900 text-3xl m-10 font-bold '>
              Contact Me
            </h1>
          </AnimationOnScroll>

          <div className='bg-white rounded  p-4 md:px-4 md:p-8 md:mb-6'>
            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
              <div className='text-gray-600'>
                <p className='font-medium text-lg'>
                  Feel free to reach out to me
                </p>
                <p>I'd respond with the speed of light.</p>
                <Player
                  autoplay
                  loop
                  src='https://assets3.lottiefiles.com/packages/lf20_sxk2ofvv.json'
                  style={{ height: '250px', width: '250px' }}
                >
                  <Controls
                    visible={false}
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
                      name='name'
                      required
                      onChange={(e) => onChange(e)}
                      id='full_name'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value={name}
                      placholder='John Smith'
                    />
                  </div>

                  <div className='md:col-span-5'>
                    <label for='email'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      required
                      onChange={(e) => onChange(e)}
                      id='email'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      value={email}
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
                      required
                      onChange={(e) => onChange(e)}
                      className=' border mt-1 rounded px-4 w-full bg-gray-50'
                      value={message}
                    ></textarea>
                  </div>

                  <div className='md:col-span-5 text-right'>
                    <div className='inline-flex items-end'>
                      <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={sendEmail}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  {alert && <Message variant={variant}>{alert}</Message>}
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
