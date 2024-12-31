import { Divider, Button } from 'antd';
import { FaArrowRight } from 'react-icons/fa6';
import { realStateDate } from '../../../components/layout/components/data';
import SignupSection from './signup-section';
function PropertySearch() {
    return (
        <div className="mx-auto p-11">
            <div className="flex flex-col gap-9 mx-auto max-w-[80%] p-7 items-start">
                <h2 className=" text-5xl font-bold ">
                    Buy/Sell or Rent
                </h2>
                <Divider />
                <div className="flex flex-row gap-60 items-start">
                    <div className="flex flex-col gap-3 max-w-[460px] items-start">
                        <h2 className="font-semibold text-xl">Find the right property</h2>
                        <p className="opacity-[70%]">At IVYHOLD, we understand that finding the perfect property is more than just a search—it’s about discovering a place to create memories, build your future, and call home.</p>
                        <button className="text-primary">
                            See more
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 max-w-[460px] items-start">
                        <h2 className="font-semibold text-xl">Not sure where to start?</h2>
                        <p className="opacity-[70%]">Speak with one of our experts today—no obligations, just solutions. Let us show you how we can deliver the best results tailored to your needs.
                            Have a property to sell and not sure how much it's worth?
                        </p>
                        <button className="text-primary">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 mx-auto  max-w-[80%] p-7 items-left">
                <div className="w-full border-b border-[#C9C9C9] py-7">
                    <h2 className=" text-5xl font-bold ">
                        Real Estate Types
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-x-40 ">
                    <div className='grid grid-cols-12 gap-x-9'>
                        {realStateDate?.map((d) => (
                            <div key={d?.key} className='col-span-6 mr-4'>
                                <h2 className={` font-medium  text-lg font-primary`}>{d?.type}</h2>
                                <div className='flex flex-col  justify-center items-start gap-2 mt-3'>
                                    {d?.data.map((sub, i) => (
                                        <div key={i} className='w-full'>
                                            <p className='font-primary opacity-[70%] font-light mt-1 '>{sub}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <SignupSection />
                </div>

            </div>
        </div>
    )
}

export default PropertySearch
