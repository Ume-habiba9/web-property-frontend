import Button from 'components/core-ui/button/button';

import MailIcon from 'assets/icons/MailIcon.png';
import PeopleIcon from 'assets/icons/people.png';
import phoneIcon from 'assets/icons/phoneIcon.png';
import img1 from 'assets/images/Img(1).png';
import img2 from 'assets/images/Img(2).png';
import img from 'assets/images/Img.png';

function ConsultantsSection() {
  const ConsultantsData = [
    {
      id: 1,
      image: img,
      name: 'Wade Warren',
      designation: 'SalesPerson',
    },
    {
      id: 1,
      image: img1,
      name: 'Wade Warren',
      designation: 'SalesPerson',
    },
    {
      id: 1,
      image: img2,
      name: 'Wade Warren',
      designation: 'SalesPerson',
    },
  ];
  return (
    <section className='py-24 text-center'>
      <h2 className=' text-center font-primary text-5xl font-bold'>Meet the consultant</h2>
      <p className='py-6 text-[#8E8E93] font-primary'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
      </p>
      <div className='flex-centered flex-row gap-9 my-8'>
        {ConsultantsData.map((consultant) => (
          <div key={consultant.id}>
            <img src={consultant.image} alt='' />
            <div className='py-4 pr-2 flex justify-between'>
              <div className='p-2 text-start'>
                <p className='font-primary font-medium text-lg'>{consultant.name}</p>
                <p className='text-[#8E8E93] font-primary'>{consultant.designation}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={phoneIcon} alt='' />
                <img src={MailIcon} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=' w-[75%] mt-20 rounded-3xl mx-auto flex flex-row justify-between bg-[#FD1E2812] py-8 px-12'>
        <div className='flex align-center items-center space-x-4'>
          <img className='bg-white p-2 rounded-full' src={PeopleIcon} alt='' />
          <div className='p-2 leading-9 text-start'>
            <h2 className='font-medium text-2xl font-primary'>Let Expert realtors Guids you.</h2>
            <p className='font-primary text-[#8E8E93] text-base'>
              Don’t know where to start? Get an expert consultation!
            </p>
          </div>
        </div>
        <div className='flex-centered'>
          <Button variant='primary' className='text-lg font-medium font-primary rounded-lg  px-12 py-3'>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ConsultantsSection;
