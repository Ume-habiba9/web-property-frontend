import HeroSection from 'pages/home/components/hero-section';

import heroImg2 from 'assets/images/hero2.png';

const images = [heroImg2];

function FindTheRightProperty() {
  return (
    <div>
      <HeroSection images={images} />
    </div>
  );
}

export default FindTheRightProperty;
