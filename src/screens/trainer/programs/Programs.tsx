import {ProgramsCard} from '@card';
import {Button, Container, EmptyContainer, SearchBar} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './porgrams.style';
import {programsList} from './programs.const';
import usePrograms from './usePrograms';

const Programs: React.FC = () => {
  const {onNavigateToProgramsDetailsScreen} = usePrograms();
  return (
    <>
      <Container
        wrapperType="simple"
        headerShown
        lable="Programs"
        showBackIcon
        statusBarColor={color.primaryBG}
        scrollContainerStyle={styles.container}
        containerViewStyle={styles.container}
        containerStyle={styles.headerContainerStyle}>
        <SearchBar
          placeholder={`Search programs`}
          placeholderTextColor={color.secondaryBG}
          searchIcon={svgIndex.searchWhite}
          containerStyle={styles.searchStyle}
          inputStyle={styles.searchInputStyle}
        />
        <FlatList
          data={programsList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <ProgramsCard
              key={index}
              item={item}
              index={index}
              showCheckBox
              isSelected={item?.checked}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyContainer />}
          ListFooterComponent={<View style={styles.footerSpace} />}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          initialNumToRender={10}
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
          type="Solid"
          label="Add"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
          onPress={onNavigateToProgramsDetailsScreen}
        />
      </View>
    </>
  );
};

export default Programs;
