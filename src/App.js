import { useState } from 'react';
import Home from './Pages/Home';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const cv = require('./assets/mycv2.pdf');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='h-screen'>
        <section className=' bg-white px-4 md:px-20 lg:px-40 dark:bg-gray-900 text-poppins'>
          <nav className='py-10 mb-12 flex justify-between px-5'>
            <h1 className='md:text-xl text-lg logo dark:text-white text-teal-600'>
              Akinwale
            </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer md:text-2xl text-lg dark:text-white'
                />
              </li>
              <li>
                <a
                  href={cv}
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <Home />
        </section>
      </main>
    </div>
  );
}

export default App;
