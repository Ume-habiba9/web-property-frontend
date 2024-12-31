import Container from 'components/core-ui/container/container';
import BlogSection from 'components/layout/components/blog-section';
import ConsultantsSection from 'components/layout/components/consultants-section';
import NewsletterSection from 'components/layout/components/newsletter-section';
import QueriesSection from 'components/layout/components/queriesSection';

import HeroSection from 'pages/home/components/hero-section';

import heroImg2 from 'assets/images/hero2.png';

import PropertySale from './components/property-rent';
import PropertyRent from './components/property-rent';
import PropertySearch from './components/property-search';
import FindServices from './components/find-services';
import SellWithUs from './components/sell-with-us';

const images = [heroImg2];

function FindTheRightProperty() {
  return (
    <div>
      <HeroSection images={images} />
      <Container>
        <PropertySale />
        <PropertyRent />
      </Container>
      <QueriesSection />
      <Container>
        <ConsultantsSection />
        <BlogSection limit={3} />
        <NewsletterSection />
      </Container>
      <PropertySearch />
      <FindServices />
      <SellWithUs />
    </div>
  );
}

export default FindTheRightProperty;
