import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';

function Banner() {
  return (
    <div className='bg-primary'>
      <div className='flex items-center justify-between text-white max-w-[1660px] mx-auto'>
        <div className='flex-centered gap-3 '>
          <CiLocationOn />
          <p>Plaza 97, abcd street, south west, ABC Country</p>
        </div>
        <div className='flex-centered gap-4'>
          <div className='flex-centered gap-3'>
            <AiOutlinePhone />
            <p>+123 456 78910</p>
          </div>
          <div className='flex-centered gap-3'>
            <IoMailOutline />
            <p>abcd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
