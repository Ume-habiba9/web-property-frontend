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
        <div className='py-9 mt-8 flex items-start gap-9 md:gap-12 lg: text-secondary'>
          <div className='flex flex-col gap-4  '>
            <h3 className='text-primary font-normal font-primary text-2xl '>~ WHO WE ARE</h3>
            <h1 className='font-bold text-5xl  font-primary md:max-w-[600px]'>
              For over 20 years, the founding members of IVYHOLD
            </h1>
            <img className='w-96' src={aboutImg} alt='' />
          </div>

          <div>
            <OurValues />
          </div>
        </div>
      </Container>
      <Stats />
      <QueriesSection />
      <ConsultantsSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}
export default AboutUs;
