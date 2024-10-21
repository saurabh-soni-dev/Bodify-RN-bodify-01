import {FilterOptionsShow} from '@card';
import {Button, Container, EmptyContainer, Loader} from '@components';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './filterOptions.style';
import useFilterOptions from './useFilterOptions';

export interface FilterOptionsState {
  muscleList: MuscleListItemProps[];
  isLoading: boolean;
  levelList: MuscleListItemProps[];
}
export interface MuscleListItemProps {
  id: number;
  title: string;
  checked: boolean;
}

const FilterOptions: FC = () => {
  const {
    onSelectMuscle,
    filterOptions,
    params,
    isSaveButton,
    onClearAllFilters,
    navigateGoBackScreen,
    onSaveNavigateToFilterScreen,
  } = useFilterOptions();
  return (
    <View style={styles.screenBackgroundStyle}>
      <Container
        wrapperType="scroll"
        headerShown
        showBackIcon
        lable={
          params?.filterTypeOptions == 'LevelPrograms'
            ? 'Level'
            : params?.filterTypeOptions
        }
        rightButtonText="Clear All"
        onPressBackIcon={navigateGoBackScreen}
        onPressRightButton={onClearAllFilters}
        scrollContainerStyle={styles.screenBackgroundStyle}
        containerViewStyle={styles.screenBackgroundStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          {filterOptions?.isLoading ? (
            <Loader />
          ) : (
            <FlatList
              data={filterOptions?.muscleList}
              contentContainerStyle={styles.contentContainerStyle}
              keyExtractor={(_, index) => `${index}`}
              ListEmptyComponent={<EmptyContainer />}
              renderItem={({item, index}) => (
                <FilterOptionsShow
                  index={index}
                  item={item}
                  onPress={() => onSelectMuscle(index)}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </Container>
      <Button
        onPress={onSaveNavigateToFilterScreen}
        label="Save"
        containerStyle={styles.bottonView}
        disabled={isSaveButton}
        inActive={isSaveButton}
      />
    </View>
  );
};

export default FilterOptions;
