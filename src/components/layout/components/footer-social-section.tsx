import { NavLink } from 'react-router-dom';

import { Divider } from 'antd';

import Container from 'components/core-ui/container/container';

import LogoIcon from 'assets/icons/h-logo-black.svg?react';

import { links, socialIcons } from './data';

function SocialFooterSection() {
  return (
    <div className='text-[#1C1C1E]'>
      <Container>
        <div className='flex items-center justify-start gap-12'>
          {/* <div className='flex-centered lg:gap-4 gap-2'> */}
          <div className='flex items-end justify-start text-end space-y-0 leading-none md:text-5xl text-2xl font-bold md:min-w-[400px]'>
            <span className='text-primary'>IVY</span>
            <LogoIcon className='text-primary md:h-[62px] h-[40px]' />
            OLD
          </div>
          <div className='flex-centered gap-6 font-primary text-lg'>
            {links?.map((d) => <NavLink to={d?.ref}>{d?.label}</NavLink>)}
          </div>
          <div className='flex items-center justify-end gap-4'>
            {socialIcons?.map((D, i) => (
              <span key={i} className='rounded-full border p-3'>
                {<D />}
              </span>
            ))}
          </div>
        </div>
      </Container>
      <Divider />
      <Container>
        <div className='flex-centered opacity-50 text-[#1C1C1E] text-lg pb-8 pt-2npm '>Copyright © 2024 IVYHOLD</div>
      </Container>
    </div>
  );
}

export default SocialFooterSection;
