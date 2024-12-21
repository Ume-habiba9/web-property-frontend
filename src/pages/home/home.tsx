import Container from 'components/core-ui/container/container';

import PropertySection from './components/PropertySection';
import AvatarSection from './components/avatar-section';
import HeroSection from './components/hero-section';

function Home() {
  return (
    <div>
      <HeroSection />
      <Container>
        <AvatarSection />
        <PropertySection />
      </Container>
    </div>
  );
}

export default Home;
