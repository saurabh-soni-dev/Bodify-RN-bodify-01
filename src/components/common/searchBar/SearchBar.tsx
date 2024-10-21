import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './searchBar.style';
interface SearchBarProps {
  containerStyle?: ViewStyle;
  textInputViewStyle?: ViewStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  setValue?: (value: string) => void;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  selectionColor?: string;
  inputStyle?: TextStyle;
  inputProps?: TextInputProps;
  showFilterIcon?: boolean;
  showPlusIcon?: boolean;
  showFolderIcon?: boolean;
  onPressFilter?: () => void;
  onPressPlus?: () => void;
  onPressFolder?: () => void;
  filterButtonStyle?: ViewStyle;
  plusButtonStyle?: ViewStyle;
  folderButtonStyle?: ViewStyle;
  plusIconHeight?: number;
  plusIconWidth?: number;
  searchIcon?: React.JSX.ElementType;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoFocus?: boolean;
}
const SearchBar: FC<SearchBarProps> = ({
  containerStyle,
  textInputViewStyle,
  placeholder,
  placeholderTextColor,
  value,
  setValue,
  onSubmitEditing,
  onEndEditing,
  selectionColor,
  inputStyle,
  inputProps,
  showFilterIcon,
  showPlusIcon,
  showFolderIcon,
  onPressFilter,
  onPressPlus,
  onPressFolder,
  filterButtonStyle,
  plusButtonStyle,
  folderButtonStyle,
  plusIconHeight,
  plusIconWidth,
  searchIcon,
}) => {
  const SearchIcon = searchIcon;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.textInputView, textInputViewStyle]}>
        {SearchIcon && (
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          allowFontScaling={false}
          selectionColor={selectionColor}
          style={[styles.searchInputStyle, inputStyle]}
          {...inputProps}
        />
      </View>
      {showFilterIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.filterButton, filterButtonStyle]}
          onPress={onPressFilter}>
          <SvgIndex.filter />
        </TouchableOpacity>
      )}
      {showPlusIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.filterButton, plusButtonStyle]}
          onPress={onPressPlus}>
          <SvgIndex.plus height={plusIconHeight} width={plusIconWidth} />
        </TouchableOpacity>
      )}
      {showFolderIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.folderButton, folderButtonStyle]}
          onPress={onPressFolder}>
          <SvgIndex.folder />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(SearchBar);
SearchBar.defaultProps = {
  showFilterIcon: false,
  plusIconHeight: 12,
  plusIconWidth: 12,
  selectionColor: color.secondaryBG,
};
