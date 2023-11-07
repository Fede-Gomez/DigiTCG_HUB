import React,{ useEffect } from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeNavigation } from '../constants/typesNavigation';
import { TopTapNavigation } from './TopTabNavigation';
import { LoginScreen, SignUpScreen } from '../screen';
import { useAppSelector } from '../hooks/useReducerHook';
import { useAccount } from '../hooks';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator()

export const StackLogSignNavigation = ()=>{
  const profile = useAppSelector(state => state.user.profile)
  const {getUserStorageDevice} = useAccount()
// console.log(profile);

  useEffect(() => {
    getUserStorageDevice()
  }, [])
  
    return(
      <>
        <Stack.Navigator
          initialRouteName={profile.length !== 0 ? TypeNavigation.game.home : TypeNavigation.account.login } 
            screenOptions={{
              headerShown:false,
            }}
          >
          <Stack.Screen name={TypeNavigation.account.login} component={LoginScreen} />
          <Stack.Screen name={TypeNavigation.account.signIn} component={SignUpScreen} />
          <Stack.Screen name={TypeNavigation.game.home} component={TopTapNavigation}/>
        </Stack.Navigator>
        <Toast
          position='top'
          autoHide={true}
          visibilityTime={1500}
        />
      </>
    )
}