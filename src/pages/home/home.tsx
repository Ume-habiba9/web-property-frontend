import Container from 'components/core-ui/container/container';
import BlogSection from 'components/layout/components/blog-section';
import ConsultantsSection from 'components/layout/components/consultants-section';
import NewsletterSection from 'components/layout/components/newsletter-section';
import QueriesSection from 'components/layout/components/queriesSection';
import Stats from 'components/layout/components/stats';

// Import location icon
import heroImg1 from 'assets/images/hero1.png';
import heroImg2 from 'assets/images/hero2.png';
import heroImg3 from 'assets/images/hero3.png';

import PropertySection from './components/PropertySection';
import AvatarSection from './components/avatar-section';
import HeroSection from './components/hero-section';
import TouringSection from './components/touring-section';

const images = [heroImg1, heroImg2, heroImg3];

function Home() {
  return (
    <div>
      <HeroSection images={images} />
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
