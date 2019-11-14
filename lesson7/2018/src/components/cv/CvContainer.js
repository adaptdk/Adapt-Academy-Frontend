import React from 'react';
import { map } from 'lodash';

// Components.
import NavigationItem from './NavigationItem';
import CvImage from './CvImage';
import CvInformation from './CvInformation';

const navigationItems = [
  'About',
  'Experience',
  'Education',
  'Skills',
  'Contact',
];

const userData = [
  [
    {
      label: 'Name',
      value: 'Vardenis Pavardenis',
    },
    {
      label: 'Birthday',
      value: '10/10/1990',
    },
    {
      label: 'Phone',
      value: '+37066666666',
    },
    {
      label: 'Email',
      value: 'vardenis@gmail.com',
    },
    {
      label: 'Website',
      value: 'http://vardenis-pavardenis.com/',
    },
    {
      label: 'Address',
      value: 'Vardenio gatve 13-2, Kaunas',
    },
  ],
  [
    {
      label: 'From 1994-10-12 to 1998-10-12',
      value: 'Frontend developer at Adapt A/S',
    },
    {
      label: 'From 1994-10-12 to 1998-10-12',
      value: 'Frontend developer at Adapt A/S',
    },
    {
      label: 'From 1994-10-12 to 1998-10-12',
      value: 'Frontend developer at Adapt A/S',
    },
  ],
  [
    {
      label: 'From 1994-10-12 to 1998-10-12',
      value: 'Some random school somewhere',
    },
    {
      label: 'From 1994-10-12 to 1998-10-12',
      value: 'Some random school somewhere',
    },
    {
      label: 'From 1994-10-12 to 1998-10-12',
      value: 'Some random school somewhere',
    },
  ],
  [
    {
      label: 'Programming skills',
      value: 'C C++ Java JavaScript PHP MySQL Python',
    },
  ],
  [
    {
      label: 'Contact e-mail',
      value: 'contact@email.me',
    },
    {
      label: 'Contact phone',
      value: '+37066666666',
    },
    {
      label: 'Send me a letter',
      value: 'My street 13-2, Kaisiadorys',
    },
  ],
];

const CvContainer = () => (
  <div className="cv-container__wrapper">
    <div className="cv-container__item">
      { map(navigationItems, (item, index) => (
        <NavigationItem title={ item } key={ index } />
      )) }
    </div>
    <div className="cv-container__item">
      <CvImage />
    </div>
    <div className="cv-container__item">
      <CvInformation data={ userData[0] } />
    </div>
  </div>
);

export default CvContainer;
