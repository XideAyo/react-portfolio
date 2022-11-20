import { useState } from 'react';
import Home from './Pages/Home';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 text-poppins'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl logo dark:text-white text-teal-600'>
              Akinwale
            </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl dark:text-white'
                />
              </li>
              <li>
                <a
                  href='#'
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
      <Footer />
    </div>
  );
}

export default App;
