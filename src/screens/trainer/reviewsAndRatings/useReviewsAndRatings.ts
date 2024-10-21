import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {RatingsProps} from './ReviewsAndRatings';
import {reviewsList} from './reviewsAndRatings.const';

const useReviewsAndRatings = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const [reviewsAndRatings, setReviewsAndRatings] = useState<RatingsProps>({
    ratingsList: {
      programItem: {
        name: '',
        subscribers: 0,
        level: '',
        rating: 0,
        numberOfWeeks: 0,
        retention: 0,
        price: 0,
        status: '',
        type: '',
      },
      ratingBreakdown: [],
      reviews: [],
      totalReviews: 0,
      overallRating: {
        count: 0,
        ratings: 0,
      },
    },
  });
  // **Handle state update**
  const updateProfileState = useCallback(<T>(key: string, value: T) => {
    setReviewsAndRatings(prevState => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    const transformedData = {
      programItem: {
        name: reviewsList?.programName,
        subscribers: reviewsList?.subscribers,
        level: reviewsList?.level,
        rating: reviewsList?.rating,
        numberOfWeeks: reviewsList?.numberOfWeeks,
        retention: reviewsList?.retention,
        price: reviewsList?.price,
        status: reviewsList?.status,
        type: reviewsList?.type,
      },
      ratingBreakdown: reviewsList?.ratingBreakdown,
      reviews: reviewsList?.reviews,
      totalReviews: reviewsList?.totalReviews,
      overallRating: reviewsList?.overallRating,
    };
    updateProfileState('ratingsList', transformedData);
  }, [isFocused, updateProfileState]);

  return {
    reviewsAndRatings,
  };
};

export default useReviewsAndRatings;
