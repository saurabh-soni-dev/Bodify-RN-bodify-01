import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { myProgramStackScreens } from './myProgramStack.const';
import { MyProgramStackParams } from './myProgramStackParams';

const Stack = createNativeStackNavigator<MyProgramStackParams>();
const MyProgramStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyPrograms"
      screenOptions={{
        headerShown: false,
      }}>
      {myProgramStackScreens?.map(screen => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name as keyof MyProgramStackParams}
          component={screen?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MyProgramStack;
