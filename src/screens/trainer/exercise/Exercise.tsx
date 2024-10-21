import {ProgramsCard} from '@card';
import {
  Button,
  CustomStatusbar,
  EmptyContainer,
  Header,
  Loader,
  ModalComponent,
  SearchBar,
} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import styles from './exercise.style';
import useExercise from './useExercise';

export interface ExerciseProps {
  exerciseList: exercisesItemProps[];
  filteredExerciseList: exercisesItemProps[];
  showInstructionModal: boolean;
  isVideoPaused: boolean;
  selectedExercises: exercisesItemProps[];
  isLoading: boolean;
  isRefreshing: boolean;
  searchedExercise: string;
  exerciseModalData: exerciseModalDataProps;
  exerciseVideoSource: exerciseVideoSource;
}
interface exerciseVideoSource {
  uri: string;
  headers: {
    Authorization: string;
  };
}
export interface exercisesItemProps {
  exercisesId?: string;
  videoId?: string;
  title?: string;
  ownerType?: string;
  mainMuscle?: string;
  secondaryMuscle?: string;
  tags?: string;
  equipment?: string;
  defaultParametersSets?: string;
  defaultParametersReps?: string;
  trainerInstructions?: string;
  checked?: boolean;
}
export interface exerciseModalDataProps {
  exercisesId?: string;
  videoId?: string;
  title?: string;
  ownerType?: string;
  mainMuscle?: string;
  secondaryMuscle?: string;
  tags?: string;
  equipment?: string;
  defaultParametersSets?: string;
  defaultParametersReps?: string;
  trainerInstructions?: string;
  currentExercise?: number;
  totalExercises?: number;
}

export interface FilteredExercisesItemProps {
  mainMuscle: string;
  ownerType: 'instruct' | 'bodify';
  type: string;
}

const Exercise: FC = () => {
  const {
    exerciseState,
    isAddEnabled,
    onRefresh,
    onSearchExercise,
    onSelectExercise,
    navigateToFilterScreen,
    navigateToCreateNewExercise,
    openInstructionModal,
    onCloseInstructionModal,
    navigateToBodyWeightOnlyScreen,
    variations,
    navigateToBackScreen,
  } = useExercise();
  return (
    <>
      <View style={styles.container}>
        <CustomStatusbar
          backgroundColor={color.primaryBG}
          barStyle="dark-content"
        />
        <Header
          lable="Exercise"
          showBackIcon
          containerStyle={styles.headerStyle}
          onPressBackIcon={navigateToBackScreen}
        />
        <SearchBar
          placeholder={`Search Exercises`}
          placeholderTextColor={color.secondaryBG}
          showPlusIcon={true}
          showFilterIcon={true}
          containerStyle={styles.searchBarContainer}
          searchIcon={svgIndex.searchWhite}
          onPressFilter={navigateToFilterScreen}
          onPressPlus={navigateToCreateNewExercise}
          value={exerciseState?.searchedExercise}
          setValue={onSearchExercise}
          selectionColor={color.secondaryBG}
          autoCorrect={true}
        />
        <View style={styles.listView}>
          {exerciseState?.isLoading ? (
            <Loader />
          ) : (
            <FlatList
              data={exerciseState?.exerciseList}
              keyExtractor={(_, index) => {
                return `${index}`;
              }}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({item, index}) => {
                const isSelected = exerciseState?.selectedExercises?.some(
                  exercise => exercise.exercisesId == item.exercisesId,
                );
                return (
                  <ProgramsCard
                    key={index}
                    item={item}
                    index={index}
                    rightIcon={svgIndex.info}
                    onPress={() => onSelectExercise(item)}
                    onPressRightIcon={() => openInstructionModal(item, index)}
                    isSelected={isSelected}
                  />
                );
              }}
              showsVerticalScrollIndicator={false}
              refreshing={exerciseState?.isRefreshing}
              refreshControl={
                <RefreshControl
                  tintColor={color.primary}
                  refreshing={exerciseState?.isRefreshing}
                  onRefresh={onRefresh}
                />
              }
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              initialNumToRender={10}
            />
          )}
        </View>
        <View style={styles.bottonContainer}>
          <Button
            label="Add"
            inActive={!isAddEnabled}
            disabled={!isAddEnabled}
            onPress={navigateToBodyWeightOnlyScreen}
            marginHorizontal={68}
          />
        </View>
      </View>

      {/* Exercise instructions modal */}
      <ModalComponent
        statusBar
        animationType="slide"
        visible={exerciseState?.showInstructionModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.modelTitleView}>
            <Text
              style={styles.modalTitleText}
              allowFontScaling={false}
              numberOfLines={1}>
              {`${exerciseState?.exerciseModalData?.totalExercises}/${exerciseState?.exerciseModalData?.currentExercise} ${exerciseState?.exerciseModalData?.title}`}
            </Text>
            <TouchableOpacity
              onPress={onCloseInstructionModal}
              activeOpacity={0.6}
              style={styles.closeIconView}>
              <svgIndex.close />
            </TouchableOpacity>
          </View>
          <View style={styles.videoCard}>
            <Video
              source={exerciseState?.exerciseVideoSource}
              style={styles.videoPlayer}
              resizeMode="cover"
              controls={true}
            />
          </View>
          <View style={styles.desView}>
            <View style={styles.closeIconView}>
              <svgIndex.body />
            </View>
            <Text
              style={styles.desText}
              allowFontScaling={false}
              numberOfLines={1}>
              {`${exerciseState?.exerciseModalData?.mainMuscle} & ${exerciseState?.exerciseModalData?.secondaryMuscle}, ${exerciseState?.exerciseModalData?.tags}, ${exerciseState?.exerciseModalData?.equipment}`}
            </Text>
          </View>
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.scrollContentContainerStyle}
            indicatorStyle={'white'}>
            <Text allowFontScaling={false} style={styles.instructionText}>
              Instructions:
            </Text>
            <View>
              <Text allowFontScaling={false} style={styles.instructionText}>
                {exerciseState?.exerciseModalData?.trainerInstructions}
              </Text>
            </View>
          </ScrollView>
          <View style={styles.bottomCard}>
            <Text allowFontScaling={false} style={styles.bottomCardTitle}>
              {variations?.title}
            </Text>
            <Text allowFontScaling={false} style={styles.bottomCardDes}>
              {variations?.description}
            </Text>
          </View>
        </View>
      </ModalComponent>
    </>
  );
};

export default Exercise;
