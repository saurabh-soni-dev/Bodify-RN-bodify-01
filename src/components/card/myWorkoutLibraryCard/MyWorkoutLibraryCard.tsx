import React, { FC, memo } from 'react';
import {
  ImageBackground,
  ImageProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './myWorkoutLibraryCard.style';
import imageIndex from '@imageIndex';

interface MyWorkoutLibraryCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  selectedItemIndex?: number;
}
interface ItemProps {
  id?: number;
  trainerInstructions?: string;
  bgImage?: ImageProps;
  selectedBgImage?: ImageProps;
}

const MyWorkoutLibraryCard: FC<MyWorkoutLibraryCardProps> = ({
  item,
  index,
  onPress,
  selectedItemIndex,
}) => {
  const isIndexMatch = index === selectedItemIndex;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={[
          styles.backgroundImageContainer,
          isIndexMatch && styles.selectedContainer,
        ]}
        source={isIndexMatch ? imageIndex.myWorkoutBackground : imageIndex.myWorkoutCardLibrary}
      // source={isIndexMatch ? item?.selectedBgImage : item?.bgImage}
      >
        <View style={styles.titleView}>
          <Text allowFontScaling={false} style={styles.titleText}>
            {item?.trainerInstructions}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(MyWorkoutLibraryCard);
