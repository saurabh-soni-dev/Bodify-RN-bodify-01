import { MyProgramsCard } from '@card';
import {
  Button,
  Container, EmptyContainer, SearchBar
} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React from 'react';
import { FlatList, View } from 'react-native';
import { myPackagesData } from './packages.const';
import styles from './packages.style';
import usePackages from './usePackages';

const Packages: React.FC = () => {
  const { onNavigateToCreateProgramScreen } = usePackages();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        lable="My Programs"
        statusBarColor={color.secondaryBG}
        scrollContainerStyle={styles.screenBackgroundContainerStyle}
        containerViewStyle={styles.screenBackgroundContainerStyle}
        containerStyle={styles.headerContainerStyle}>
        <SearchBar
          placeholder={`Search programs`}
          placeholderTextColor={color.secondaryBG}
          containerStyle={styles.searchBarStyle}
          searchIcon={svgIndex.searchWhite}
        />
        <FlatList
          data={myPackagesData}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          ListEmptyComponent={<EmptyContainer />}
          renderItem={({ item, index }) => (
            <MyProgramsCard
              key={index}
              item={item}
              index={index}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={styles.footerSpace} />}
        />
      </Container>
      <View style={styles.btnView}>
        <Button
          type="Outline"
          label="Cancel"
          containerStyle={styles.cancelBtnStyle}
          nameTextStyle={styles.cancelBtnText}
        />
        <Button
          leftIcon={svgIndex.plus}
          type="Solid"
          label="Create Packages"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
          onPress={onNavigateToCreateProgramScreen}
        />
      </View>
    </>
  );
};

export default Packages;
