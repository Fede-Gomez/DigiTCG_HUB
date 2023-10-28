import React,{ useEffect } from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeNavigation } from '../constants/typesNavigation';
import { TopTapNavigation } from './TopTabNavigation';
import { LoginScreen, SignUpScreen } from '../screen';
import { useAppSelector } from '../hooks/useReducerHook';
import { useAccount } from '../hooks';

const Stack = createNativeStackNavigator()

export const StackLogSignNavigation = ()=>{
  const profile = useAppSelector(state => state.user.profile)
  const {getUserStorageDevice} = useAccount()

  useEffect(() => {
    getUserStorageDevice()
  }, [])
  
    return(
      <Stack.Navigator
        initialRouteName={profile.length !== 0 ? TypeNavigation.game.homeGameTopBar : TypeNavigation.account.login } 
          screenOptions={{
            headerShown:false,
          }}
        >
        <Stack.Screen name={TypeNavigation.account.login} component={LoginScreen} />
        <Stack.Screen name={TypeNavigation.account.signIn} component={SignUpScreen} />
        <Stack.Screen name={TypeNavigation.game.homeGameTopBar} component={TopTapNavigation}/>
      </Stack.Navigator>
    )
}