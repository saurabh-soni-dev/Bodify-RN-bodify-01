import {MyProgramHorizontalCard, ReviewCard} from '@card';
import {CustomStatusbar, EmptyContainer} from '@components';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {
  FlatList,
  Image,
  ImageProps,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './myProfile.style';
import useMyProfile from './useMyProfile';
import {ProfileProgramsListItemProps} from 'src/components/card/myProgramHorizontalCard/MyProgramHorizontalCard';
export interface MyProfileProps {
  workoutPlans: WorkoutPlansItem[];
  reviewsList: ReviewsListItem[];
  userData?: UserData;
  isLoading: boolean;
  myProgramsList: ProfileProgramsListItemProps[];
}
interface WorkoutPlansItem {
  id: number;
  tag: string;
  rating: number;
  subscriber: string;
  title: string;
  duration: string;
  level: string;
  name: string;
  backgroundImage: typeof imageIndex.frame;
  price: string;
}
interface ReviewsListItem {
  id: number;
  profileImage: ImageProps;
  comment: string;
  createdAt: string;
  userName: string;
  rate: number;
}
interface UserData {
  userId?: string;
  firstName?: string;
  lastName?: string;
  EducationAndQualification?: string;
  subscribers?: string;
  Location?: string;
  YearOfExperience?: string;
  About?: string;
  Instagram?: string;
  Tiktok?: string;
  AddExpertise?: SelectedExpertiseProps[];
  userProfile?: string;
  userBackgroundImage?: string;
  reviews?: Review[];
  totalReviews?: string;
  overallRating?: {
    count?: number;
    ratings?: number;
  };
}
export interface SelectedExpertiseProps {
  id: number;
  title: string;
}
interface Review {
  id: number;
  profileImage: ImageProps;
  comment: string;
  createdAt: string;
  userName: string;
  rate: number;
}

const MyProfile: FC = () => {
  const {profileInfo, navigateToEditProfile} = useMyProfile();
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        containerStyle={styles.statusBarContainer}
      />
      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        <Image
          style={styles.bannerImage}
          source={imageIndex.profileImage}
          resizeMode="cover"
        />

        {/* profile image view */}
        <View style={styles.profileContainer}>
          <View style={styles.profileImageView}>
            <Image
              style={styles.profileImage}
              source={imageIndex.userProfile}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.editView}
            onPress={navigateToEditProfile}>
            <Text style={styles.editText} allowFontScaling={false}>
              Edit
            </Text>
            <View style={styles.editIcon}>
              <SvgIndex.edit />
            </View>
          </TouchableOpacity>
        </View>

        {/* profile name view */}
        <View style={styles.profileNameView}>
          <Text style={styles.nameText} allowFontScaling={false}>
            {profileInfo?.userData?.firstName} {profileInfo?.userData?.lastName}
          </Text>
          <Text style={styles.subscriberText} allowFontScaling={false}>
            {profileInfo?.userData?.subscribers}k subscribers
          </Text>
        </View>

        {/* profile overview */}
        <View style={styles.profileInsights}>
          <View style={styles.insightItemsRow}>
            <View style={styles.insightIcon}>
              <SvgIndex.certificate />
            </View>
            <Text style={styles.insightText} allowFontScaling={false}>
              {profileInfo?.userData?.EducationAndQualification}
            </Text>
          </View>
          <View style={styles.insightItemsRow}>
            <View style={styles.insightIcon}>
              <SvgIndex.instagram height={14} width={14} />
            </View>
            <Text style={styles.insightText} allowFontScaling={false}>
              {profileInfo?.userData?.Instagram}
            </Text>
          </View>
          <View style={[styles.insightItemsRow, styles.insightSpace]}>
            <View style={styles.insightIcon}>
              <SvgIndex.bag />
            </View>
            <Text style={styles.insightText} allowFontScaling={false}>
              {profileInfo?.userData?.YearOfExperience}
            </Text>
          </View>
          <View style={[styles.insightItemsRow, styles.insightSpace]}>
            <View style={styles.insightIcon}>
              <SvgIndex.tiktok width={12} height={14} />
            </View>
            <Text style={styles.insightText} allowFontScaling={false}>
              {profileInfo?.userData?.Tiktok}
            </Text>
          </View>
          <View style={[styles.insightItemsRow, styles.insightSpace]}>
            <View style={styles.insightIcon}>
              <SvgIndex.map />
            </View>
            <Text style={styles.insightText} allowFontScaling={false}>
              {profileInfo?.userData?.Location}
            </Text>
          </View>
        </View>

        {/* about me view */}
        <View style={styles.aboutMeView}>
          <Text style={styles.aboutMeHeadingText} allowFontScaling={false}>
            About me
          </Text>
          <Text style={styles.aboutMeText} allowFontScaling={false}>
            {profileInfo?.userData?.About}
          </Text>
        </View>

        {/* crossfit view */}
        <View style={styles.crossfitView}>
          {profileInfo?.userData?.AddExpertise?.map((item, _) => (
            <TouchableOpacity
              disabled={true}
              key={item?.id}
              activeOpacity={0.8}
              style={[styles.crossfitItem, styles.selectedCrossfitItem]}>
              <Text
                style={[styles.crossfirtText, styles.selectedCrossfirtText]}
                allowFontScaling={false}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* my programs view */}
        <View style={styles.myProgramsView}>
          <View style={styles.headingView}>
            <Text style={styles.myProgramsText} allowFontScaling={false}>
              My programs
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.showAllView}>
              <Text style={styles.showAllText} allowFontScaling={false}>
                Show All
              </Text>
              <View style={styles.showAllIcon}>
                <SvgIndex.rightArrow />
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            data={profileInfo?.myProgramsList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <MyProgramHorizontalCard
                key={index}
                item={item}
                index={index}
                userName={`${profileInfo?.userData?.firstName} ${profileInfo?.userData?.lastName}`}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<EmptyContainer />}
          />
        </View>

        {/* reviews view */}
        <View style={styles.reviewView}>
          <Text style={styles.reviewHeadingText} allowFontScaling={false}>
            Review
          </Text>
          <View style={styles.reviewOverview}>
            <View style={styles.overviewRow}>
              <View style={styles.messageIcon}>
                <SvgIndex.textMessage />
              </View>
              <Text style={styles.reviewText} allowFontScaling={false}>
                {profileInfo?.userData?.totalReviews} reviews *{' '}
                {profileInfo?.userData?.overallRating?.count} Total ratings
              </Text>
              <Text style={styles.ratingText} allowFontScaling={false}>
                {profileInfo?.userData?.overallRating?.ratings}
              </Text>
              <SvgIndex.yellowStar />
            </View>
            <Text style={styles.reviewDesText} allowFontScaling={false}>
              (The reviews and ratings are given only by paying subscribers)
            </Text>
          </View>
          <FlatList
            data={profileInfo?.userData?.reviews}
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
      </ScrollView>
    </View>
  );
};

export default MyProfile;
