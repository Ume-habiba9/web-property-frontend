import { Button, Input, Space } from 'antd';

function NewsletterSection() {
  return (
    <section className='pb-36 flex flex-col items-center gap-6 justify-center'>
      <h2 className='text-5xl font-semibold font-primary'>Subscribe to Our News Letter</h2>
      <p className=' text-[#9EA3AE] font-primary'>
        Join <span className='text-primary font-semi-bold'>10,000+</span> other landlords in our estatery community.
      </p>
      <Space className='text-center align-center' direction='horizontal' size='large'>
        <div className=' flex justify-between  items-center px-11 rounded-3xl gap-x-48 bg-[#F2F2F3]'>
          <Input
            placeholder='Enter your email address'
            variant='borderless'
            style={{
              background: 'transparent',
              color: '#1C1C1E',
            }}
            className='placeholder-[#8E8E93] py-9 bg-transparent flex-1 h-[40px] rounded-md text-lg  bg-white'
          />
          <Button
            type='primary'
            className='bg-primary hover:bg-primary active:bg-primary hover:border-red-600 text-white font-semibold px-9 py-5 text-sm  rounded-xl'
          >
            Subscribe
          </Button>
        </div>
      </Space>
    </section>
  );
}
export default NewsletterSection;
