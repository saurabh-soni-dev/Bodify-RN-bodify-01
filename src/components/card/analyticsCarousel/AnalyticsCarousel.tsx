import SvgIndex from '@svgIndex';
import React, {FC, memo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './analyticsCarousel.style';

interface DataItem {
  id: number;
  title: string;
  amount: string;
  progress: string;
  description: string;
}

interface CarouselItem {
  data: DataItem[];
}

interface AnalyticsCarouselProps {
  data: CarouselItem[];
  containerStyle?: ViewStyle;
  onSelectTitle: (title: string) => void; // Define a prop to receive selected title
}

const AnalyticsCarousel: FC<AnalyticsCarouselProps> = ({
  data,
  containerStyle,
  onSelectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({index});
    setCurrentIndex(index);
  };

  const handleSelect = (id: number, title: string) => {
    setSelected(id === selected ? null : id);
    if (onSelectTitle) {
      if (id !== selected) {
        onSelectTitle(title); // Pass selected title to parent component function
      } else {
        onSelectTitle(''); // Clear selection if clicking the same item
      }
    }
  };

  const renderList = ({item}: {item: DataItem}) => {
    const isSelected = selected === item.id;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleSelect(item.id, item.title)}
        key={item.id}
        style={[styles.card, isSelected && styles.isSelected]}>
        {item.amount && (
          <View style={styles.cardTitleView}>
            <Text
              allowFontScaling={false}
              style={styles.cardTitle}
              numberOfLines={1}>
              {item.title}
            </Text>
            <Text allowFontScaling={false} style={styles.amount}>
              {item.amount}
            </Text>
          </View>
        )}
        {item.progress && (
          <View style={styles.progressView}>
            <View style={styles.iconView}>
              <SvgIndex.trendingUp />
            </View>
            <Text allowFontScaling={false} style={styles.progrssPercent}>
              {item.progress}%{' '}
              <Text allowFontScaling={false} style={styles.progrssText}>
                {item.description}
              </Text>
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}: {item: CarouselItem}) => {
    return (
      <FlatList
        key={item.data[0].id}
        contentContainerStyle={styles.contentContainerStyle}
        data={item.data}
        keyExtractor={list => list.id.toString()}
        numColumns={2}
        renderItem={renderList}
        bounces={false}
        pagingEnabled
      />
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dotView}
            onPress={() => handleDotPress(index)}>
            <View
              style={[styles.dot, index === currentIndex && styles.activeDot]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(AnalyticsCarousel);
