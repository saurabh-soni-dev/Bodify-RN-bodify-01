import SvgIndex from '@svgIndex';

export const settingsList = [
  {
    id: 1,
    sectionTitle: 'Account',
    settings: [
      {
        id: 1,
        title: 'Switch to trainee',
        icon: SvgIndex.userSwitch,
        navigation: '',
        rightArrow: true,
      },
      {
        id: 2,
        title: 'Change Email & Password',
        icon: SvgIndex.changePassword,
        navigation: 'ChangeEmailPassword',
        rightArrow: true,
      },
      {
        id: 3,
        title: 'Edit Profile',
        icon: SvgIndex.accountCircle,
        navigation: 'EditProfile',
        rightArrow: true,
      },
    ],
  },
  {
    id: 2,
    sectionTitle: 'Transactions',
    settings: [
      {
        id: 1,
        title: 'Transaction',
        icon: SvgIndex.transaction,
        navigation: 'Transaction',
        rightArrow: false,
      },
    ],
  },
  {
    id: 3,
    sectionTitle: 'Region & Language',
    settings: [
      {
        id: 1,
        title: 'Language',
        icon: SvgIndex.translate,
        navigation: 'Language',
        rightArrow: true,
      },
      {
        id: 2,
        title: 'Country/Region',
        icon: SvgIndex.flag,
        navigation: 'CountryRegion',
        rightArrow: true,
      },
    ],
  },
  {
    id: 4,
    sectionTitle: 'Legal Policies',
    settings: [
      {
        id: 1,
        title: 'Terms of Use',
        icon: SvgIndex.gavel,
        navigation: '',
        rightArrow: true,
      },
      {
        id: 2,
        title: 'Privacy Policy',
        icon: SvgIndex.privacyPolicy,
        navigation: '',
        rightArrow: true,
      },
    ],
  },
  {
    id: 5,
    sectionTitle: 'Help & Support',
    settings: [
      {
        id: 1,
        title: 'App FAQs',
        icon: SvgIndex.quiz,
        navigation: '',
        rightArrow: true,
      },
      {
        id: 2,
        title: 'Contact Us',
        icon: SvgIndex.supportAgent,
        navigation: '',
        rightArrow: true,
      },
    ],
  },
  {
    id: 6,
    sectionTitle: '',
    settings: [
      {
        id: 1,
        title: 'Log Out',
        icon: SvgIndex.logout,
        rightArrow: false,
      },
    ],
  },
  {
    id: 7,
    sectionTitle: '',
    settings: [
      {
        id: 1,
        title: 'Delete Account',
        icon: SvgIndex.deleteRed,
        rightArrow: false,
      },
    ],
  },
];
