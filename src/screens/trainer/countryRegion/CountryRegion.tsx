import {LanguageCard} from '@card';
import {Button, Container, EmptyContainer, SearchBar} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './countryRegion.style';
import useCountryRegion from './useCountryRegion';

export interface CountryRegionProps {
  regionList: RegionListProps[];
  filterRegionList: RegionListProps[];
  region: string;
  isSelected: boolean;
}

export interface RegionListProps {
  id: number;
  title: string;
  selected: boolean;
}

const CountryRegion: FC = () => {
  const {countryRegionInfo, onSelectRegion, onSearchRegions} =
    useCountryRegion();
  return (
    <>
      <Container
        wrapperType="simple"
        headerShown
        showBackIcon
        lable="Country/Region">
        <View style={styles.mainContainer}>
          <SearchBar
            placeholder={`Search`}
            placeholderTextColor={color.secondaryBG}
            containerStyle={styles.containerStyle}
            searchIcon={svgIndex.searchWhite}
            value={countryRegionInfo?.region}
            setValue={(value: string) => onSearchRegions(value)}
          />
          <View style={styles.listContainer}>
            <FlatList
              data={countryRegionInfo?.regionList}
              contentContainerStyle={styles.contentContainerStyle}
              keyExtractor={(_, index) => {
                return `${index}`;
              }}
              renderItem={({item, index}) => (
                <LanguageCard
                  key={index}
                  item={item}
                  index={index}
                  onPress={() => onSelectRegion(item?.id)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyContainer />}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              initialNumToRender={10}
            />
          </View>
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          type="Solid"
          label="Save changes"
          disabled={!countryRegionInfo?.isSelected}
          inActive={!countryRegionInfo?.isSelected}
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
        />
      </View>
    </>
  );
};

export default CountryRegion;
