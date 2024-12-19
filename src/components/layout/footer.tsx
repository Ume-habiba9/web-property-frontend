import Container from 'components/core-ui/container/container';

import AddressFooterSection from './components/address-footer';

export default function Footer() {
  return (
    <div className='bg-[#F4F6FA] pt-30'>
      <Container>
        <AddressFooterSection />
      </Container>
    </div>
  );
}
