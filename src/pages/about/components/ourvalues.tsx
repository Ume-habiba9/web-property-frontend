import { useState } from 'react';

import expertIcon from 'assets/icons/Ask the expert.svg';
import businesIcon from 'assets/icons/Businessman.svg';
import consultantIcon from 'assets/icons/Consultant.svg';
import customercareIcon from 'assets/icons/Customer service.svg';
import ideaIcon from 'assets/icons/Idea.svg';
import hideIcon from 'assets/icons/Polygon Icon.svg';
import popularityIcon from 'assets/icons/Popularity.svg';
import ShowIcon from 'assets/icons/Show more.svg';
import SocialIcon from 'assets/icons/Social care.svg';
import teamIcon from 'assets/icons/Team.svg';

const Values = [
  {
    icon: popularityIcon,
    heading: 'A Reputation Built on Trust and Integrity',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise: ',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: expertIcon,
    heading: 'Expertise That Spans Borders',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: consultantIcon,
    heading: 'Financial Insights That Empower Clients',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: teamIcon,
    heading: 'Comprehensive, Tailored Services',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: businesIcon,
    heading: 'What You Can Expect from IVYHOLD',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: ideaIcon,
    heading: 'A Team That Goes Above and Beyond',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: SocialIcon,
    heading: 'Governance and Responsibility',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
  {
    icon: customercareIcon,
    heading: 'A Vision for the Future',
    text: 'Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:',
    points: [
      'Clear, open communication throughout your journey',
      ' Ethical practices in every transaction',
      ' A relentless focus on delivering value tailored to your goals',
    ],
  },
];

function OurValues() {
  const [ShowParagraph, setShowParagraph] = useState<number | null>(null);

  const toggleParagraph = (index: number) => {
    setShowParagraph(ShowParagraph === index ? null : index);
  };
  return (
    <div>
      {Values?.map((content, index) => (
        <button
          className={`${
            ShowParagraph === index
              ? ' bg-[#FD1E28] text-white pb-6 '
              : 'flex flex-row gap-2 justify-between pb-3 items-center bg-[#F4F6FA] '
          } w-full max-w-lg mx-auto my-6 pt-3 px-4 rounded-2xl`}
          onClick={() => toggleParagraph(index)}
        >
          <div className='flex items-center flex-row justify-between gap-2 w-full'>
            <div className='flex-centered gap-2'>
              <img src={content.icon} className='w-9' alt='' />
              <p className='pt-2 font-bold text-lg font-primary'>{content.heading}</p>
            </div>
            <div className='flex-centered'>
              {ShowParagraph === index ? <img className='' src={hideIcon} alt='' /> : <img src={ShowIcon} alt='' />}
            </div>
          </div>
          {ShowParagraph === index && (
            <div className='pt-2 px-12 text-start text-white'>
              <p className='mt-2 text-sm font-normal font-primary '>{content.text}</p>
              <ul className='mt-4'>
                {content?.points.map((point, i) => (
                  <li key={i} className='list-disc list-inside mt-2 text-sm font-primary'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
export default OurValues;
