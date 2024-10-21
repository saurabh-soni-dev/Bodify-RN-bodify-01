import imageIndex from '@imageIndex';

const reviewsList = {
  programName: 'Bodyweight only beginner ',
  subscribers: 16,
  level: 'Intermediate',
  rating: 4.5,
  numberOfWeeks: 12,
  retention: 91,
  price: 12.99,
  status: 'active',
  type: 'Cross Fit',
  ratingBreakdown: [
    {
      numberStar: 5,
      percentage: 66,
    },
    {
      numberStar: 4,
      percentage: 23,
    },
    {
      numberStar: 3,
      percentage: 55,
    },
    {
      numberStar: 2,
      percentage: 30,
    },
    {
      numberStar: 1,
      percentage: 100,
    },
  ],
  reviews: [
    {
      id: 1,
      profileImage: imageIndex?.profileImage,
      comment: 'Cool Program! quite intense but definitely you can see results',
      createdAt: '3d ago',
      userName: 'Oanna',
      rate: 4,
    },
  ],
  totalReviews: 7,
  overallRating: {
    count: 219,
    ratings: 4.9,
  },
};

export {reviewsList};
