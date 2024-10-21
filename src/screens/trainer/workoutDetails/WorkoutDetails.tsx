import React, { FC } from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  ImageProps
} from 'react-native';
import styles from './workoutDetails.style';
import color from '@theme/color';
import { Button, Container, EmptyContainer } from '@components';
import SvgIndex from '@svgIndex';
import imageIndex from '@imageIndex';
import { ReviewCard, TopPicksCard } from '@card';
import { similarProgramsData, } from './workoutDetails.const';
import useWorkoutDetails from './useWorkoutDetails';


export interface WorkoutDetailsProps {
  reviewsList: ReviewsListItem[];
}
export interface ReviewsListItem {
  id: number;
  profileImage: ImageProps;
  time: string;
  review: string;
  rating: number;
}
const WorkoutDetails: FC = () => {
  const {
    onGoBack,
    workOutDetails,
  } = useWorkoutDetails();
  return (
    <View style={styles.viewContainerStyles}>
      <Container
        wrapperType="scroll"
        statusBarColor={color.primaryBG}
        scrollContainerStyle={styles.container}
        containerViewStyle={styles.container}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          <ImageBackground
            style={styles.bgImageStyle}
            source={imageIndex.workOutDetails}>
            <View style={styles.VideoPositionViewShow}>
              <Text allowFontScaling={false} style={styles.VideoPositionTextShow}>
                You are viewing the screen as a user
              </Text>
            </View>
            <View style={styles.manageViewSpaceStyle}>
              <TouchableOpacity
                onPress={onGoBack}
                style={styles.backStyle}
                activeOpacity={0.8}>
                <SvgIndex.arrowBackWhite />
              </TouchableOpacity>
              <View style={styles.likeRowViewManage}>
                <TouchableOpacity style={styles.likeViewStyle}>
                  <SvgIndex.like />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareViewStyle}>
                  <SvgIndex.share />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.managePlayViewSpaceStyle}>
              <View style={styles.followerShowView}>
                <View style={styles.priceContainer}>
                  <Text allowFontScaling={false} style={styles.priceText}>4.7</Text>
                  <SvgIndex.starPurpal />
                </View>
                <View style={styles.priceContainer}>
                  <Text allowFontScaling={false} style={styles.priceText}>16k</Text>
                  <SvgIndex.userPurpal />
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.VideoUserStyle}>
                <Text allowFontScaling={false} style={styles.videoUserText}>Play Trailer</Text>
                <SvgIndex.play />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.platStyleView}>
            <Text allowFontScaling={false} style={styles.platStyleTitleText}>
              Yash’s amazing workout plan
            </Text>
            <Text allowFontScaling={false} style={styles.platStyleDescriptionText}>
              Program Type Name
            </Text>
          </View>
          <View style={styles.englishViewStyle}>
            <SvgIndex.time />
            <Text allowFontScaling={false} style={styles.weekTextsStyle}>12 Weeks</Text>
            <SvgIndex.shell />
            <Text allowFontScaling={false} style={styles.weekTextsStyle}>Intermediate</Text>
            <SvgIndex.language />
            <Text allowFontScaling={false} style={styles.weekTextsStyle}>English</Text>
          </View>
          <View style={styles.userCardViewStyle}>
            <Image
              style={styles.userImageStyle}
              source={imageIndex.userProfile}
            />
            <View style={styles.userTextRowView}>
              <Text allowFontScaling={false} style={styles.userNameText}>Alex Margot</Text>
              <Text allowFontScaling={false} style={styles.userSubcribersText}>10k Subscribers</Text>
            </View>
            <SvgIndex.noticicationAdd />
          </View>
          <View style={styles.detailsBottomBorderStyle}>
            <View style={styles.titleRowViewStyle}>
              <SvgIndex.target />
              <Text allowFontScaling={false} style={styles.fullTitle}>
                Full body, Abs & Core, Booty, Arms, Resistance
              </Text>
            </View>
            <View style={styles.titleRowViewStyle}>
              <SvgIndex.dumbbel />
              <Text allowFontScaling={false} style={styles.fullTitle}>
                Full body, Abs & Core, Booty, Arms, Resistance
              </Text>
            </View>
          </View>
          <View style={styles.horizontalStyle}>
            <Text allowFontScaling={false} style={styles.detailsTextStyle}>Details</Text>
            <Text allowFontScaling={false} style={styles.decriptionTextStyle}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </Text>
          </View>
          <Text allowFontScaling={false} style={styles.rowTextPicks}>Similar Programs</Text>
          <FlatList
            contentContainerStyle={styles.topContantFlatist}
            data={similarProgramsData}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TopPicksCard
                key={index}
                item={item}
                index={index}
                crossFitTagView={styles.cardSimilarManageStyle}
              />
            )}
          />
          <Text allowFontScaling={false} style={styles.reviewsStyle}>Reviews</Text>
          <View style={styles.reviewRowView}>
            <SvgIndex.textMessage />
            <Text allowFontScaling={false} style={styles.reviewTextStyle}>
              7 reviews * 219 Total ratings
            </Text>
            <Text allowFontScaling={false} style={styles.ratingTextStyle}>4.9</Text>
            <SvgIndex.yellowStar />
          </View>
          <Text allowFontScaling={false} style={styles.ratingViewStyle}>
            (The reviews and ratings are given only by paying subscribers)
          </Text>
          <FlatList
            data={workOutDetails?.reviewsList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            renderItem={({ item, index }) => (
              <ReviewCard key={item?.id} item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyContainer />}
          />
        </View>
      </Container>
      <Button
        onPress={() => { }}
        label="Subscribe  $149"
        containerStyle={styles.buttonContainerStyles}
        marginHorizontal={68}
      />
    </View>
  );
};

export default WorkoutDetails;
