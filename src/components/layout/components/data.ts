import FbIcon from 'assets/icons/fb-icon.svg?react';
import InstaIcon from 'assets/icons/insta-icon.svg?react';
import LinkedinIcon from 'assets/icons/linkdin-icon.svg?react';
import MailIcon from 'assets/icons/mail-icon.svg?react';
import PhoneIcon from 'assets/icons/phone-icon.svg?react';
import TwitterIcon from 'assets/icons/twitter-icon.svg?react';

const officeData = {
  heading: 'Office Address',
  sub: [
    {
      key: 1,
      subHeading: 'Head office:',
      address:
        'Ayazma Cad. No:37, 34406 Kapı No:5 Kat:11 Papirus Plaza, 34406 Kağıthane/İstanbulAyazma Cad. No:37, 34406 Kapı No:5 Kat:11 Papirus Plaza, 34406 Kağıthane/İstanbul',
    },
    {
      key: 2,
      subHeading: 'International Business Development & Marketing',
      address: 'Hamilton Creed Limited 48 West George StreetGlasgow, United Kingdom',
    },
    {
      key: 3,
      subHeading: 'Interior Design & Architecture Division',
      address: 'Selusso Limited 48 West George Street Glasgow, United Kingdom',
    },
  ],
};
const contactUsData = {
  heading: 'Contact Us',
  sub: [
    {
      key: 1,
      subHeading: 'phone 1:',
      address: '(+123) 456-78910',
      icon: PhoneIcon,
    },
    {
      key: 2,
      subHeading: 'Phone 2:',
      address: '(+123) 456-78910',
      icon: PhoneIcon,
    },
    {
      key: 3,
      subHeading: 'Email:',
      address: 'abcd@gmail.com',
      icon: MailIcon,
    },
  ],
};
const stateData1 = [
  {
    key: '1',
    heading: 'Residential Real Estate',
    points: ['Properties In Turkey', 'Properties In UK', 'Properties In UAE', 'Properties In Europe'],
  },
  {
    key: '2',
    heading: 'Rural Real Estates',
    points: ['Properties In Turkey', 'Properties In UK', 'Properties In UAE', 'Properties In Europe'],
  },
];

const stateData2 = [
  {
    key: '3',
    heading: 'Commercial Real Estate',
    points: ['Properties In Turkey', 'Properties In UK', 'Properties In UAE', 'Properties In Europe'],
  },
];

const realStateDate = [
  {
    key: 1,
    type: 'Residential',
    data: [
      'New Development',
      'Building Plot',
      'Duplex',
      'Flat / Apartment',
      'House',
      'Penthouse',
      'Studio',
      'Bungalow',
      'Villa',
      'Waterfront Property',
      'Farmhouse',
      'Land',
    ],
  },
  {
    key: 2,
    type: 'Commercial',
    data: ['Hotels', 'Offices', 'Retail / Shops', 'Plazas', 'Buy-to-Let', 'Investment Opportunities', 'Land'],
  },
];

const sectors = [
  {
    key: 1,
    heading: 'Sectors',
    data: [
      'Hotels',
      'Vineyard',
      'Land',
      'Shopping Malls',
      'Agricultural',
      'Retail',
      'Leisure & Tourism',
      'Marinas',
      'Leisure & Tourism',
      'Residential Investment & Development',
      'Restaurants',
      'Branded Residences',
    ],
  },
  {
    key: 2,
    heading: 'Additional Services',
    data: [
      'Land Acquisition',
      'Vineyard',
      'Land',
      'Shopping Malls',
      'Agricultural',
      'Retail',
      'Leisure & Tourism',
      'Marinas',
    ],
  },
];

const links = [
  {
    label: 'Find the right property',
    ref: '/ftrp',
  },
  {
    label: 'About Us',
    ref: '/about-us',
  },
  {
    label: 'Service',
    ref: '/service',
  },
  {
    label: 'Sell with Us',
    ref: '/sell-with-us',
  },
  {
    label: 'Blogs',
    ref: '/blogs',
  },
  {
    label: 'Contact Us',
    ref: '/contact-us',
  },
];

const socialIcons = [FbIcon, TwitterIcon, LinkedinIcon, InstaIcon];
export { links, officeData, contactUsData, stateData1, stateData2, realStateDate, sectors, socialIcons };
