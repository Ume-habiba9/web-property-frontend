import Container from 'components/core-ui/container/container';

import servicesbg from 'assets/images/servicesbg.png';

function HeroSection() {
  return (
    <div
      className='relative h-[85vh] w-full overflow-hidden flex items-center justify-center text-white bg'
      style={{
        backgroundImage: `url(${servicesbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className='flex mx-auto flex-col items-center justify-center align-center'>
          <h1 className='font-bold text-10xl font-primary '> Our Services</h1>
          <p className='text-2xl font-normal text-center mx-auto lg:px-[12rem] md:px-[19rem] sm:px-5 px-[12rem]'>
            Lorem ipsum dolor sit amet consectetur. Sit at nisl etiam diam pretium sagittis massa aliquam. Dignissim
            vivamus fermentum.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
