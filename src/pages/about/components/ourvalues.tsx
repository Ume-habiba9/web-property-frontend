import { useState } from 'react'
import popularityIcon from 'assets/icons/Popularity.svg'
import expertIcon from 'assets/icons/Ask the expert.svg'
import consultantIcon from 'assets/icons/Consultant.svg'
import teamIcon from 'assets/icons/Team.svg'
import businesIcon from 'assets/icons/Businessman.svg'
import ideaIcon from 'assets/icons/Idea.svg'
import SocialIcon from 'assets/icons/Social care.svg'
import customercareIcon from 'assets/icons/Customer service.svg'
import ShowIcon from 'assets/icons/Show more.svg'
import hideIcon from 'assets/icons/Polygon Icon.svg'
function OurValues() {

    const Values = [
        {
            icon: popularityIcon,
            heading: 'A Reputation Built on Trust and Integrity',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: expertIcon,
            heading: 'Expertise That Spans Borders',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: consultantIcon,
            heading: 'Financial Insights That Empower Clients',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: teamIcon,
            heading: 'Comprehensive, Tailored Services',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: businesIcon,
            heading: 'What You Can Expect from IVYHOLD',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: ideaIcon,
            heading: 'A Team That Goes Above and Beyond',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: SocialIcon,
            heading: 'Governance and Responsibility',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
        {
            icon: customercareIcon,
            heading: 'A Vision for the Future',
            text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: Clear, open communication throughout your journey Ethical practices in every transaction A relentless focus on delivering value tailored to your goals'
        },
    ]
    const [ShowParagraph, setShowParagraph] = useState(null);

    const toggleParagraph = (index: any) => {
        setShowParagraph(ShowParagraph === index ? null : index)
    }
    return (
        <div className=' w-[90%]'>
            {Values?.map((content, index) => (
                <div className={ShowParagraph === index ? 'flex flex-row gap-2 w-full max-w-md mx-auto h-full align-center justify-between my-6 p-2 bg-[#FD1E28] text-white rounded-xl' : 'flex flex-row gap-2 w-full max-w-md mx-auto h-full align-center justify-between my-6 p-2 bg-[#F4F6FA] rounded-xl'}>

                    <p className='pt-2 font-bold'>
                        <div className='flex flex-row align-center justify-between gap-2'>
                            <img src={content.icon} alt="" />
                            <p className='pt-2'>{content.heading}</p>
                            <button onClick={() => toggleParagraph(index)}>
                                {ShowParagraph === index ?
                                    <img className='' src={hideIcon} alt="" /> :
                                    <img src={ShowIcon} alt="" />
                                }
                            </button>
                        </div>
                        {ShowParagraph === index && (
                            <p className="px-14 mt-2  text-sm font-normal text-white">{content.text}</p>
                        )}
                    </p>


                </div>
            ))}
        </div>
    )
}
export default OurValues