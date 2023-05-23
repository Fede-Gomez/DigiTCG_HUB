import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeNavigation } from '../constants/typesNavigation';
import { TopTapNavigation } from './TopTabNavigation';
import { CardSelectedScreen, DeckSelectedScreen, LoginScreen, SignUpScreen } from '../screen';

const Stack = createNativeStackNavigator()

export const StackGameNavigation = ()=>{
    return (
      <Stack.Navigator initialRouteName={TypeNavigation.game.homeGameTopBar}
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name={TypeNavigation.game.homeGameTopBar} component={TopTapNavigation} />
        <Stack.Screen name={TypeNavigation.game.cardSelected} component={CardSelectedScreen} />
        <Stack.Screen name={TypeNavigation.game.deckSelected} component={DeckSelectedScreen} />
      </Stack.Navigator>
    )
}

export const StackAccountNavigation = ()=>{
    return(
      <Stack.Navigator initialRouteName={TypeNavigation.account.login} 
          screenOptions={{headerShown:false}}
        >
          <Stack.Screen name={TypeNavigation.account.login} component={LoginScreen} />
          <Stack.Screen name={TypeNavigation.account.signIn} component={SignUpScreen} />
        </Stack.Navigator>
    )
}