import { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

import Container from 'components/core-ui/container/container';

interface IProps {
  images: string[];
}

const searchTabs = [
  {
    key: 1,
    name: 'Rent',
  },
  {
    key: 2,
    name: 'Buy',
  },
  {
    key: 3,
    name: 'Sell',
  },
];

function HeroSection({ images }: IProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSearch, setSelectedSearch] = useState(1);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div
      className='relative h-[85vh] w-full overflow-hidden flex items-center justify-center text-white bg-hero-section'
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out',
      }}
    >
      {/* Overlay */}
      <Container>
        {/* <div className='absolute inset-0 bg-black bg-opacity-50'></div> */}

        {/* Content */}
        <div className='relative z-10 '>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-center'>
            Find The <br /> Right Property for You.
          </h1>
          <div className='inline-block items-start justify-start rounded-t-lg bg-black bg-opacity-50 '>
            {/* Tabs */}
            <div className='flex space-x-1 text-white'>
              {searchTabs.map((tab) => (
                <button
                  key={tab?.key}
                  onClick={() => setSelectedSearch(tab?.key)}
                  className={`py-3 px-6 ${tab?.key === selectedSearch ? 'bg-gradient-primary' : ''} rounded-t-lg hover:bg-primary`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className='bg-black bg-opacity-85 p-6 rounded-b-lg rounded-r-lg flex flex-col md:flex-row items-center justify-center text-white gap-4'>
            <div className='flex flex-col items-start border-r-2 pr-4'>
              <label className='text-sm opacity-50'>Location</label>
              <div className='relative w-full'>
                <select className='bg-black  appearance-none  pr-8 py-1 w-full border-none focus:outline-none'>
                  <option>Select Your City</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
                <FaMapMarkerAlt className='absolute right-0 top-1/2 transform -translate-y-1/2 ' />
              </div>
            </div>

            <div className='flex flex-col items-start border-r-2 px-4'>
              <label className='text-sm opacity-50'>Property Type</label>
              <select className='bg-black appearance-none py-1 w-full border-none focus:outline-none'>
                <option>Choose Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
              </select>
            </div>

            <div className='flex flex-col items-start px-4'>
              <label className='text-sm opacity-50'>Price Range</label>
              <select className='bg-black appearance-none py-1 w-full border-none focus:outline-none'>
                <option>Choose Price Range</option>
                <option>$500 - $1000</option>
                <option>$1000 - $2000</option>
                <option>$2000 - $3000</option>
              </select>
            </div>
            <button className='flex-centered ml-8 bg-gradient-primary text-white p-4 rounded-lg'>
              <FaSearch />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
