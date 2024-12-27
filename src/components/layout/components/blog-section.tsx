/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Pagination } from 'antd';

import SingleArticle from 'pages/blogs/components/single-article';

import arrow from 'assets/icons/arrow.png';
import image1 from 'assets/images/image(1).png';
import image2 from 'assets/images/image(2).png';
import image3 from 'assets/images/image(3).png';

import BlogItem from './blog-item';

type BlogSectionProps = {
  limit?: number;
};
function BlogSection({ limit }: BlogSectionProps) {
  const Blogs = [
    {
      id: 1,
      itemPicture: image1,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 3,
      itemPicture: image3,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
    {
      id: 2,
      itemPicture: image2,
      title: 'How to Stage Your Home for a Quick Sale',
      content: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    },
  ];
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const handleBlogClick = (blog: any) => {
    setSelectedBlog(blog);
  };

  const goBackToList = () => {
    setSelectedBlog(null);
  };
  if (selectedBlog) {
    return <SingleArticle goBack={goBackToList} />;
  }
  const displayedBlogs = limit ? Blogs.slice(0, limit) : Blogs;
  return (
    <section className=' py-10 text-center flex flex-col gap-2'>
      <p className='text-xl font-primary uppercase tracking-widest font-medium'>WHAT’S TRENDING</p>
      <h2 className='font-bold font-primary text-5xl'>Latest Blogs & Posts</h2>

      <div className='flex items-center justify-end mr-[18%]'>
        {displayedBlogs.length < 4 && (
          <Link to='/blogs'>
            <button className='border border-[#8E8E93] rounded-full py-2 px-4 text-base flex-centered gap-2 text-[#8E8E93]'>
              See all
              <img src={arrow} alt='arrow' className='w-3 h-3' />
            </button>
          </Link>
        )}
      </div>
      <div className=' pb-9 grid grid-cols-3 justify-center mx-auto items-center'>
        {displayedBlogs.map((item) => (
          <div key={item.id} onClick={() => handleBlogClick(item)}>
            <BlogItem id={item.id} title={item.title} content={item.content} itemPicture={item.itemPicture} />
          </div>
        ))}
      </div>
      {displayedBlogs.length > 6 && <Pagination align='center' total={50} pageSize={6} />}
    </section>
  );
}
export default BlogSection;
