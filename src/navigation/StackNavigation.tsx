import React from 'react'; 
import { HomeScreen } from '../screen/HomeScreen';
import { DeckBuilderScreen } from '../screen/DeckBuilderScreen';
import { TcgPlayerScreen } from '../screen/TcgPlayerScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
export const StackNavigation = () => {

    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  )
}
