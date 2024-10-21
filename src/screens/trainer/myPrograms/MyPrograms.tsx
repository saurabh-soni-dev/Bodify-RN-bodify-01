import {MyProgramsCard} from '@card';
import {
  BottomSheet as BottomSheetCard,
  Button,
  CustomStatusbar,
  EmptyContainer,
  ModalComponent,
  SearchBar,
} from '@components';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import ImageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProgramsItemProps} from 'src/components/card/myProgramsCard/MyProgramsCard';
import {bottomSheetList, threeDotBottomSheetList} from './myPrograms.const';
import styles from './myPrograms.style';
import useMyPrograms from './useMyPrograms';

export interface MyProgramsStateProps {
  myProgramsList: ProgramsItemProps[];
  filterProgramsList: ProgramsItemProps[];
  listType: 'Programs' | 'Packages';
  searchedProgram: string;
  deleteModal: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  maxWeeks?: number;
  maxPrice?: number;
  editConfirmationModal: boolean;
  programId: string;
  bottomSheetType: string;
  programStatus: string;
}
export interface ProgramListItemProps {
  date: string;
  level: string;
  numberOfWeeks: number;
  price: number;
  retention: number;
  status: string;
}
export interface MuscleListItemProps {
  id: number;
  title: string;
  checked: boolean;
}
export interface FilterDataPass {
  library?: MuscleListItemProps[];
  type?: MuscleListItemProps[];
  mainMuscle?: MuscleListItemProps[];
  level?: MuscleListItemProps[];
  status?: MuscleListItemProps[];
  price?: number;
  numberWeeks?: number;
  lowWeek?: number;
  highWeek?: number;
  highPrice?: number;
  lowPrice?: number;
}

