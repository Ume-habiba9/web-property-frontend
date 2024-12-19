import { Divider } from 'antd';

import { realStateDate, sectors } from './data';
import HeadingFooter from './heading-footer';

function RealStateTypeFooterSection() {
  return (
    <div className='grid grid-cols-12 w-full mx-auto text-[#1C1C1E]  font-primary'>
      <div className='grid grid-cols-12 col-span-6'>
        <div className='w-full col-span-12 mb-4'>
          <HeadingFooter>Real Estate Types</HeadingFooter>
        </div>
        {realStateDate?.map((d) => (
          <div key={d?.key} className='col-span-6 mr-4'>
            <h2 className={` font-medium text-lg font-primary`}>{d?.type}</h2>
            <Divider className='my-4' />
            <div className='flex flex-col justify-center items-start gap-2 mt-3'>
              {d?.data.map((sub, i) => (
                <div key={i} className='w-full'>
                  <p className='font-primary font-light mt-1 '>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {sectors?.map((d, i) => (
        <div className='col-span-3 mx-4' key={d.key + i}>
          <div className=' mb-4'>
            <HeadingFooter>{d?.heading}</HeadingFooter>
          </div>
          {d?.data?.map((d, i) => (
            <div key={i} className={``}>
              <p className='py-2'>{d}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RealStateTypeFooterSection;
