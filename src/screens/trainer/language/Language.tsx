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
import React, {FC} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {styles} from './language.style';
import useLanguage from './useLanguage';

export interface LanguageProps {
  languageList: LanguageListProps[];
  selectLanguage: string;
  isSelected: boolean;
  searchLanguageData: LanguageListProps[];
  search: string;
  isLoading: boolean;
  isRefreshing: boolean;
}
export interface LanguageListProps {
  id: number;
  title: string;
  country: string;
  selected: boolean;
}

const Language: FC = () => {
  const {
    languageInfo,
    onRefreshLanguageApi,
    onSelectLanguage,
    onSaveChanges,
    onSearchFilterFunction,
  } = useLanguage();
  return (
    <>
      <Container wrapperType="simple" headerShown showBackIcon lable="Language">
        <View style={styles.mainContainer}>
          <SearchBar
            placeholder={`Search`}
            placeholderTextColor={color.secondaryBG}
            containerStyle={styles.containerStyle}
            searchIcon={svgIndex.searchWhite}
            value={languageInfo?.search}
            setValue={onSearchFilterFunction}
            selectionColor={color.secondaryBG}
            autoCorrect={true}
          />
          <View style={styles.listContainer}>
            {languageInfo?.isLoading ? (
              <Loader />
            ) : (
              <FlatList
                data={languageInfo?.languageList}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(_, index) => {
                  return `${index}`;
                }}
                renderItem={({item, index}) => (
                  <LanguageCard
                    key={index}
                    item={item}
                    index={index}
                    onPress={() => onSelectLanguage(item?.title)}
                    value={languageInfo?.selectLanguage}
                  />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                  <EmptyContainer message={'Language list empty !!'} />
                }
                refreshing={languageInfo?.isRefreshing}
                refreshControl={
                  <RefreshControl
                    tintColor={color.primaryText}
                    refreshing={languageInfo?.isRefreshing}
                    onRefresh={onRefreshLanguageApi}
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
          type="Solid"
          label="Save changes"
          disabled={!languageInfo?.isSelected}
          inActive={!languageInfo?.isSelected}
          containerStyle={styles.createPackagesBtnStyle}
          onPress={onSaveChanges}
        />
      </View>
    </>
  );
};

export default Language;
