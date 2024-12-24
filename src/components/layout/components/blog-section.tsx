import { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from 'assets/images/image(1).png'
import image2 from 'assets/images/image(2).png'
import image3 from 'assets/images/image(3).png'
import arrow from 'assets/icons/arrow.png'
import BlogItem from './blog-item'
import SingleArticle from 'pages/blogs/components/single-article'
import { Pagination } from 'antd'
type BlogSectionProps = {
    limit?: number;
}
function BlogSection({ limit }: BlogSectionProps) {

    const Blogs = [
        {
            id: 1,
            itemPicture: image1,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        },
        {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        },
        {
            id: 3,
            itemPicture: image3,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        },
        {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        },
        {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }, {
            id: 2,
            itemPicture: image2,
            title: "How to Stage Your Home for a Quick Sale",
            content: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        }
    ]
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
    const displayedBlogs = limit ? Blogs.slice(0, limit) : Blogs
    return (
        <section className=' py-11 text-center flex flex-col gap-2'>
            <p className='text-2xl font-medium'>WHAT’S TRENDING</p>
            <h2 className='font-bold text-5xl'>Latest Blogs & Posts</h2>

            <div className='flex justify-end mr-[18%]'>
                {
                    displayedBlogs.length < 4 &&
                    <Link to='/blogs' >
                        <button className='border-2 border-[#8E8E93] rounded-full py-3 px-6 flex gap-2 text-[#8E8E93]'>
                            See all
                            <img src={arrow} alt="" />
                        </button>
                    </Link>
                }
            </div>
            <div className=' pb-9 grid grid-cols-3 justify-center mx-auto items-center'>
                {
                    displayedBlogs.map((item) => (
                        <div key={item.id} onClick={() => handleBlogClick(item)}>
                            <BlogItem id={item.id} title={item.title} content={item.content} itemPicture={item.itemPicture} />
                        </div>
                    ))
                }
            </div>
            {
                displayedBlogs.length > 6 &&
                <Pagination align='center' total={50} pageSize={6} />
            }
        </section>
    )
}
export default BlogSection