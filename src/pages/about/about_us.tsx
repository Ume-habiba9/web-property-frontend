import Container from 'components/core-ui/container/container';
import BlogSection from 'components/layout/components/blog-section';
import ConsultantsSection from 'components/layout/components/consultants-section';
import NewsletterSection from 'components/layout/components/newsletter-section';

import aboutImg from 'assets/images/about2.png';

import Header from './components/header';
import OurValues from './components/ourvalues';
import QueriesSection from './components/queriesSection';
import Stats from './components/stats';

function AboutUs() {
  return (
    <div>
      <Header />
      <Container>
        <div className='py-9 mt-8 flex md:items-start items-center justify-center md:flex-row flex-col gap-9 lg:gap-0 lg: text-secondary'>
          <div className='flex flex-col md:items-start items-center md:justify-start justify-center gap-4 md:w-1/2 '>
            <h3 className='text-primary font-normal font-primary text-2xl '>~ WHO WE ARE</h3>
            <h1 className='font-bold md:text-5xl text-2xl mx-auto md:mx-0 font-primary md:max-w-[600px] max-w-[480px]'>
              For over 20 years, the founding members of IVYHOLD
            </h1>
            <img className='w-[420px]' src={aboutImg} alt='' />
          </div>

          <div>
            <OurValues />
          </div>
        </div>
      </Container>
      <Stats />
      <QueriesSection />
      <Container>
        <ConsultantsSection />
        <BlogSection />
        <NewsletterSection />
      </Container>
    </div>
  );
}
export default AboutUs;
