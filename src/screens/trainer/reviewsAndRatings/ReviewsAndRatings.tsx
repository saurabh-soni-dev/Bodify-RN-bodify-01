import {MyProgramsCard, ReviewCard} from '@card';
import {Container, EmptyContainer} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, Suspense} from 'react';
import {FlatList, ImageProps, Text, View} from 'react-native';
import {styles} from './reviewsAndRatings.style';
import useMyProfile from './useReviewsAndRatings';

export interface RatingsProps {
  ratingsList: TransformedData;
}
interface RatingBreakdown {
  numberStar: number;
  percentage: number;
}
interface Review {
  id: number;
  profileImage: ImageProps;
  comment: string;
  createdAt: string;
  userName: string;
  rate: number;
}
interface OverallRating {
  count?: number;
  ratings?: number;
}
export interface ProgramItem {
  date: string;
  img: string;
  level: string;
  name: string;
  numberOfWeeks: number;
  price?: number;
  retention?: number;
  rating: number;
  subscribers?: number;
  status: string;
  type: string;
}
export interface TransformedData {
  programItem: ProgramItem | any;
  ratingBreakdown: RatingBreakdown[];
  reviews: Review[];
  totalReviews?: number;
  overallRating?: OverallRating;
}

const ReviewsAndRatings: FC = () => {
  const {reviewsAndRatings} = useMyProfile();
  return (
    <Container
      wrapperType="simple"
      headerShown
      showBackIcon
      bounces={false}
      lable="Reviews & ratings"
      statusBarColor={color.primaryBG}
      scrollContainerStyle={styles.screenBackgroundContainerStyle}
      containerViewStyle={styles.screenBackgroundContainerStyle}
      containerStyle={styles.headerStyle}>
      <View style={styles.programCardStyle}>
        <MyProgramsCard
          index={0}
          item={reviewsAndRatings?.ratingsList?.programItem}
          showStatus={true}
          anotherStatusDeActive
        />
      </View>
      <View style={styles.ratingViewStyle}>
        {reviewsAndRatings?.ratingsList?.ratingBreakdown?.map(
          (rating: RatingBreakdown, index: number) => (
            <View key={index} style={styles.ratingRow}>
              <View style={styles.starContainer}>
                {Array.from({length: rating?.numberStar}).map((_, i) => (
                  <SvgIndex.yellowStar />
                ))}
              </View>
              <View style={styles.percentageContainer}>
                <Text style={styles.percentageText}>{rating.percentage}%</Text>
              </View>
              <View key={index} style={styles.ratingBar}>
                <View
                  style={[styles.progressBar, {width: `${rating.percentage}%`}]}
                />
              </View>
            </View>
          ),
        )}
      </View>
      <View style={styles.reviewView}>
        <View style={styles.reviewOverview}>
          <View style={styles.overviewRow}>
            <View style={styles.messageIcon}>
              <SvgIndex.textMessage />
            </View>
            <Text style={styles.reviewText} allowFontScaling={false}>
              {reviewsAndRatings?.ratingsList?.totalReviews} reviews *
              {reviewsAndRatings?.ratingsList?.overallRating?.count} Total
              ratings
            </Text>
            <Text style={styles.ratingText} allowFontScaling={false}>
              {reviewsAndRatings?.ratingsList?.overallRating?.ratings}
            </Text>
            <SvgIndex.yellowStar />
          </View>
          <Text style={styles.reviewDesText} allowFontScaling={false}>
            (The reviews and ratings are given only by paying subscribers)
          </Text>
        </View>
        <FlatList
          data={reviewsAndRatings?.ratingsList?.reviews}
          contentContainerStyle={styles.reviewContentContainerStyle}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <ReviewCard key={item?.id} item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyContainer />}
        />
      </View>
    </Container>
  );
};

export default ReviewsAndRatings;
