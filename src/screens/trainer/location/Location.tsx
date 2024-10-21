import {LanguageCard} from '@card';
import {
  Button,
  Container,
  EmptyContainer,
  Loader,
  SearchBar,
} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import {FC} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {styles} from './location.style';
import useLocation from './useLocation';

export interface LocationProps {
  locationList: LocationListProps[];
  selectLocation: string;
  isSelected: boolean;
  searchLocationData: LocationListProps[];
  search: string;
  isLoading: boolean;
  isRefreshing: boolean;
}

export interface LocationListProps {
  id: number;
  title: string;
  country: string;
  selected: boolean;
}

const Location: FC = () => {
  const {
    locationInfo,
    onRefreshLocationApi,
    onSelectLocation,
    onSaveChanges,
    onSearchFilterFunction,
  } = useLocation();
  return (
    <>
      <Container wrapperType="simple" headerShown showBackIcon lable="Location">
        <View style={styles.mainContainer}>
          <SearchBar
            placeholder={`Search`}
            searchIcon={svgIndex.searchWhite}
            placeholderTextColor={color.secondaryBG}
            containerStyle={styles.searchBarStyle}
            value={locationInfo?.search}
            setValue={onSearchFilterFunction}
            selectionColor={color.secondaryBG}
            autoCorrect={true}
          />
          <View style={styles.listView}>
            {locationInfo?.isLoading ? (
              <Loader size={'large'} color={color.primaryText} />
            ) : (
              <FlatList
                data={locationInfo?.locationList}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(_, index) => {
                  return `${index}`;
                }}
                renderItem={({item, index}) => (
                  <LanguageCard
                    key={index}
                    item={item}
                    index={index}
                    onPress={() => onSelectLocation(item?.title)}
                    value={locationInfo?.selectLocation}
                  />
                )}
                showsVerticalScrollIndicator={false}
                 ListEmptyComponent={
                  <EmptyContainer message={'Location list empty !!'} />
                }
                refreshing={locationInfo?.isRefreshing}
                refreshControl={
                  <RefreshControl
                    tintColor={color.primaryText}
                    refreshing={locationInfo?.isRefreshing}
                    onRefresh={onRefreshLocationApi}
                  />
                }
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="handled"
                initialNumToRender={10}
              />
            )}
          </View>
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          disabled={!locationInfo?.isSelected}
          inActive={!locationInfo?.isSelected}
          type="Solid"
          label="Save changes"
          containerStyle={styles.createPackagesBtnStyle}
          onPress={onSaveChanges}
        />
      </View>
    </>
  );
};

export default Location;
