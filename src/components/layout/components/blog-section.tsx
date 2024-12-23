import image1 from 'assets/images/image(1).png'
import image2 from 'assets/images/image(2).png'
import image3 from 'assets/images/image(3).png'
import BlogItem from './blog-item'
function BlogSection() {
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
    ]
    return (
        <section className=' py-11 text-center flex flex-col gap-2 items-center'>
            <p className='text-2xl font-medium'>WHAT’S TRENDING</p>
            <h2 className='font-bold text-5xl'>Latest Blogs & Posts</h2>
            <div className=' py-9 flex flex-row gap-9 items-center'>
                {
                    Blogs.map((item) => (
                        <BlogItem id={item.id} title={item.title} content={item.content} itemPicture={item.itemPicture} />
                    ))

                }
            </div>

        </section>
    )
}
export default BlogSection