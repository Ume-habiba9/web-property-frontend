const BlogItem = ({ id, itemPicture, title, content }: { id: any; itemPicture: any; title: any; content: any }) => {
    return (

        <div key={id} className='w-96 flex flex-col'>
            <img className='22 bg-transparent' 
               src={itemPicture} />
            <div className="flex flex-col justify-start gap-2 align-start items-start">
                <h2 className=" text-start font-medium text-2xl">{title}</h2>
                <p className='text-start leading-5 text-[#8E8E93]'>{content}</p>
                </div>
        </div>
    )
}
export default BlogItem