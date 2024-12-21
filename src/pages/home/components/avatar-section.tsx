import { FaCircleUser } from 'react-icons/fa6';

import { Avatar } from 'antd';

import partner1 from 'assets/images/partner1.png';
import partner2 from 'assets/images/partner2.png';
import userImage from 'assets/images/user.jpg';

const partners = [
  { key: '1', image: partner1 },
  { key: '2', image: partner2 },
  { key: '3', image: partner1 },
  { key: '4', image: partner2 },
];

const users = [
  {
    key: 1,
    src: userImage,
  },
  {
    key: 2,
    src: userImage,
  },
  {
    key: 3,
    src: userImage,
  },
  {
    key: 4,
    src: userImage,
  },
  {
    key: 5,
    src: userImage,
  },
  {
    key: 6,
    src: userImage,
  },
  {
    key: 7,
    src: userImage,
  },
];

function AvatarSection() {
  return (
    <div className='flex-centered flex-col py-12 gap-18 overflow-hidden'>
      <div className='flex-centered gap-10'>
        <div className='flex items-center justify-start gap-2 rounded-full shadow-md px-6 py-3 min-w-[280px]'>
          <Avatar.Group
            max={{
              count: 4,
              style: { color: '#fff', backgroundColor: '#000' },
            }}
          >
            {users?.map((user) => <Avatar key={user?.key} src={user?.src} />)}
            {/* <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar> */}
          </Avatar.Group>
          <p className='font-medium text-lg max-w-'>
            72k+ Happy <br /> Customers
          </p>
        </div>
        <div className='flex items-center justify-start gap-2 rounded-full shadow-md px-6 py-3 min-w-[280px]'>
          <Avatar size={42} icon={<FaCircleUser />} />
          <p className='font-medium text-lg max-w-'>
            100k+ Daily <br /> Activity
          </p>
        </div>
      </div>
      <div className='text-center space-y-2'>
        <h1 className='font-semibold font-primary text-2xl'>Partners</h1>
        <p className='text-[#808080] font-medium'>One of the leading and well known Companies across the globe! </p>
      </div>

      <div className='flex-centered gap-4'>
        {partners.map((partner) => (
          <img key={partner?.key} src={partner.image} alt='partner-log' className='w-72' />
        ))}
      </div>
    </div>
  );
}

export default AvatarSection;