const MyPrograms: FC = () => {
  const {
    programsState,
    sheetRef,
    isPrograms,
    params,
    onRefreshMyPrograms,
    managePackagesList,
    onSelectPackages,
    onSearchPrograms,
    openBottomSheet,
    navigateToCreatePackages,
    navigateToCreateProgram,
    navigateToMyProgramsFilter,
    navigateToMyWorkoutLibrary,
    onBottomSheet,
    showEditConfirmationModal,
    isCreatePackages,
    snapPoints,
    onThreeDotSheet,
  } = useMyPrograms();
  return (
    <>
      <View style={styles.container}>
        <CustomStatusbar
          backgroundColor={color.primaryBG}
          barStyle="dark-content"
        />
        <View style={styles.contentWrapper}>
          <View style={styles.headingView}>
            <Text allowFontScaling={false} style={styles.headingText}>
              My Programs
            </Text>
            <TouchableOpacity
              style={styles.threeDotIcon}
              activeOpacity={0.6}
              onPress={() => openBottomSheet('threeDot')}>
              <SvgIndex.ellipsis />
            </TouchableOpacity>
          </View>
          <SearchBar
            placeholder={`Search programs`}
            placeholderTextColor={color.secondaryBG}
            showFilterIcon={true}
            showFolderIcon={false}
            containerStyle={styles.searchContainerStyle}
            searchIcon={SvgIndex.searchWhite}
            onPressFilter={navigateToMyProgramsFilter}
            onPressFolder={navigateToMyWorkoutLibrary}
            value={programsState?.searchedProgram}
            setValue={onSearchPrograms}
            selectionColor={color.secondaryText}
            autoCorrect={true}
          />
          {programsState?.listType == 'Programs' && (
            <View style={styles.btnRowView}>
              <TouchableOpacity
                activeOpacity={0.8}
                disabled={isCreatePackages}
                style={[
                  styles.btnOutlineStyle,
                  {
                    borderColor: isCreatePackages
                      ? color.secondaryText
                      : color.primary,
                  },
                ]}
                onPress={() => managePackagesList('Packages')}>
                <SvgIndex.plusPurple
                  stroke={
                    isCreatePackages ? color.secondaryText : color.primary
                  }
                />
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.btnOutlineText,
                    {
                      color: isCreatePackages
                        ? color.secondaryText
                        : color.primary,
                    },
                  ]}>
                  Create new Package
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnSolidStyle}
                onPress={() => navigateToCreateProgram()}>
                <SvgIndex.plus />
                <Text allowFontScaling={false} style={styles.btnSolidText}>
                  Create new Program
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.listView}>
            {!programsState?.myProgramsList?.length && !params?.filterData ? (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.sessionMainView}
                onPress={() => navigateToCreateProgram()}>
                <SvgIndex.sessionSheet />
                <Text
                  allowFontScaling={false}
                  style={styles.createNewProgramsText}>
                  You haven't created any{'\n'} programs so far. Click on{' '}
                  <Text style={styles.createNewProgramsSelectText}>
                    Create new program
                  </Text>{' '}
                  button{'\n'} to start adding programs here
                </Text>
              </TouchableOpacity>
            ) : (
              <FlatList
                data={programsState?.myProgramsList}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={(_, index) => {
                  return `${index}`;
                }}
                renderItem={({item, index}) => (
                  <MyProgramsCard
                    key={`${item?.programId}`}
                    item={item}
                    index={index}
                    onPress={() => {
                      isPrograms
                        ? openBottomSheet('', item?.programId, item.status)
                        : onSelectPackages(item?.programId);
                    }}
                    showCheckBox={!isPrograms && item.status == 'Active'}
                    isSelected={item?.isChecked}
                    showStatus={
                      isPrograms ? isPrograms : item.status !== 'Active'
                    }
                    anotherStatusDeActive={
                      !isPrograms && item.status !== 'Active'
                    }
                  />
                )}
                showsVerticalScrollIndicator={false}
                refreshing={programsState?.isRefreshing}
                refreshControl={
                  <RefreshControl
                    tintColor={color.primaryText}
                    refreshing={programsState?.isRefreshing}
                    onRefresh={onRefreshMyPrograms}
                  />
                }
                ListEmptyComponent={
                  <EmptyContainer message="Program Not Exist!" />
                }
                keyboardDismissMode="on-drag"
                initialNumToRender={10}
                windowSize={10}
                getItemLayout={(_, index) => ({
                  length: 162,
                  offset: 162 * index,
                  index,
                })}
              />
            )}
          </View>
          {programsState?.listType == 'Packages' && (
            <View style={styles.btnView}>
              <Button
                type="Outline"
                label="Cancel"
                containerStyle={styles.cancelBtnStyle}
                nameTextStyle={styles.cancelBtnText}
                onPress={() => managePackagesList('Programs')}
              />
              <Button
                type="Solid"
                label="Create Package"
                containerStyle={styles.createPackagesBtnStyle}
                nameTextStyle={styles.createPackagesStyle}
                onPress={navigateToCreatePackages}
                leftIcon={SvgIndex.plus}
              />
            </View>
          )}
        </View>
      </View>
      <ModalComponent
        visible={programsState?.editConfirmationModal}
        animationType="fade"
        containerStyle={styles.editModal}
        statusBar
        onRequestClose={showEditConfirmationModal}>
        <View style={styles.editModalMainContainer}>
          <View style={styles.editModalIcon}>
            <SvgIndex.editProgram />
          </View>
          <Text allowFontScaling={false} style={styles.editModalDes}>
            Modifications made to the editing{'\n'} program will affect all
            subscribers, not{'\n'} just new ones going forward.
          </Text>
          <Text allowFontScaling={false} style={styles.editModalDesContinue}>
            Continue?
          </Text>
          <View style={styles.editModalBtn}>
            <View style={styles.editModalBtnView}>
              <Button
                label="Yes"
                type="Solid"
                containerStyle={styles.editModalYesBtn}
                nameTextStyle={styles.editModalYesBtnText}
                onPress={() => navigateToCreateProgram('update')}
              />
            </View>
            <View
              style={[styles.editModalBtnView, styles.editModalCancelBtnView]}>
              <Button
                label="Cancel"
                type="Solid"
                containerStyle={styles.editModalCancelBtn}
                nameTextStyle={styles.editModalCancelBtnText}
                onPress={showEditConfirmationModal}
              />
            </View>
          </View>
        </View>
      </ModalComponent>
      <ModalComponent
        visible={programsState?.deleteModal}
        animationType="fade"
        containerStyle={styles.modalContainer}
        statusBar>
        <View style={styles.modalInnerContainer}>
          <Image
            source={ImageIndex.deleteAccount}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <Text allowFontScaling={false} style={styles.modalDesText}>
            Are you sure you want to delete{' '}
            <Text allowFontScaling={false} style={styles.modalDestTitleText}>
              “Program Name”?
            </Text>
          </Text>
          <Text allowFontScaling={false} style={styles.modalDescriptionText}>
            Deleting the program will remove the program from the marketplace
            but those who are subscribes can still do it.
          </Text>
          <View style={styles.btnView}>
            <Button
              label="Yes"
              type="Solid"
              containerStyle={styles.btnCancelContainer}
              nameTextStyle={styles.nameTextStyle}
            />
            <Button
              label="Cancel"
              type="Solid"
              containerStyle={styles.btnContainer}
              nameTextStyle={styles.nameTextButtonCancelStyle}
            />
          </View>
        </View>
      </ModalComponent>
      <BottomSheetModalProvider>
        <BottomSheetModal
          index={0}
          ref={sheetRef}
          snapPoints={snapPoints}
          enableOverDrag={false}
          handleStyle={styles.handleStyle}
          backgroundStyle={styles.backgroundStyle}
          handleIndicatorStyle={styles.handleIndicatorStyle}>
          <BottomSheetView>
            {programsState?.bottomSheetType === 'threeDot'
              ? threeDotBottomSheetList?.map((item, index) => (
                  <BottomSheetCard
                    key={item?.id}
                    item={item}
                    index={index}
                    onPress={() => onThreeDotSheet(item.id)}
                  />
                ))
              : programsState.programStatus == 'draft'
              ? bottomSheetList
                  .filter(item => item.title != 'Deactivate')
                  ?.map((item, index) => (
                    <BottomSheetCard
                      key={item?.id}
                      item={item}
                      index={index}
                      onPress={() => onBottomSheet(item?.id)}
                    />
                  ))
              : bottomSheetList?.map((item, index) => (
                  <BottomSheetCard
                    key={item?.id}
                    item={item}
                    index={index}
                    onPress={() => onBottomSheet(item?.id)}
                  />
                ))}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default MyPrograms;
