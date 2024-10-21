import {RootStackParams} from '@navigation/stacks/rootStackParams';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useAuthNavigation = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): NativeStackNavigationProp<RootStackParams, T> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, T>>();
  return navigation;
};

export const useAuthRoute = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): RouteProp<RootStackParams, T> => {
  const route = useRoute<RouteProp<RootStackParams, T>>();
  return route;
};
