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
    <section className='p-9 text-center'>
      <h2 className=' text-center  text-5xl font-bold'>Meet the consultant</h2>
      <p className='py-4 text-[#8E8E93] font-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
      </p>
      <div className='flex flex-row items-center justify-center gap-9 my-4'>
        {ConsultantsData.map((consultant) => (
          <div key={consultant.id}>
            <img src={consultant.image} alt='' />
            <div className='py-3 flex justify-between'>
              <div className='p-2'>
                <p>{consultant.name}</p>
                <p className='text-[#8E8E93]'>{consultant.designation}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={phoneIcon} alt='' />
                <img src={MailIcon} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=' w-[75%] rounded-3xl mx-auto flex flex-row align-center justify-between bg-[#FD1E2812] p-7'>
        <div className='flex align-center items-center space-x-4'>
          <img className='bg-white p-2 rounded-full' src={PeopleIcon} alt='' />
          <div className='p-2 leading-9 text-start'>
            <h2 className='font-medium text-2xl'>Let Expert realtors Guids you.</h2>
            <p className='text-[#8E8E93] text-lg'>Don’t know where to start? Get an expert consultation!</p>
          </div>
        </div>
        <button className='bg-primary text-white md:text-xl font-normal px-11  rounded-lg md:font-medium  text-sm'>
          Contact Us
        </button>
      </div>
    </section>
  );
}
export default ConsultantsSection;
