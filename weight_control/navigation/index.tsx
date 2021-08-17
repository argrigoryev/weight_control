import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from './types';
import FormScreen from '../screens/FormScreen';
import ResultScreen from '../screens/ResultScreen';
import { Strings } from '../localization/Strings';
import NormalWeightScreen from '../screens/NormalWeightScreen';
import KcalScreen from '../screens/KcalScreen';
import IndexScreen from '../screens/IndexScreen';
import KcalMoreScreen from '../screens/KcalMoreScreen';
import ProteinMoreScreen from '../screens/ProteinMoreScreen';
import FatsMoreScreen from '../screens/FatsMoreScreen';
import CarbohydratesMoreScreen from '../screens/CarbohydratesMoreScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName='FormScreen'
    >
        <Stack.Screen name='FormScreen' component={FormScreen} options={{ title: Strings.get('data_input_title') }} />
        <Stack.Screen name='ResultScreen' component={ResultScreen} options={{ title: Strings.get('result_title') }} />
        <Stack.Screen name='NormalWeightScreen' component={NormalWeightScreen} options={{ title: Strings.get('normal_weight_title') }} />
        <Stack.Screen name='KcalScreen' component={KcalScreen} options={{ title: Strings.get('kilocalories_title') }} />
        <Stack.Screen name='IndexScreen' component={IndexScreen} options={{ title: Strings.get('quetelet_index_title') }} />
        <Stack.Screen name='KcalMoreScreen' component={KcalMoreScreen} options={{ title: Strings.get('calories_title') }} />
        <Stack.Screen name='ProteinMoreScreen' component={ProteinMoreScreen} options={{ title: Strings.get('protein_title') }} />
        <Stack.Screen name='FatsMoreScreen' component={FatsMoreScreen} options={{ title: Strings.get('fats_title') }} />
        <Stack.Screen name='CarbohydratesMoreScreen' component={CarbohydratesMoreScreen} options={{ title: Strings.get('carbohydrates_title') }} />
    </Stack.Navigator>
  );
}
