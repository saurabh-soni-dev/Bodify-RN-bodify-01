import {MyWorkoutLibraryCard} from '@card';
import {
  ConfirmationModal,
  CustomStatusbar,
  EmptyContainer,
  Header,
  Loader,
  SearchBar,
} from '@components';
import imageIndex from '@imageIndex';
import SvgIndex, {default as svgIndex} from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {
  FlatList,
  ImageProps,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import styles from './myWorkoutLibrary.style';
import useMyWorkoutLibrary from './useMyWorkoutLibrary';

export interface MyWorkoutLibraryProps {
  workoutList: workoutListProps[];
  filteredWorkoutList: workoutListProps[];
  showSelectedCardDetails: boolean;
  showDeleteModal: boolean;
  selectedIndex?: number;
  isLoading: boolean;
  selectedExercise: workoutListProps;
  searchedExercise: string;
  exerciseVideo: exerciseVideoSource;
}
interface exerciseVideoSource {
  uri: string;
  headers: {
    Authorization: string;
  };
}
export interface workoutListProps {
  bgImage?: ImageProps;
  selectedBgImage?: ImageProps;
  exercisesId?: string;
  trainerInstructions?: string;
  videoId?: string;
  created?: string;
  defaultParametersReps?: string;
  defaultParametersSets?: string;
  equipment?: string;
  mainMuscle?: string;
  type?: string;
  ownerType?: string;
  secondaryMuscle?: string;
  tags?: string;
  title?: string;
}
export interface FilterDataItem {
  mainMuscle: string;
  type: string;
}

const MyWorkoutLibrary: FC = () => {
  const {
    workoutLibrary,
    workoutLibraryText,
    updateWorkoutLibraryState,
    onSelectWorkout,
    onNavigationToAddNewExercise,
    navigateToFilterScreen,
    onSearchExercise,
  } = useMyWorkoutLibrary();
  return (
    <>
      <View style={styles.container}>
        <CustomStatusbar
          barStyle="dark-content"
          backgroundColor={color.primaryBG}
        />
        <Header
          lable={workoutLibraryText?.screenTitle}
          showBackIcon
          containerStyle={styles.headerStyle}
        />
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyboardShouldPersistTaps="handled"
          alwaysBounceVertical={false}>
          <SearchBar
            placeholder={workoutLibraryText?.searchBarPlaceholder}
            placeholderTextColor={color.secondaryBG}
            showPlusIcon={true}
            showFilterIcon={true}
            containerStyle={styles.searchBarContainer}
            onPressPlus={onNavigationToAddNewExercise}
            onPressFilter={navigateToFilterScreen}
            searchIcon={svgIndex.searchWhite}
            value={workoutLibrary?.searchedExercise}
            setValue={onSearchExercise}
          />
          <View style={styles.coachInstructionContainer}>
            {workoutLibrary?.showSelectedCardDetails ? (
              <View>
                <View style={styles.headerView}>
                  <Text style={styles.backSquatText} allowFontScaling={false}>
                    {workoutLibraryText?.bannerTitle}
                  </Text>
                  <View style={styles.iconsRow}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.editIconButton}>
                      <SvgIndex.editLine />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.deleteIconButton}
                      onPress={() =>
                        updateWorkoutLibraryState('showDeleteModal', true)
                      }>
                      <SvgIndex.deleteSmal />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.videoView}>
                  <Video
                    source={workoutLibrary?.exerciseVideo}
                    style={styles.videoImageStyle}
                    resizeMode="cover"
                    controls={true}
                  />
                </View>
                <View style={styles.detailsView}>
                  <Text allowFontScaling={false} style={styles.coachTextStyle}>
                    {workoutLibraryText?.instructionTitle}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={styles.descriptionTextStyle}>
                    {workoutLibrary?.selectedExercise?.trainerInstructions}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.emptyView}>
                <Text style={styles.selectText} allowFontScaling={false}>
                  {workoutLibraryText?.emptyInstruction}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.lisView}>
            {workoutLibrary?.isLoading ? (
              <Loader />
            ) : (
              <FlatList
                data={workoutLibrary?.workoutList}
                keyExtractor={(_, index) => {
                  return `${index}`;
                }}
                contentContainerStyle={styles.contentContainerStyle}
                columnWrapperStyle={styles.cardSpaceStyle}
                numColumns={2}
                ListEmptyComponent={<EmptyContainer />}
                renderItem={({item, index}) => (
                  <MyWorkoutLibraryCard
                    key={index}
                    item={item}
                    index={index}
                    onPress={() => onSelectWorkout(index, item)}
                    selectedItemIndex={workoutLibrary?.selectedIndex}
                  />
                )}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="handled"
                initialNumToRender={10}
              />
            )}
          </View>
        </ScrollView>
      </View>
      <ConfirmationModal
        visible={workoutLibrary?.showDeleteModal}
        animationType="slide"
        image={imageIndex.deleteAccount}
        titleText={workoutLibraryText?.modalTitle}
        desText={workoutLibraryText?.modalDescription}
        cancelLabel={workoutLibraryText?.cancelLabel}
        confirmLabel={workoutLibraryText?.confirmLabel}
        onConfirm={() => updateWorkoutLibraryState('showDeleteModal', false)}
        onCancel={() => updateWorkoutLibraryState('showDeleteModal', false)}
        confirmBtnStyle={styles.confirmBtnStyle}
        cancelBtnStyle={styles.cancelBtnStyle}
        cancelLableStyle={styles.cancelLableStyle}
        btnViewStyle={styles.btnViewStyle}
        containerStyle={styles.modalContainerStyle}
      />
    </>
  );
};

export default MyWorkoutLibrary;
