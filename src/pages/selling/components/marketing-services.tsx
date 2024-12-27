import marketingIcon1 from 'assets/images/marketingIcon1.png';
import marketingIcon2 from 'assets/images/marketingIcon2.png';
import marketingIcon3 from 'assets/images/marketingIcon3.png';
import marketingIcon4 from 'assets/images/marketingIcon4.png';
import marketingIcon5 from 'assets/images/marketingIcon5.png';
import MarketingImg from 'assets/images/marketingImg.png';

const MarketingBenefits = [
  {
    icon: marketingIcon1,
    title: 'Property Valuation',
    text: 'Accurate and market-driven property appraisals to set the best price and maximize your returns.',
  },
  {
    icon: marketingIcon2,
    title: 'Tailored Advertising',
    text: 'Multi-channel campaigns that leverage both digital and traditional platforms, designed to generate the best exposure.',
  },
  {
    icon: marketingIcon3,
    title: 'PR & Media',
    text: 'Access to top-tier media outlets and press contacts to gain high visibility for your property.',
  },
  {
    icon: marketingIcon4,
    title: 'Virtual & Physical Viewings',
    text: 'Flexible viewings tailored to your prospects’ preferences, including virtual tours and expertly managed in-person showings.',
  },
  {
    icon: marketingIcon5,
    title: 'Analytics & Reporting',
    text: 'Transparent, data-driven reporting to keep you informed about your property’s performance in the market.',
  },
];
function MarketingServices() {
  return (
    <div className=' p-9 m-11 flex flex-row ml-32 justify-start gap-28'>
      <div className='items-left h-[38rem] rounded-3xl max-w-[470px] bg-primary ml-18'>
        <p className='p-4 mt-9 text-white font-medium text-2xl'>Lorem ipsum dolor sit amet consectetur. </p>
        <button className=' my-4  mx-7 bg-white py-4 px-8 font-medium rounded-lg'>Lets Talk</button>
        <img className='rounded-3xl' src={MarketingImg} alt='' />
      </div>
      <div className='grid grid-cols-2 max-w-[670px] gap-x-20'>
        {MarketingBenefits.map((b) => (
          <div className='flex flex-col items-start gap-4 '>
            <img src={b.icon} alt='' />
            <h2 className='font-medium text-lg'>{b.title}</h2>
            <p className='opacity-[70%]'>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingServices;
