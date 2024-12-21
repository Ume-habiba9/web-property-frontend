import { useEffect, useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import LogoIcon from 'assets/icons/h-logo-black.svg?react';

import Banner from './components/banner';
import { links } from './components/data';

// import BgImage from 'assets/images/bg-side.png';

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isDrawerOpen]);

  return (
    <div className='sticky top-0 z-50 shadow-md header-style'>
      <Banner />
      <div className='max-w-[1650px] mx-auto md:px-12 px-5 '>
        <header className='flex md:justify-evenly justify-between items-center py-6 gap-2'>
          <div className='flex-centered lg:gap-4 gap-2'>
            <div className='flex items-end justify-start text-end space-y-0 leading-none lg:text-2xl text-xl font-bold'>
              <span className='text-primary'>IVY</span>
              <LogoIcon className='text-primary lg:h-[40px] h-[30px]' />
              OLD
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex-centered lg:gap-10 gap-4'>
            <nav className='flex lg:space-x-7 space-x-2'>
              {links?.map((d) => (
                <a href={d.ref} className='hover:font-semibold font-primary'>
                  {d.label}
                </a>
              ))}
            </nav>
            <div className='flex-centered lg:gap-2 gap-1'>
              <button className='inline-flex items-center gap-2 justify-center bg-primary text-white lg:px-4 px-3 lg:py-2 py-2 rounded-full font-semibold lg:text-base text-sm'>
                <FaRegCircleUser />
                Login/Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className='md:hidden flex-centered gap-2'>
            <button onClick={toggleDrawer} aria-label='Open menu'>
              <MenuOutlined className='w-10 h-10' />
            </button>
          </div>

          {isDrawerOpen && (
            <div className='fixed inset-0 z-50 bg-[#000] dark:bg-opacity-100 bg-opacity-50 transition-opacity ease-in-out '>
              <div className='fixed top-0 left-0 w-full h-full  shadow-md transition-transform ease-in-out transform translate-x-0 px-5'>
                {/* Close button */}
                <div className='flex items-center justify-between py-6'>
                  <div className='flex-centered lg:gap-4 gap-2'>
                    <LogoIcon className='text-primary w-[48px] h-[40px]' />

                    <div className='lg:text-2xl text-xl font-bold'>aAgora</div>
                  </div>
                  <button onClick={toggleDrawer} aria-label='Close menu'>
                    <CloseOutlined className='w-10 h-10' />
                  </button>
                </div>
                {/* Navigation Links */}
                <nav className='flex flex-col space-y-6 pr-6 mt-4'>
                  {links?.map((d) => (
                    <a href={d.ref} className='flex justify-between items-center'>
                      {d.label}
                      {/* {theme === 'dark' ? <WhiteArrow /> : <BlackArrow />} */}
                    </a>
                  ))}
                </nav>
                {/* Launch dAPP button */}
                <div className='pr-6 mt-8'>
                  <button className='sm:w-[50%] w-[70%]  inline-flex items-center bg-primary text-white py-3 rounded-md font-semibold'>
                    <FaRegCircleUser />
                    Login/Register{' '}
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
