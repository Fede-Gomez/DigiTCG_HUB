import React from 'react'; 
import { HomeScreen } from '../screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screen/LoginScreen';
import CreateAccountScreen from '../screen/SignUpScreen';
import { useAccount } from '../hooks/useAccount';
import SignUpScreen from '../screen/SignUpScreen';
import { TypeNavigation } from '../constants/typesNavigation';
import { TopTapNavigation } from './TopTabNavigation';

const Stack = createNativeStackNavigator()

export const StackGameNavigation = ()=>{
    return (
      <Stack.Navigator initialRouteName={TypeNavigation.game.homeGameTopBar}
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name={TypeNavigation.game.homeGameTopBar} component={TopTapNavigation} />
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