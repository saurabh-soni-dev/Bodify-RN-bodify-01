import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const percentageHeight = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};

const percentageWidth = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};

export {percentageHeight, percentageWidth};
