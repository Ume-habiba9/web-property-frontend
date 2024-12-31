import { FaArrowRight } from "react-icons/fa6"
import SignupSection from "./signup-section"
const Data = [
    {
        key: 1,
        title: 'Sell With Us',
        heading: 'Market Your Property with IVYHOLD',
        text: 'At IVYHOLD, we understand that finding the perfect property is more than just a search—it’s about discovering a place to create memories, build your future, and call home.',
    },
    {
        key: 2,
        title: 'Why Choose IVYHOLD',
        heading: 'Why Choose IVYHOLD?',
        text: 'Lorem ipsum dolor sit amet consectetur. Integer amet justo sit lacinia fermentum nulla id ut nibh. Nisi sed pellentesque ridiculus nisl. Lobortis laoreet purus vitae in sed cursus. Integer habitant.',
    },
]
const MarketingPoints = [

    {
        title: 'Our Property Marketing Services Include',
        heading: 'Property Valuation',
        text: 'Accurate and market-driven property appraisals to set the best price and maximize your returns.',
        points: [
            'Tailored Advertising',
            'PR & Media',
            'Virtual & Physical Viewings',
            'Analytics & Reporting'
        ]
    }
]
function SellWithUs() {
    return (
        <div className="flex flex-row gap-9 justify-around mx-auto p-9  max-w-[90%]">
            <div className="flex flex-col">
                {
                    Data.map((d) => (
                        <div key={d?.key} className="flex flex-col gap-5 items-start p-3 font-primary max-w-[470px]">
                            <h2 className="text-left border-b border-[#C9C9C9] py-2 text-5xl font-semibold">{d?.title} </h2>
                            <p className="text-xl font-medium">{d?.heading}</p>
                            <p className="opacity-[70%]">{d?.text}</p>
                            <button
                                className="text-primary flex gap-2 items-center"
                            >
                                See more{' '}
                                <span className="text-primary">
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
                    ))
                }

            </div>
            <div className="flex flex-col max-w-[530px]">
                {
                    MarketingPoints.map((p) => (
                        <div className="flex flex-col gap-5 items-start p-3 font-primary ">
                            <h2 className="text-left border-b border-[#C9C9C9] py-2 text-5xl font-bold">{p?.title} </h2>
                            <p className="text-xl font-medium">{p?.heading}</p>
                            <p className="border-l-2 pl-4 border-[#C9C9C9] opacity-[70%]">{p?.text}</p>
                            <div className="flex flex-col gap-3 text-xl font-medium">
                                {p?.points.map((d) => (

                                    <p>{d}</p>
                                ))}
                            </div>
                        </div>
                    ))
                }
                <div className="py-5">
                <h2 className="my-4 text-left border-b border-[#C9C9C9] py-2 text-5xl font-semibold">Not Sure Where to Start?</h2>
                    <SignupSection />
                </div>
            </div>
        </div>
    )
}

export default SellWithUs
