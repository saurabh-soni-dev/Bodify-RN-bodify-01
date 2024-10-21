import SvgIndex from '@svgIndex';
import React, {FC, Fragment, memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './analyticsSnapshot.style';

interface Item {
  id: number;
  title: string;
  amount?: string;
  progress?: string;
  type?: string;
  description?: string;
}
interface AnalyticsSnapshotProps {
  data: Item[];
  showFullCard?: boolean;
  onSelectTitle: (title: string) => void;
}
const AnalyticsSnapshot: FC<AnalyticsSnapshotProps> = ({
  data,
  showFullCard,
  onSelectTitle,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  //** Handle highlight item */
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
  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        const isSelected = selected === item.id;
        return (
          <Fragment key={item?.id}>
            {index === 0 ? (
              showFullCard && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleSelect(item?.id, item?.title)}
                  style={styles.fContainer}>
                  <View style={styles.fContentView}>
                    <Text allowFontScaling={false} style={styles.fTitle}>
                      {item?.title}
                    </Text>
                    {item?.type && (
                      <Text allowFontScaling={false} style={styles.fTitle}>
                        {item?.type}
                      </Text>
                    )}
                    <Text allowFontScaling={false} style={styles.fAmount}>
                      {item?.amount}
                    </Text>
                  </View>
                  <View style={styles.fProgressView}>
                    <View style={styles.iconView}>
                      <SvgIndex.trendingUpWhite />
                    </View>
                    <Text
                      allowFontScaling={false}
                      style={styles.fProgressValue}>
                      {item?.progress}%{' '}
                      <Text
                        allowFontScaling={false}
                        style={styles.fProgressText}>
                        Increase of {item?.title}
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleSelect(item?.id, item?.title)}
                style={[styles.hContainer, isSelected && styles.isSelected]}>
                <View style={styles.hContentView}>
                  <Text
                    allowFontScaling={false}
                    style={styles.hTitle}
                    numberOfLines={1}>
                    {item?.title}
                  </Text>
                  {!showFullCard && (
                    <View style={styles.averageView}>
                      <Text allowFontScaling={false} style={styles.fType}>
                        {item?.type ? `(${item?.type})` : ''}
                      </Text>
                    </View>
                  )}
                  <Text allowFontScaling={false} style={styles.hAmount}>
                    {item?.amount}
                  </Text>
                </View>
                {item?.progress && (
                  <View style={styles.hProgressView}>
                    <View style={styles.iconView}>
                      <SvgIndex.trendingUp />
                    </View>
                    <Text
                      allowFontScaling={false}
                      style={styles.hProgressValue}>
                      {item?.progress}%{' '}
                      <Text
                        allowFontScaling={false}
                        style={styles.hProgressText}>
                        {item?.description}
                      </Text>
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          </Fragment>
        );
      })}
    </View>
  );
};

export default memo(AnalyticsSnapshot);
