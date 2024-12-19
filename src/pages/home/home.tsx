import InstaLogo from 'assets/icons/facebook.svg?react';
import FbLogo from 'assets/icons/insta.svg?react';
import LinkDinLogo from 'assets/icons/linkdin.svg?react';
import Logo from 'assets/icons/log.svg?react';
import bgImage from 'assets/images/Web.png';

function Home() {
  return (
    <div
      className='bg-black relative h-screen w-screen bg-cover bg-center flex flex-col items-center justify-between'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Logo Section */}
      <div className='mt-8 pt-16'>
        <Logo className='w-auto h-14' />
      </div>

      {/* Center Text Section */}
      <div className='flex flex-col items-center text-center -mt-8 text-white'>
        <p className='bg-banner py-2 md:px-8 sm:px-6 px-4 sm:text-lg text-sm md:text-[24px] mb-8'>
          A New Era Begins Soon
        </p>
        <h2 className='text-[32px] xsm:text-[40px] sm:text-5xl lg:text-10xl md:text-[70px] font-bold'>
          Watch This Space!
        </h2>
      </div>

      {/* Social Icons Section */}
      <div className='mb-8 flex flex-col items-center gap-6 text-white'>
        <p className='md:text-2xl text-base font-medium'>Global Real Estate & Investments</p>
        <div className='flex justify-center gap-4'>
          <a
            href='https://www.facebook.com/Ivyhold.official/'
            className='text-xl hover:text-gray-300'
            aria-label='Facebook'
            target='_blank'
          >
            <FbLogo />
          </a>
          <a
            href='https://www.linkedin.com/company/ivyhold'
            className='text-xl hover:text-gray-300'
            aria-label='LinkedIn'
            target='_blank'
          >
            <LinkDinLogo />
          </a>
          <a
            href='https://www.instagram.com/ivyhold_official/'
            className='text-xl hover:text-gray-300'
            aria-label='Instagram'
            target='_blank'
          >
            <InstaLogo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
