import { IoIosArrowForward } from 'react-icons/io';

import phoneImg from 'assets/images/phone-image.png';

function PropertySection() {
  return (
    <div className='flex flex-col md:flex-row items-center mx-auto md:gap-8 pt-8'>
      {/* Left Text Section */}

      <div className='text-left mx-auto text-secondary font-primary'>
        <h1 className='text-3xl md:text-5xl font-bold  mb-4'>
          Lorem ipsum dolor sit amet <br /> consectetur Et purus blandit
        </h1>
        <p className='text-[#4D5461] mb-4 max-w-[400px]'>
          Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique lectus
          sit natoque eget mattis magna.
        </p>
        <p className='text-[##4D5461] font-semibold mb-6'>Have questions in mind?</p>
        <button className='flex-centered gap-2 bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600'>
          Ask <IoIosArrowForward />
        </button>
      </div>

      {/* Right Image Section */}
      <div className='flex-1 flex items-center justify-end mt-8 md:mt-0'>
        {/* Replace the div below with the actual image */}
        <div className='relative w-[300px] md:w-[400px] lg:w-[680px]'>
          {/* Add your right-side image here */}
          <img src={phoneImg} alt='Phone Mockup' className='w-full object-cover' />
        </div>
      </div>
    </div>
  );
}

export default PropertySection;
