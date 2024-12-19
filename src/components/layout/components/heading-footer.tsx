import React from 'react';

interface IProps {
  children: React.ReactNode;
}

function HeadingFooter({ children }: IProps) {
  return <h1 className='text-[#1C1C1E] text-2xl font-medium'>{children}</h1>;
}

export default HeadingFooter;
