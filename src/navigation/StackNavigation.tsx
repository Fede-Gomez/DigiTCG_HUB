import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeNavigation } from '../constants/typesNavigation';
import { TopTapNavigation } from './TopTabNavigation';
import { LoginScreen, SignUpScreen, LogOutScreen } from '../screen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator()

export const StackLogSignNavigation = ()=>{
    return(
      <Stack.Navigator initialRouteName={TypeNavigation.account.login} 
          screenOptions={{
            headerBackVisible:false,
            headerTitle:'Titulo de la app',
            headerTitleAlign:'center',
            headerRight: () => (
              <Button
                onPress={() => console.log('This is a button!')}
                title="Help"
                color="red"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => LogOutScreen}
                title="logOff"
                color="black"
              />
            ),
          }}
        >
          <Stack.Screen name={TypeNavigation.account.login} component={LoginScreen} />
          <Stack.Screen name={TypeNavigation.account.signIn} component={SignUpScreen} />
          <Stack.Screen name={TypeNavigation.game.homeGameTopBar} component={TopTapNavigation} />
        </Stack.Navigator>
    )
}