import bgImage from 'assets/images/about-header.jpg';

function Header() {
  return (
    <div
      className='relative h-screen w-screen bg-cover bg-center flex-centered flex-col '
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(36, 37, 44, 0.79) 0%, rgba(36, 37, 44, 0.79) 100%),url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='text-center text-white gap-4 max-w-[780px]'>
        <h1 className='align-center font-bold text-10xl'>IVYHOLD</h1>
        <p className='text-center font-normal text-lg  my-6 '>
          the founding members of IVYHOLD have been committed to empowering individuals, families, and businesses
          through exceptional real estate and investment opportunities.
        </p>
        <button className='inline-flex items-center gap-2 justify-center bg-primary text-white lg:px-4 px-3 lg:py-2 py-2 rounded-lg font-medium lg:text-base text-sm'>
          Have Questions In Mind?
        </button>
      </div>
    </div>
  );
}
export default Header;
