/* eslint-disable @typescript-eslint/no-explicit-any */
const BlogItem = ({ id, itemPicture, title, content }: { id: any; itemPicture: any; title: any; content: any }) => {
  return (
    <div key={id} className='max-w-96 flex-centered flex-col'>
      <img className='w-full bg-transparent' src={itemPicture} />
      <div className='flex flex-col justify-start gap-2 align-start items-start px-4'>
        <h2 className=' text-start font-medium text-2xl secondary font-primary'>{title}</h2>
        <p className='text-start leading-5 text-[#8E8E93] font-primary'>{content}</p>
      </div>
    </div>
  );
};
export default BlogItem;
