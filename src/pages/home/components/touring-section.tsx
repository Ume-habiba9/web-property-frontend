import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Divider } from 'antd';

import Container from 'components/core-ui/container/container';

import BedRedIcon from 'assets/icons/bedRedIcon.svg?react';
import HomeRedIcon from 'assets/icons/homeWhiteIcon.svg?react';
import LandSizeIcon from 'assets/icons/measureIconRED.svg?react';
import BathTubIcon from 'assets/icons/tubRedIcon.svg?react';
import arrowImg from 'assets/images/arrow.png';
import cardImg from 'assets/images/cardImg.png';
import dollarImg from 'assets/images/dollar.png';
import homeImg from 'assets/images/home.png';
import locationImg from 'assets/images/location.png';
import mainImg from 'assets/images/mainImg.png';

const iconsData = [
  {
    key: 1,
    icon: BedRedIcon,
    text: 4,
  },
  {
    key: 2,
    icon: BathTubIcon,
    text: 2,
  },
  {
    key: 3,
    icon: LandSizeIcon,
    text: '6x7.5 m²',
  },
];

const tabs = [
  {
    key: '1',
    text: 'Buy',
  },
  {
    key: '2',
    text: 'Sell',
  },
  {
    key: '3',
    text: 'Rent',
  },
];

const propertyFeatures = [
  {
    key: 1,
    icon: homeImg,
    heading: 'Property Insurance',
    text: 'Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla ',
  },
  {
    key: 2,
    icon: dollarImg,
    heading: 'Best Price',
    text: 'Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere.',
  },
  {
    key: 3,
    icon: arrowImg,
    heading: 'Lowest Commission',
    text: 'Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla ',
  },
  {
    key: 4,
    icon: locationImg,
    heading: 'Overall Control',
    text: 'Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. ',
  },
];
function TouringSection() {
  const [selectedTab, setSelectedTab] = useState('1');
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
  };
  return (
    <div className='bg-[#F4F6FA] py-20'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-secondary font-primary'>
          {/* Left Section */}
          <div className='relative max-w-[55%] mx-auto'>
            <img src={mainImg} alt='Main Property' className='rounded-xl shadow-lg w-full' />
            {/* Floating Info Card */}
            <div className='absolute top-16 -left-20 bg-white rounded-lg shadow-xl px-6 py-5 md:w-[330px]'>
              <div className='relative w-full'>
                <p className='text-lg font-bold font-primary'>Find the best deal</p>
                <p className='text-[#4D5461] mt-1 font-primary'>Browse thousands of properties</p>
              </div>
              <div className='p-2 border border-[##E0DEF7] bg-[#F81E28] rounded-full absolute -top-[25%] right-6 '>
                {/* Mock Icon */}
                <HomeRedIcon className='w-8 h-8' />
              </div>
            </div>
            {/* Floating Card at Bottom */}
            <div className='absolute -bottom-[15%] -right-28 bg-white rounded-lg shadow-2xl w-72'>
              <img src={cardImg} alt='Property Thumbnail' className='w-full h-36 rounded-md object-cover mr-4' />
              <div className='p-4 flex items-start justify-center flex-col gap-1 '>
                <p className='text-primary text-lg font-semibold font-primary'>
                  $2,700 <span className='text-secondary opacity-50 font-normal text-base'>/month</span>
                </p>
                <p className='font-bold font-secondary text-lg'>Beverly Springfield</p>
                <p className='text-base opacity-50 font-primary'>2821 Lake Sevilla, Palm Harbor, TX</p>
                <Divider className='my-1' />
                <div className='flex items-center text-gray-500 text-sm mt-2'>
                  {iconsData?.map((d) => (
                    <div key={d?.key} className='mr-4 flex items-center justify-start gap-2'>
                      <d.icon /> {d?.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className='inline-flex rounded-full items-center bg-white  p-1 mb-6'>
              {tabs?.map((tab) => (
                <button
                  key={tab?.key}
                  className={`${tab?.key === selectedTab ? 'bg-primary text-white' : 'text-[#6C727F]'}  py-3 px-16 rounded-full font-primary text-lg`}
                  onClick={() => handleTabChange(tab?.key)}
                >
                  {tab?.text}
                </button>
              ))}
            </div>
            <div className='max-w-[450px]'>
              <h2 className='text-[44px] font-bold font-primary mb-4'>Start touring homes, no strings attached</h2>
              <p className='text-[#6C727F] mb-6 font-primary'>
                Unlike many other agents, Ivyhold agents won’t ask you to sign an exclusive commitment before they’ll
                take you on a first tour.
              </p>
            </div>
            <button className='flex-centered gap-1 bg-primary font-primary text-white py-3 px-6 rounded-xl font-semibold'>
              Search For Homes
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className='mt-24 flex-centered py-12 gap-8'>
          {propertyFeatures?.map((d) => (
            <div key={d?.key} className='flex items-start justify-center gap-4 flex-col'>
              <img src={d?.icon} alt='logo' className='w-20' />
              <h1 className='font-primary text-xl font-bold'>{d?.heading}</h1>
              <p className='font-primary text-[#4D5461]'>{d?.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TouringSection;
