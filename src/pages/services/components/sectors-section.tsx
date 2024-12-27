import Container from 'components/core-ui/container/container';

const Sectors = [
  {
    id: 1,
    title: 'Hotels',
    text: 'we offer end-to-end investment and management solutions for hotel properties, ensuring maximized value, strategic market presence, and operational excellence. Our services include property acquisition, branding, operational management, and market positioning to boost performance and returns.',
  },
  {
    id: 2,
    title: 'Vineyards',
    text: 'Explore unique investment opportunities in vineyard properties, where we manage everything from the initial acquisition to operational oversight. We focus on developing high-value vineyard estates, incorporating sustainable practices and maximizing the potential of your investment.',
  },
  {
    id: 3,
    title: 'Land',
    text: 'Our land services cover strategic investments in undeveloped and partially developed land parcels, offering opportunities for future development or land banking.',
  },
  {
    id: 4,
    title: 'Shopping Malls',
    text: 'We provide tailored investment and management services for shopping mall properties, including tenant mix optimization, marketing strategies, and operational management to drive foot traffic and revenue.',
  },
  {
    id: 5,
    title: 'Agriculture',
    text: 'Invest in high-potential agricultural land with our expert guidance, from acquisition to sustainable farming management. We ensure optimal land use and long-term value creation.',
  },
  {
    id: 6,
    title: 'Retail',
    text: 'Our expertise in retail property investment and management includes market analysis, tenant relations, and asset enhancement, driving value and ensuring optimal occupancy rates. ',
  },
  {
    id: 7,
    title: 'Marinas',
    text: 'We offer specialized investment and operational services for marina properties, maximizing appeal for boat owners and visitors while ensuring profitability and effective management.',
  },
  {
    id: 8,
    title: 'Leisure & Tourism',
    text: 'Our services in the leisure and tourism sector span investment and development advisory, property management, and strategic marketing to capitalize on high-growth opportunities.',
  },
  {
    id: 9,
    title: 'Residential Investment & Development',
    text: 'We specialize in identifying and developing high-value residential properties, from luxury homes to large-scale residential communities, with a focus on quality, sustainability, and market demand.',
  },
  {
    id: 10,
    title: 'Restaurants',
    text: 'Our restaurant property services include investment advice, lease negotiation, and market analysis, helping you establish successful and profitable dining ventures.',
  },
  {
    id: 11,
    title: 'Branded Residencies',
    text: 'We guide you through the investment and development of branded residences, partnering with leading hospitality brands to create desirable properties that combine luxury living with world-class services and amenities.',
  },
  {
    id: 12,
    title: `Didn’t Find Anything?`,
    text: 'You can tell us what you need and we can help! ',
  },
];
function SectorsSection() {
  return (
    <div>
      <Container>
        <div className='py-6 flex flex-col gap-4 max-w-[70%] items-start'>
          <h2 className='font-bold text-5xl text-[#2B2B2B]'>Sectors</h2>
          <p className='opacity-[70%] font-normal text-xl'>
            Lorem ipsum dolor sit amet consectetur. Eu convallis amet mattis pulvinar odio felis mattis porttitor nisl.
            Quisque ac ultrices vel amet. Elit dolor eget nec aliquam nibh diam
          </p>
        </div>
        <div className=' py-9 mt-18  grid grid-cols-3 justify-center mx-auto items-center gap-9'>
          {Sectors?.map((sector) => (
            <div
              key={sector.id}
              className={`flex flex-col gap-2 px-8 py-11 mx-auto  h-[18rem] border-2 rounded-3xl ${sector?.id === 12 ? 'gap-5 text-center text-white bg-primary flex-centered' : ' hover:bg-[#24252CE5] hover:text-white'}`}
            >
              <h2 className='leading-9 font-primary text-2xl  font-semibold '>{sector.title}</h2>
              <p className='font-normal text-lg opacity-[70%] '>{sector.text}</p>
              {sector.id === 12 && (
                <button className='bg-white py-3 px-9 font-medium rounded-3xl text-black'>Let’s Talk</button>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SectorsSection;
