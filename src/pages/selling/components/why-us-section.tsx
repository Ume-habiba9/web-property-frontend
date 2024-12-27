import benefitsIcon from 'assets/icons/Popularity.png'
const Benefits = [
    {
        icon: benefitsIcon,
        title: 'Unmatched Market Insight',
        text: 'Our team of seasoned professionals brings decades of experience in key markets, from Turkey and the UK to the UAE and Europe. We stay ahead of market trends, providing you with strategic advice tailored to your property type and location.'
    },
    {
        icon: benefitsIcon,
        title: 'Unmatched Market Insight',
        text: 'We believe in a custom approach to marketing. Our team crafts a personalized strategy for your property, combining high-impact digital campaigns, compelling visuals, and targeted print advertising to engage and attract serious buyers or tenants.'
    }, {
        icon: benefitsIcon,
        title: 'Global Network & Local Expertise',
        text: 'With our headquarters in Istanbul and connections spanning from the United States to the Far East, IVYHOLD leverages a comprehensive global network. Our experts are equipped to reach high-net-worth individuals and investors worldwide while offering deep local market insights to maximize your property’s appeal.'
    }, {
        icon: benefitsIcon,
        title: 'Unmatched Market Insight',
        text: 'Our advanced digital marketing techniques ensure your property stands out in a competitive landscape. Using immersive technology like virtual tours, 3D walkthroughs, and professional video production, we engage potential buyers and tenants in a visually dynamic way.'
    }, {
        icon: benefitsIcon,
        title: 'Professional Presentation',
        text: 'First impressions matter. Our in-house team of designers and photographers work to present your property in the best possible light, crafting stunning visuals and persuasive content that highlights its unique features.'
    }, {
        icon: benefitsIcon,
        title: 'Unrivalled Access to Buyers & Tenants',
        text: 'Our expansive database includes international investors, luxury seekers, and corporate clients. Whether you are selling a luxury home, leasing commercial space, or marketing a development, we connect you with the right audience efficiently.'
    }
]
function WhyUsSection() {
    return (
        <div className='my-28 w-full mx-auto'>
            <div className="flex-centered flex-col gap-4   mx-auto text-center max-w-[670px] ">
                <span className="text-primary font-normal font-primary text-2xl ">
                    ~    WHY US
                </span>
                <h2 className="text-5xl font-semibold">Why Choose IVYHOLD?</h2>
                <p className="leading-7 ">At IVYHOLD, we understand that every property has a unique story to tell, and we’re committed to showcasing yours in a way that captivates the right audience. With a proven track record in delivering exceptional results, we utilize our global reach and local expertise to ensure your property gets the attention it deserves.</p>
            </div>
            <div className="my-28 grid grid-cols-2 gap-9 w-full max-w-[80%] mx-auto">                {
                    Benefits.map((b) => (
                        <div className=' flex flex-row gap-4 p-9 mx-auto bg-[#F4F6FA] rounded-2xl max-w-[590px]'>
                                <img className='w-9 h-9' src={b.icon} alt="" />
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-lg'>{b.title}</h2>
                                <p className='opacity-[70%]'>{b.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyUsSection
