import { Button, Container } from '@components';
import React from 'react';
import { styles } from './duplicateSession.style';
import { FlatList, Text, View } from 'react-native';
import color from '@theme/color';
import { WeekDuplicateSessionData } from './duplicateSession.const';
import { WeekCard } from '@card';

const DuplicateSession: React.FC = () => {
  return (
    <View style={styles.container}>
      <Container
        wrapperType="scroll"
        headerShown
        showBackIcon
        lable='Duplicate Session'
        statusBarColor={color.primaryBG}
        scrollContainerStyle={styles.screenBackgroundStyle}
        containerViewStyle={styles.screenBackgroundStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 1</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                  selectIndex={0}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 2</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 3</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 1</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                  selectIndex={0}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 2</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 1</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                  selectIndex={0}
                />
              )}
            />
          </View>
          <View style={styles.weekMainShowSessionView}>
            <View style={styles.weekRowViewManage}>
              <Text allowFontScaling={false} style={styles.weekTextStyle}>Week 2</Text>
            </View>
            <FlatList
              data={WeekDuplicateSessionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <WeekCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => { }}
                />
              )}
            />
          </View>
        </View>
      </Container>
      <Button
        onPress={() => { }}
        label="Duplicate session"
        containerStyle={styles.bottonView}
        marginHorizontal={68}
      />
    </View>
  );
};

export default DuplicateSession;
