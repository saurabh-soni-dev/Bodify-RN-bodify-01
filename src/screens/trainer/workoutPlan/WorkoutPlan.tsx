import {WeeksDays} from '@card';
import {
  Button,
  ClipCard,
  CollapsibleCard,
  ConfirmationModal,
  Container,
  InputContainer,
} from '@components';
import imageIndex from '@imageIndex';
import {default as SvgIndex} from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WeeksDaysListProps} from '../programName/ProgramName';
import useWorkoutPlan from './useWorkoutPlan';
import styles from './workoutPlan.style';

export interface WorkoutPlanStateProps {
  selectedIndex?: number;
  confirmationModal: boolean;
  paymentType: 'Fixed' | 'Subscription';
  amount: string;
  programId: string;
  programName: string;
  isLoading: boolean;
  programInfo: BodyImprovementData;
  weeksDaysList: WeeksDaysListProps[];
  selectedWeeksDaysList: WeeksDaysListProps[];
  sessionList: any[];
  initialVisibleWeeks: number;
  amountTypeButtons: string[];
}
export interface WorkoutPlanErrorProps {
  amountError?: string;
}
interface BodyImprovementData {
  programName: string;
  programDescription: string;
  videoTrailer: string;
  thumbnail: string;
  numberOfWeeks: number;
  levelDifficulty: string;
  trainingType: string;
  muscles: string[];
  equipment: string[];
  weeks: Week[];
}
interface Week {
  weekId: string;
  week: string;
  day: string;
  sessions: Session[];
}
interface Session {
  sessionId: string;
  sessionName: string;
  exercises: Exercise[];
}
interface Exercise {}

