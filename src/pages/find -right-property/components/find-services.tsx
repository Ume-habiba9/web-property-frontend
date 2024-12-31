import { Button } from "antd";
import { FaArrowRight } from 'react-icons/fa6';
import { sectors } from "components/layout/components/data";
import SignupSection from "./signup-section";
const Services = [
    {
        key: 2,
        data: [
            'Sales',
            'Lettings',
            'Developments / New-builds',
            'Commercial',
            'Relocation Services',
            'Management',
            'Private Office',
            'Interior Design / Architecture',
            'Citizenship & Residency Programs via Real Estate Investment',
        ],
    },
];

function FindServices() {
    const splitIndex = Math.ceil(Services[0].data.length / 2);
    const firstColumn = Services[0].data.slice(0, splitIndex);
    const secondColumn = Services[0].data.slice(splitIndex);

    return (
        <div>
            <div className="flex flex-col gap-12 mx-auto max-w-[80%] p-7 items-left">
                <div className="w-full border-b border-[#C9C9C9] py-7">
                    <h2 className="text-5xl font-bold">Find Services</h2>
                </div>
                <div className="grid grid-cols-3 gap-x-20">
                    <div className="flex flex-col gap-2">
                        {firstColumn.map((item, index) => (
                            <p key={index} className="font-primary opacity-[70%] font-light mt-1">
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {secondColumn.map((item, index) => (
                            <p key={index} className="font-primary opacity-[70%] font-light mt-1">
                                {item}
                            </p>
                        ))}
                    </div>
                    <SignupSection />
                </div>


                <div className="mx-auto my-9 ">
                    <div className="grid grid-cols-2 ">
                        {sectors.map((sector) => (
                            <div key={sector.key} className="">
                                <div className="mb-4 border-b border-[#C9C9C9]">
                                    <h2 className="font-bold text-5xl py-6">{sector.heading}</h2>
                                </div>
                                <div className="grid grid-cols-2 mt-7 gap-x-48">
                                    {sector.data.map((item, index) => (
                                        <div key={index} className={index % 2 === 0 ? "col-span-1" : "col-span-1"}>
                                            <p className="py-2 opacity-[70%]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FindServices;
