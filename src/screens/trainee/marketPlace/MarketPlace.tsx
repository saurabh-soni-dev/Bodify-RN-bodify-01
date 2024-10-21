import { SliderCard, TopPicksCard } from '@card';
import { ClipCard, CustomStatusbar, SearchBar } from '@components';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, { FC } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './marketPlace.style';
import { cardList, cardListTopPicks, exploreData } from './marketPlaceData.const';
import useMarketPlace from './useMarketPlace';

const MarketPlace: FC = () => {
  const { activeIndex, setActiveIndex } = useMarketPlace();
  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <View style={styles.userHeaderView}>
        <Image source={imageIndex.user} />
        <Text allowFontScaling={false} style={styles.userTextHeader}>Hello Joe Francis</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.keyBoardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.viewHorizontal}>
            <SearchBar
              placeholder={`Search trainers or programs`}
              placeholderTextColor={color.secondaryBG}
              searchIcon={SvgIndex.searchWhite}
              showFilterIcon
            />
            <Text allowFontScaling={false} style={styles.curatedTextStyle}>Curated For You</Text>
          </View>
          <FlatList
            data={cardList}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `${index}`}
            horizontal
            renderItem={({ item, index }) => (
              <View>
                <SliderCard
                  onUserProfileClick={() => {
                    setActiveIndex(index);
                  }}
                  item={item}
                  key={index}
                  index={index}
                />
              </View>
            )}
          />
          <View style={styles.activeView}>
            {cardList.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.currentViewActive,
                  {
                    backgroundColor:
                      activeIndex == index
                        ? color.primaryText
                        : color.secondaryText,
                  },
                ]}
              />
            ))}
          </View>
          <View style={styles.rowView}>
            <Text allowFontScaling={false} style={styles.rowTextPicks}>Top Picks</Text>
            <TouchableOpacity style={styles.showAllView}>
              <Text allowFontScaling={false} style={styles.showAllTextStyle}>Show all</Text>
              <SvgIndex.rightArrow />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.topContantFlatist}
            data={cardListTopPicks}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `${index}`}
            horizontal
            renderItem={({ item, index }) => (
              <TopPicksCard
                onPress={() => { }}
                item={item}
                key={index}
                index={index}
                crossFitTagView={styles.cardManageStyle}
                tagTextStyle={styles.tagTextSty}
              />
            )}
          />
          <View style={styles.rowView}>
            <Text allowFontScaling={false} style={styles.rowTextPicks}>CrossFit</Text>
            <TouchableOpacity style={styles.showAllView}>
              <Text allowFontScaling={false} style={styles.showAllTextStyle}>Show all</Text>
              <SvgIndex.rightArrow />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.topContantFlatist}
            data={cardListTopPicks}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `${index}`}
            horizontal
            renderItem={({ item, index }) => (
              <TopPicksCard
                onPress={() => { }}
                item={item}
                key={index}
                index={index}
                crossFitTagView={styles.cardManageStyle}
                tagTextStyle={styles.tagTextSty}
              />
            )}
          />
          <View style={styles.rowView}>
            <Text allowFontScaling={false} style={styles.rowTextPicks}>Yoga and wellness</Text>
            <TouchableOpacity style={styles.showAllView}>
              <Text allowFontScaling={false} style={styles.showAllTextStyle}>Show all</Text>
              <SvgIndex.rightArrow />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.topContantFlatist}
            data={cardListTopPicks}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `${index}`}
            horizontal
            renderItem={({ item, index }) => (
              <TopPicksCard
                onPress={() => { }}
                item={item}
                key={index}
                index={index}
                crossFitTagView={styles.cardManageStyle}
                tagTextStyle={styles.tagTextSty}
              />
            )}
          />
          <Text allowFontScaling={false} style={styles.exploreText}>Explore by Tag</Text>
          <FlatList
            data={exploreData}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(_, index) => `${index}`}
            numColumns={4}
            renderItem={({ item, index }) => (
              <ClipCard title={item.title} onPress={() => { }} />
            )}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.yourFitnesTextStyle}>
            <Text allowFontScaling={false} style={styles.yourTextStyle}>
              Your Fitness,{'\n'}Your Way
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MarketPlace;
