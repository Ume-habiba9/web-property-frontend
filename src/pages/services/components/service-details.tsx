import Container from "components/core-ui/container/container"
import servicebg from 'assets/images/servicebg.png'
import serviceImg from 'assets/images/serviceimg.png'
// import sectorbg from 'assets/images/sectorbg.png'
const Data = [
    {
        key: 1,
        bgImage: servicebg,
        serviceImg: serviceImg,
        serviceName: "Sales ",
        text: 'We provide expert guidance in buying and selling premium properties, with solutions tailored to your specific goals.',
        title: 'Lorem ipsum dolor sit amet consectetur Et purus blandit ',
        desc: 'We offer expert guidance in buying and selling premium properties, tailoring our approach to your specific goals. With a deep understanding of market trends in Turkey, the UAE, Hungary, the UK, and beyond, our team ensures that every transaction delivers maximum value and a seamless experience for buyers and sellers alike. From luxury homes to high-yield investments, IVYHOLD is committed to delivering results that exceed expectations.'
    }
]
function ServiceDetails() {
    return (
        <div>
            {
                Data.map((d) => (
                    <div key={d.key} className="">
                        <div className="relative h-[85vh] w-full overflow-hidden flex flex-col items-center justify-center text-white bg"
                            style={{
                                backgroundImage: `url(${d.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <h2 className="font-bold text-10xl">{d.serviceName}</h2>
                            <p className="text-2xl font-normal text-center mx-auto lg:px-[12rem] md:px-[19rem] sm:px-5 px-[12rem]">{d.text}</p>
                        </div>
                        <div className="flex flex-row items-start justify-around m-6">
                            <div className=" mt-28 gap-6 flex flex-col justify-center items-left max-w-[46rem]">
                                <div>
                                    <span className="relative border-b-4 border-primary text-primary font-medium text-xl inline-block">{d.serviceName}  </span>
                                </div>
                                <h2 className="font-semibold text-5xl">{d.title}</h2>
                                <p className="leading-7 text-lg opacity-[70%]">{d.desc}</p>
                            </div>
                            <div>
                                <img className="rounded-3xl" src={d.serviceImg} alt="" />
                            </div>
                        </div>
                    </div >
                ))
            }
        </div >
    )
}

export default ServiceDetails
