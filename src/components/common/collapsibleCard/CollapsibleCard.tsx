import svgIndex from '@svgIndex';
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './collapsibleCard.style';

interface CollapsibleCardProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  containerStyle?: ViewStyle;
  collapsedStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  isExpandedAll?: boolean;
  isHeaderColor?: boolean;
  upArrow?: React.JSX.ElementType;
  downArrow?: React.JSX.ElementType;
  titleStyle?:TextStyle
}

const CollapsibleCard: FC<CollapsibleCardProps> = ({
  title,
  description,
  content,
  containerStyle,
  collapsedStyle,
  contentStyle,
  isExpandedAll,
  isHeaderColor,
  upArrow,
  downArrow,titleStyle
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const animation = new Animated.Value(0);

  const UpArrow = useMemo(() => upArrow as React.JSX.ElementType, [upArrow]);
  const DownArrow = useMemo(
    () => downArrow as React.JSX.ElementType,
    [downArrow],
  );

  const toggleExpanded = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      Animated.timing(animation, {
        toValue: contentHeight,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setExpanded(true));
    }
  };

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContentHeight(event.nativeEvent.layout.height);
  }, []);

  useEffect(() => {
    if (isExpandedAll) {
      setExpanded(false);
    }
  }, [isExpandedAll]);

  useEffect(() => {
    if (expanded) {
      animation.setValue(contentHeight);
    } else {
      animation.setValue(0);
    }
  }, [expanded, contentHeight]);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={toggleExpanded}
        style={[
          styles.collapsedView,
          expanded && isHeaderColor && styles.isHeaderColor,
          collapsedStyle,
        ]}>
        <View style={styles.titleView}>
          {title && (
            <Text allowFontScaling={false} style={[styles.title,titleStyle]}>
              {title}
            </Text>
          )}
          {description && (
            <Text allowFontScaling={false} style={styles.description}>
              {description}
            </Text>
          )}
        </View>
        <View style={styles.iconView}>
          {expanded ? <UpArrow /> : <DownArrow />}
        </View>
      </TouchableOpacity>
      {(expanded || isExpandedAll) && content && (
        <Animated.View
          style={[styles.content, contentStyle]}
          onLayout={handleLayout}>
          {content}
        </Animated.View>
      )}
    </View>
  );
};

export default memo(CollapsibleCard);
CollapsibleCard.defaultProps = {
  upArrow: svgIndex?.topArrow,
  downArrow: svgIndex?.downArroy,
};
