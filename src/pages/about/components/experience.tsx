import { GoArrowRight } from 'react-icons/go';

import Button from 'components/core-ui/button/button';

import aboutUs from 'assets/images/home-about-us.png';

// import aboutUs from 'assets/images/about-us-home.png';

function Experience() {
  return (
    <div className='max-w-screen-4xl h-[75vh] mx-auto relative flex flex-col items-center justify-start'>
      <img src={aboutUs} alt='section-img' className='absolute right-0 bottom-0 w-full h-[650px] object-cover' />
      <div className='absolute max-w-screen-3xl bottom-28 left-0 p-8 w-[600px] text-white flex items-start justify-center flex-col '>
        <h1 className='text-[40px] font-primary font-bold mb-4'>Experience the IVYHOLD Difference</h1>
        <p className='mb-6 text-lg font-primary opacity-80'>
          When you choose IVYHOLD, you’re choosing a partner that values your vision and delivers results. Our approach
          combines local expertise, global reach, and a deep commitment to our clients’ success. No matter where you are
          or what your goals may be, IVYHOLD is here to help you make better property decisions and turn your
          aspirations into reality.
        </p>
        <Button className='bg-white rounded-full px-4 py-2 text-black flex-centered gap-2'>
          Contact Us
          <span className='bg-primary p-2 text-base text-white rounded-full'>
            <GoArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Experience;
