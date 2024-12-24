import { useState } from "react"
import Container from "components/core-ui/container/container"
import Button from "components/core-ui/button/button"
import PeopleIcon from 'assets/icons/people.png'
import ServiceDetails from "./service-details"
const Services = [
    {
        id: 1,
        title: "Sales",
        text: "We provide expert guidance in buying and selling premium properties, with solutions tailored to your specific goals."
    },
    {
        id: 2,
        title: "Lettings",
        text: "Our comprehensive letting services ensure seamless experiences for landlords and tenants, prioritizing efficiency and satisfaction."
    }, {
        id: 3,
        title: "Developments / New-builds",
        text: "We offer specialist support for new developments, overseeing everything from initial planning to a successful market launch."
    }, {
        id: 4,
        title: "Commercial",
        text: "Our strategic commercial real estate services are designed to optimize your investment returns, leveraging market insights and expertise."
    }, {
        id: 5,
        title: "Relocation Services            ",
        text: "We offer customized relocation solutions for individuals and businesses, ensuring smooth and efficient transitions across the globe."
    }, {
        id: 6,
        title: "Management",
        text: "Our full-spectrum property management services provide peace of mind, focusing on maximizing long-term value and hassle-free ownership."
    }, {
        id: 7,
        title: "Private Office",
        text: "We deliver exclusive real estate advisory services for high-net-worth individuals, offering bespoke investment strategies and personalized attention."
    }, {
        id: 8,
        title: "Interior Design/ Architecture",
        text: "We guide you through residency and citizenship opportunities through strategic real estate investments, making the process straightforward and effective."
    },
    {
        id: 8,
        title: "Citizenship & Residency Programs",
        text: "We guide you through residency and citizenship opportunities through strategic real estate investments, making the process straightforward and effective."
    }
]
function ServicesSection() {
    const [selectedServive, setSelectedService] = useState<any>(null);
    const handleServiceDetail = (item: any) => {
        setSelectedService(item)
    };
    if (selectedServive) {
        return <ServiceDetails />;
    }
    return (
        <div>
            <Container>
                <div className=" py-9 mt-18  grid grid-cols-3 justify-center mx-auto items-center gap-9">
                    {Services?.map((service, index) => (
                        <div key={service.id} onClick={()=>handleServiceDetail(service)} className="flex flex-col gap-2 px-9 py-11 mx-auto max-w-[85%] h-[17rem] border-2 rounded-3xl hover:bg-[#24252CE5] hover:text-white">
                            <h2 className="leading-9 font-primary text-2xl  font-semibold ">{service.title}</h2>
                            <p className="font-normal text-xl opacity-[70%] ">{service.text}</p>
                        </div>
                    ))}
                </div>
                <div className=' w-[85%] my-20 rounded-3xl mx-auto flex flex-row justify-between bg-[#FD1E2812] py-8 px-12'>
                    <div className='flex align-center items-center space-x-4'>
                        <img className='bg-white p-2 rounded-full' src={PeopleIcon} alt='' />
                        <div className='p-2 text-start'>
                            <h2 className='mb-2 font-medium text-2xl font-primary'>Didn’t find what you looking?</h2>
                            <p className='font-primary text-[#8E8E93] text-base'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                    </div>
                    <div className='flex-centered'>
                        <Button variant='primary' className='text-lg font-medium font-primary rounded-lg  px-12 py-3'>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default ServicesSection