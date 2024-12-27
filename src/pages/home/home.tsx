import Container from 'components/core-ui/container/container';
import BlogSection from 'components/layout/components/blog-section';
import ConsultantsSection from 'components/layout/components/consultants-section';
import NewsletterSection from 'components/layout/components/newsletter-section';
import QueriesSection from 'components/layout/components/queriesSection';
import Stats from 'components/layout/components/stats';

import PropertySection from './components/PropertySection';
import AvatarSection from './components/avatar-section';
import HeroSection from './components/hero-section';
import TouringSection from './components/touring-section';

function Home() {
  return (
    <div>
      <HeroSection />
      <Container>
        <AvatarSection />
      </Container>
      <TouringSection />
      <Container>
        <PropertySection />
      </Container>
      <Stats />
      <QueriesSection />
      <Container>
        <ConsultantsSection />
        <BlogSection limit={3} />
        <NewsletterSection />
      </Container>
    </div>
  );
}

export default Home;
