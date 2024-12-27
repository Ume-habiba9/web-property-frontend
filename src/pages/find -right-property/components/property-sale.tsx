import { FaChevronRight } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

import Button from 'components/core-ui/button/button';

import { saleData } from './data';

function PropertySale() {
  return (
    <div className='py-10'>
      <div className='text-[#2B2B2B] text-center max-w-[600px] mx-auto'>
        <h1 className='text-5xl  font-bold font-primary'>{saleData?.heading}</h1>
        <p className='font-primary opacity-70 my-2 '>{saleData?.subText}</p>
        <Button className='px-6 py-3 mt-6' suffixElement={<FaChevronRight />}>
          Don’t know where to start?
        </Button>
      </div>
      <div className='flex justify-end items-center my-12'>
        <Button
          className='bg-white rounded-full text-gray-500 border py-2 px-6 gap-1'
          suffixElement={<FaArrowRight className='px-0' />}
        >
          See all
        </Button>
      </div>
      <div className='grid grid-cols-12 gap-8'>
        {saleData?.data.map((d) => (
          <div key={d?.key} className='col-span-4 mx-auto '>
            {
              <div>
                <img src={d?.img} alt='img' className='max-w-96 h-96' />
                <div className='mt-6 font-primary text-[#2B2B2B] flex flex-col items-start justify-start gap-1'>
                  <h1 className='text-xl'>{d?.price}</h1>
                  <h1 className='font-semibold text-xl'>{d?.heading}</h1>
                  <p className='font-primary text-[##808080] text-sm'>{d?.info}</p>
                  <div className='flex gap-2 items-center justify-start '>
                    {d?.subInfo.map((info) => (
                      <div className='flex items-center justify-start gap-1 '>
                        {<info.icon className='w-5' />}
                        <p className='font-primary text-sm'>{info?.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertySale;
