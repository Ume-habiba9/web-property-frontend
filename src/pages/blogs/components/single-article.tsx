import profileIcon from 'assets/icons/Image(1).png'
import blogImg from 'assets/images/blogimg.png'

interface SingleArticleProps {
    goBack: () => void;
}
const SingleArticle: React.FC<SingleArticleProps> = ({ goBack }) => {
    return (
        <div>
            <div className="flex text-left flex-col p-9 gap-4">
                <div className='flex justify-between gap-3'>
                    <p className="w-32 bg-[#FD1E2830] py-3 px-6 rounded-full">Real Estate</p >
                    <button onClick={goBack} className='border-2 border-[#8E8E93] rounded-full py-3 px-6 flex gap-2 text-[#8E8E93]'>
                        Go Back
                    </button>
                </div>
                <h2 className="font-primary text-5xl">Lorem ipsum dolor sit amet</h2>
                <div className='flex items-center gap-3'>
                    <img src={profileIcon} alt="" />
                    <p className="text-[#696A75] font-primary text-base">Tracey Wilson</p>
                    <p className='text-[#696A75] font-primary text-base'>August 20, 2022</p>
                </div>
                <img src={blogImg} alt="" />
                <div className='mx-48 py-11 align-center font-primary text-[#3B3C4A] flex flex-col text-left text-xl gap-3'>
                    <p className='pb-9 leading-7'>Lorem ipsum dolor sit amet consectetur. Aenean gravida nec magna et habitant lorem integer eget. Eget elit diam blandit mattis porttitor neque eget nisl. Facilisis eu et sit venenatis massa eu neque sit. Risus et at tristique facilisi faucibus volutpat viverra mi. A sed massa at scelerisque in sed. Massa tellus enim elementum ac maecenas lacus quam vitae mi. Ullamcorper sem vulputate diam lacus rhoncus. Lectus elit orci accumsan mus nulla fermentum in. Commodo eu dis at habitant dui vitae.\ </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Aenean gravida nec magna et habitant lorem integer eget. Eget elit diam blandit mattis porttitor neque eget nisl. Facilisis eu et sit venenatis massa eu neque sit. Risus et at tristique facilisi faucibus volutpat viverra mi. A sed massa at scelerisque in sed. Massa tellus enim elementum ac maecenas lacus quam vitae mi. Ullamcorper sem vulputate diam lacus rhoncus. Lectus elit orci accumsan mus nulla fermentum in. Commodo eu dis at habitant dui vitae.</p>
                    <h2 className='font-bold text-2xl font-primary text-start'>Lorem ipsum dolor sit amet </h2>
                    <p className='pb-9 leading-7'>Lorem ipsum dolor sit amet consectetur. Aenean gravida nec magna et habitant lorem integer eget. Eget elit diam blandit mattis porttitor neque eget nisl. Facilisis eu et sit venenatis massa eu neque sit. Risus et at tristique facilisi faucibus volutpat viverra mi. A sed massa at scelerisque in sed. Massa tellus enim elementum ac maecenas lacus quam vitae mi. Ullamcorper sem vulputate diam lacus rhoncus. Lectus elit orci accumsan mus nulla fermentum in. Commodo eu dis at habitant dui vitae.</p>
                    <h2 className='font-bold text-2xl font-primary text-left'>Lorem ipsum dolor sit amet </h2>
                    <p className='pb-9 leading-7'>Lorem ipsum dolor sit amet consectetur. Aenean gravida nec magna et habitant lorem integer eget. Eget elit diam blandit mattis porttitor neque eget nisl. Facilisis eu et sit venenatis massa eu neque sit. Risus et at tristique facilisi faucibus volutpat viverra mi. A sed massa at scelerisque in sed. Massa tellus enim elementum ac maecenas lacus quam vitae mi. Ullamcorper sem vulputate diam lacus rhoncus. Lectus elit orci accumsan mus nulla fermentum in. Commodo eu dis at habitant dui vitae.\
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Aenean gravida nec magna et habitant lorem integer eget. Eget elit diam blandit mattis porttitor neque eget nisl. Facilisis eu et sit venenatis massa eu neque sit. Risus et at tristique facilisi faucibus volutpat viverra mi. A sed massa at scelerisque in sed. Massa tellus enim elementum ac maecenas lacus quam vitae mi. Ullamcorper sem vulputate diam lacus rhoncus. Lectus elit orci accumsan mus nulla fermentum in. Commodo eu dis at habitant dui vitae.</p>
                    <h3 className='rounded-md font-tertiary italic bg-[#F6F6F7] px-11 py-6'>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</h3>
                </div>
            </div>
        </div>
    )
}
export default SingleArticle