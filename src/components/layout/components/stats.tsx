import Container from 'components/core-ui/container/container';

import icon1 from 'assets/icons/Icon(1).png';
import icon2 from 'assets/icons/Icon(2).png';
import statsbg from 'assets/images/statsbg.svg';

const data = [
  {
    key: 1,
    image: icon1,
    heading: 'Meet your local luxury agent',
    text: 'Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique lectus .',
  },
  {
    key: 2,
    image: icon2,
    heading: 'Get Expert consultation',
    text: 'Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique lectus .',
  },
];

const stats = [
  {
    key: 1,
    stat: 7.4,
    text: 'Property Return Rate',
  },
  {
    key: 2,
    stat: 3856,
    text: 'Property in Sell & Rent',
  },
  {
    key: 3,
    stat: 2540,
    text: 'Daily Completed Transactions',
  },
];
function Stats() {
  // Hardcoded stats data

  const formatNumber = (num: number): string => num.toLocaleString('en-US');
  return (
    <div
      className='relative bg-cover bg-center py-20'
      style={{
        backgroundImage: `url(${statsbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <div className='flex flex-row gap-15 items-center justify-center'>
          <h2 className='font-bold text-5xl font-primary max-w-[50%]'>
            The highest level of service from IVYHOLD's best agents
          </h2>
          <p className='font-normal text-lg font-primary max-w-[30%] opacity-70 '>
            Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique
            lectus sit natoque eget mattis magna.
          </p>
        </div>
        <div className='flex-centered flex-row gap-8 py-16 mx-auto'>
          {data?.map((d) => (
            <div
              key={d?.key}
              className={`flex flex-row items-start text-start rounded-3xl gap-4 max-w-[500px]  px-6 py-8 ${d?.key === 1 ? 'border bg-white' : 'bg-primary text-white'} `}
            >
              <div>
                <img className='w-18' src={d?.image} alt='icon' />
              </div>
              <div className=''>
                <h3 className='font-bold text-xl font-primary'>{d?.heading}</h3>
                <p className={`font-primary mt-4 max-w-96 ${d?.key === 1 ? 'text-[#49494B]' : 'text-white'}`}>
                  {d?.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <section>
          <div className='grid grid-cols-3 divide-x-2 divide-black p-9 mt-8 text-center '>
            {stats?.map((d) => (
              <div key={d?.key} className=''>
                <p className='text-5xl font-bold font-primary'>{formatNumber(d?.stat)}%</p>
                <p className='font-primary'>{d?.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
export default Stats;
