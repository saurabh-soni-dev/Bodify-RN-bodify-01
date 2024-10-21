import { SimilarPackages, TopPicksCard } from '@card';
import { Container, EmptyContainer } from '@components';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, { FC } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { packageData, similarPackagesData } from './programDetails.const';
import styles from './programDetails.style';
import useProgramDetails from './useProgramDetails';

const ProgramDetails: FC = () => {
  const { onGoBack } = useProgramDetails();
  return (
    <Container
      wrapperType="scroll"
      statusBarColor={color.primaryBG}
      bounces={true}
      containerViewStyle={styles.keyBoardView}>
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
                <Text allowFontScaling={false} style={styles.priceText}>
                  4.7
                </Text>
                <SvgIndex.starPurpal />
              </View>
              <View style={styles.priceContainer}>
                <Text allowFontScaling={false} style={styles.priceText}>
                  16k
                </Text>
                <SvgIndex.userPurpal />
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.VideoUserStyle}>
              <Text allowFontScaling={false} style={styles.videoUserText}>
                Play Trailer
              </Text>
              <SvgIndex.play />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.platStyleView}>
          <Text allowFontScaling={false} style={styles.platStyleTitleText}>
            Yash’s amazing workout plan
          </Text>
          <Text
            allowFontScaling={false}
            style={styles.platStyleDescriptionText}>
            Program Type Name
          </Text>
        </View>
        <View style={styles.englishViewStyle}>
          <Text allowFontScaling={false} style={styles.weekTextsStyle}>
            12 Weeks, Intermediate
          </Text>
          <Text allowFontScaling={false} style={styles.englishTextStyle}>
            English
          </Text>
        </View>
        <View style={styles.userCardViewStyle}>
          <Image
            style={styles.userImageStyle}
            source={imageIndex.userProfile}
          />
          <View style={styles.userTextRowView}>
            <Text allowFontScaling={false} style={styles.userNameText}>
              Alex Margot
            </Text>
            <Text allowFontScaling={false} style={styles.userSubcribersText}>
              10k Subscribers
            </Text>
          </View>
          <SvgIndex.noticicationAdd />
        </View>
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
        <View style={styles.horizontalStyle}>
          <Text allowFontScaling={false} style={styles.detailsTextStyle}>
            Details
          </Text>
          <Text allowFontScaling={false} style={styles.decriptionTextStyle}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
          </Text>
        </View>
        <Text allowFontScaling={false} style={styles.rowTextPicks}>
          Package Included:
        </Text>
        <FlatList
          data={packageData}
          contentContainerStyle={styles.topContantFlatist}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<EmptyContainer />}
          renderItem={({ item, index }) => (
            <TopPicksCard
              item={item}
              key={index}
              index={index}
              blurViewBg={styles.cardBgStyle}
              crossFitTagView={styles.cardManageStyle}
              tagTextStyle={styles.packageTagTextStyle}
              backgroundStyleImage={styles.bgCardViewStyle}
            />
          )}
        />
        <View style={styles.rowViewBorderStyle}>
          <View style={styles.activeCardStyle} />
          <View style={styles.deActiveCardStyle} />
          <View style={styles.deActiveCardStyle} />
        </View>
        <View style={styles.rowView}>
          <Text allowFontScaling={false} style={styles.rowTextHadingPicks}>
            Similar packages
          </Text>
          <TouchableOpacity style={styles.showAllView}>
            <Text allowFontScaling={false} style={styles.showAllTextStyle}>
              Show all
            </Text>
            <SvgIndex.rightArrow />
          </TouchableOpacity>
        </View>
        <FlatList
          data={similarPackagesData}
          contentContainerStyle={styles.topContantFlatist}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          ListEmptyComponent={<EmptyContainer />}
          renderItem={({ item, index }) => (
            <SimilarPackages
              item={item}
              key={index}
              index={index}
              backgroundStyleImage={styles.similarCardViewStyle}
              crossFitTagView={styles.cardSimilarManageStyle}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default ProgramDetails;
