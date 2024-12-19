import { Divider } from 'antd';

import Container from 'components/core-ui/container/container';

import AddressFooterSection from './components/address-footer';
import SocialFooterSection from './components/footer-social-section';
import RealStateTypeFooterSection from './components/real-state-type-footer';

export default function Footer() {
  return (
    <footer className='bg-[#F4F6FA] pt-30'>
      <Container>
        <AddressFooterSection />
      </Container>
      <Divider className='my-18' />
      <Container>
        <RealStateTypeFooterSection />
      </Container>
      <Divider className='mt-18' />
      <SocialFooterSection />
    </footer>
  );
}
