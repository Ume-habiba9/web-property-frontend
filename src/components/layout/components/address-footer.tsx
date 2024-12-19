import { Divider } from 'antd';

import { contactUsData, officeData, stateData1 } from './data';
import HeadingFooter from './heading-footer';

function AddressFooterSection() {
  return (
    <div className='grid grid-cols-12 w-full text-[#1C1C1E]  font-primary'>
      <div className='grid grid-cols-12 col-span-6'>
        <div className='col-span-6 mr-4'>
          <HeadingFooter>{officeData?.heading}</HeadingFooter>
          <div className='flex flex-col justify-center items-start gap-2 mt-3'>
            {officeData?.sub.map((sub) => (
              <div key={sub?.key} className='w-full'>
                <h2 className={`${sub?.key === 1 ? 'opacity-50' : ''} font-medium text-lg`}>{sub?.subHeading}</h2>
                <p className='font-primary font-normal w-[300px] mt-1 '>{sub?.address}</p>
                {sub.key !== 3 && <Divider className='w-full' />}
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-6 mx-4'>
          <HeadingFooter>{contactUsData?.heading}</HeadingFooter>
          <div className='w-full flex flex-col items-start justify-center mt-3  '>
            {contactUsData?.sub.map((sub) => (
              <>
                <div key={sub?.key} className='flex-centered gap-3'>
                  <div>
                    <sub.icon />
                  </div>
                  <div>
                    <h2 className='opacity-50'>{sub.subHeading}</h2>
                    <p className='font-primary'>{sub.address}</p>
                  </div>
                </div>
                {sub.key !== 3 && <Divider className='w-full' />}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className='col-span-3 mx-4'>
        {stateData1?.map((d) => (
          <div key={d?.key} className={`${d.key === '2' ? 'mt-8' : ''}`}>
            <HeadingFooter>{d?.heading}</HeadingFooter>
            {d?.points.map((p, i) => (
              <p key={i} className='py-2'>
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddressFooterSection;