const WorkoutPlan: FC = () => {
  const {
    workoutPlan,
    workoutPlanError,
    updateWorkoutPlanState,
    params,
    isPublish,
    workoutText,
    validatePublishProgram,
    navigateToWorkOutDetails,
    navigateToMyPrograms,
    onChangePaymentType,
    onChangeAmount,
  } = useWorkoutPlan();

  return (
    <View style={styles.container}>
      <Container
        wrapperType="form"
        lable={workoutPlan?.programName ?? 'Workout plan'}
        headerShown
        showBackIcon
        statusBarColor={color.primaryBG}
        scrollContainerStyle={styles.scrollContainer}
        containerViewStyle={styles.scrollContainer}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.mainContainer}>
          <ImageBackground
            style={styles.thumbnailImage}
            source={imageIndex.programsBG}>
            <View style={styles.viewAsUserView}>
              <TouchableOpacity
                onPress={navigateToWorkOutDetails}
                activeOpacity={0.6}
                style={styles.viewAsUserBtn}>
                <Text allowFontScaling={false} style={styles.viewAsUserBtnText}>
                  {workoutText?.viewAsUser}
                </Text>
                <SvgIndex.eyeBorder />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.playTrainerBtn}>
                <Text
                  allowFontScaling={false}
                  style={styles.playTrainerBtnText}>
                  Play Trailer
                </Text>
                <SvgIndex.play />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          {/* Program information */}
          <View style={styles.programInfoView}>
            <ClipCard
              title={`Length : ${workoutPlan?.programInfo?.numberOfWeeks?.toString()} weeks`}
              titleStyle={styles.clipText}
              containerStyle={styles.clipContainer}
            />
            <ClipCard
              title={`Level : ${workoutPlan?.programInfo?.levelDifficulty?.toString()}`}
              titleStyle={styles.clipText}
              containerStyle={styles.clipContainer}
            />
            <ClipCard
              title={`Type : ${workoutPlan?.programInfo?.trainingType?.toString()}`}
              titleStyle={styles.clipText}
              containerStyle={styles.clipContainer}
            />
          </View>
          {/* Muscles View */}
          <View style={styles.muscleView}>
            <View style={styles.muscleRow}>
              <View style={styles.targetIcon}>
                <SvgIndex.target />
              </View>
              <View style={styles.muscleList}>
                {workoutPlan?.programInfo?.muscles?.map(muscles => (
                  <Text
                    style={styles.muscleText}
                    allowFontScaling={false}
                    numberOfLines={1}>
                    {muscles}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.muscleRow}>
              <View style={styles.targetIcon}>
                <SvgIndex.dumbbel />
              </View>
              <View style={styles.muscleList}>
                {workoutPlan?.programInfo?.equipment?.map(equipment => (
                  <Text
                    style={styles.muscleText}
                    allowFontScaling={false}
                    numberOfLines={1}>
                    {equipment}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          {/* Details View */}
          <View style={styles.detailsView}>
            <Text allowFontScaling={false} style={styles.detailsTitle}>
              Details
            </Text>
            <Text allowFontScaling={false} style={styles.detailsDes}>
              {/* {workoutPlan?.programInfo?.programDescription} */}
              {workoutText?.priceInfo}
            </Text>
          </View>
          {/* Price structure */}
          <View style={styles.priceCard}>
            <Text allowFontScaling={false} style={styles.priceStructureText}>
              {workoutText?.priceStructure}
            </Text>
            <View style={styles.priceRow}>
              <View style={styles.columnView}>
                {workoutPlan?.amountTypeButtons?.map((price, index) => (
                  <View style={styles.rowView}>
                    <TouchableOpacity
                      onPress={() => onChangePaymentType(price)}
                      disabled={index !== 0}>
                      {price === workoutPlan.paymentType ? (
                        <SvgIndex.radiofilled />
                      ) : (
                        <SvgIndex.radioEmpty />
                      )}
                    </TouchableOpacity>
                    <Text
                      allowFontScaling={false}
                      style={
                        workoutPlan?.paymentType
                          ? styles.priceTypeText
                          : styles.priceTypeTextUnselected
                      }>
                      {price}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={styles.columnView}>
                <InputContainer
                  placeholder="Enter price in USD"
                  placeholderTextColor={color.primaryText}
                  value={workoutPlan?.amount}
                  onChangeText={onChangeAmount}
                  maxLength={10}
                  keyboardType="number-pad"
                  inputContainerStyle={styles.inputContainer}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  error={workoutPlanError.amountError}
                  errorLabelStyle={styles.errorLabelStyle}
                  inputProps={{returnKeyType: 'done'}}
                />
              </View>
            </View>
            <Text allowFontScaling={false} style={styles.priceDecriptionText}>
              {workoutText?.priceInfo}{' '}
              <Text allowFontScaling={false} style={styles.pricePaymentText}>
                payment policy.
              </Text>
            </Text>
          </View>
        </View>
        {/* Week Days list view */}
        <View>
          <View style={styles.weeksListView}>
            <FlatList
              data={workoutPlan?.weeksDaysList}
              keyExtractor={(_, index) => {
                return `${index}`;
              }}
              contentContainerStyle={styles.contentContainerWeekStyle}
              renderItem={({item, index}) => (
                <WeeksDays key={index} item={item} index={index} />
              )}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={styles.horizontalLine} />
              )}
            />
          </View>

          {/* Sessions list view */}
          <View style={styles.sessionListView}>
            <FlatList
              data={[]}
              showsVerticalScrollIndicator={false}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({item, index}) => (
                <CollapsibleCard
                  title={`Session ${index}`}
                  titleStyle={styles.cardTitle}
                  containerStyle={styles.collapsibleContainer}
                  contentStyle={styles.collapsibleContent}
                  collapsedStyle={styles.collapsedStyle}
                  upArrow={SvgIndex.openDownArrow}
                  downArrow={SvgIndex.viewDownArrow}
                  isHeaderColor={true}
                  content={
                    <View style={styles.contentView}>
                      <View style={styles.sessionRowViewStyle}>
                        <Text
                          allowFontScaling={false}
                          style={styles.decTextStyle}>
                          Overhead Kettlebell Swings
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.repsTextStyle}>
                          Sets: 3 Reps: 12
                        </Text>
                      </View>
                      <View style={styles.sessionRowViewStyle}>
                        <Text
                          allowFontScaling={false}
                          style={styles.decTextStyle}>
                          Overhead Kettlebell Swings
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.repsTextStyle}>
                          Sets: 3 Reps: 12
                        </Text>
                      </View>
                      <View style={styles.sessionRowViewStyleBorderZero}>
                        <Text
                          allowFontScaling={false}
                          style={styles.decTextStyle}>
                          Overhead Kettlebell Swings
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.repsTextStyle}>
                          Sets: 3 Reps: 12
                        </Text>
                      </View>
                    </View>
                  }
                />
              )}
            />
          </View>
        </View>
      </Container>
      <Button
        label="Publish"
        disabled={isPublish}
        inActive={isPublish}
        isLoading={workoutPlan?.isLoading}
        marginHorizontal={68}
        onPress={validatePublishProgram}
        containerStyle={styles.buttonContainer}
      />
      <ConfirmationModal
        visible={workoutPlan?.confirmationModal}
        animationType="slide"
        image={imageIndex.sheetCongratulations}
        titleText={`Congratulations!`}
        titleTextStyle={styles.modalTitle}
        desText={
          params?.typeScreen == 'packages'
            ? workoutText.packageConfirmMessage
            : workoutText.programConfirmMessage
        }
        confirmLabel="Done"
        onConfirm={navigateToMyPrograms}
        confirmBtnStyle={styles.confirmBtnStyle}
        desTextStyle={styles.modalDescriptionText}
        modalInnerContainerStyle={styles.modalStyle}
        imageStyle={styles.modalImageStyle}
      />
    </View>
  );
};

export default WorkoutPlan;
