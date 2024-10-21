const chartInformationList = [
  {
    value: 400,
    date: '16/02/23',
  },
  {
    value: 330,
  },
  {
    value: 320,
  },
  {
    value: 310,
  },
  {
    value: 230,
    date: '16/02/23',
  },
  {
    value: 200,
  },
  {
    value: 270,
  },
  {
    value: 240,
  },
  {
    value: 130,
    date: '16/02/23',
  },
  {
    value: 120,
  },
  {
    value: 100,
  },
  {
    value: 210,
  },
  {
    value: 270,
    date: '16/02/23',
  },
  {
    value: 240,
  },
  {
    value: 120,
  },
  {
    value: 100,
  },
  {
    value: 210,
    date: '16/02/23',
  },
  {
    value: 20,
  },
  {
    value: 100,
  },
];

const graphFilters = [
  {
    id: 1,
    title: 'Last Week',
  },
  {
    id: 2,
    title: 'Last 24h',
  },
  {
    id: 3,
    title: 'Last Month',
  },
  {
    id: 4,
    title: 'Last Year',
  },
  {
    id: 5,
    title: 'Max',
  },
];

const programManagementOverview = {
  Price: '$12k',
  status: 'Active',
  data: [
    {
      id: 1,
      data: [
        {
          id: 11,
          title: 'Earnings',
          amount: '$3,000',
          description: 'Increase of Earnings',
          progress: '8',
        },
        {
          id: 12,
          title: 'Total Subscribers',
          amount: '35,000',
          description: 'Increase of Total Subscribers',
          progress: '5',
        },
        {
          id: 13,
          title: 'New Subscribers',
          amount: '35,000',
          description: 'Increase of New Subscribers',
          progress: '10',
        },
        {
          id: 14,
          title: 'Viewership',
          amount: '35,000',
          description: 'Increase of Viewership',
          progress: '2',
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          id: 21,
          title: 'Active Subscribers ',
          amount: '35,000',
          description: 'Increase of Active Subscribers',
          progress: '5',
        },
        {
          id: 22,
          title: 'Total Programs',
          amount: '3,527',
          description: 'Increase of Total Programs',
          progress: '8',
        },
        {
          id: 23,
          title: 'Referrals Conversion',
          amount: '35,000',
          description: 'Increase of Referrals Conversion',
          progress: '10',
        },
        {
          id: 24,
          title: 'Rate Viewership',
          amount: '60%',
          description: 'Increase of Rate Viewership',
          progress: '2',
        },
      ],
    },
    {
      id: 3,
      data: [
        {
          id: 25,
          title: 'User engagement',
          amount: '35,000',
          description: 'Increase of User engagement',
          progress: '5',
        },
      ],
    },
  ],
};

export {chartInformationList, graphFilters, programManagementOverview};
