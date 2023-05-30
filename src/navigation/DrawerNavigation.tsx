import React, {useEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackAccountNavigation, StackGameNavigation, StackLogSignNavigation } from './StackNavigation';
import { TypeNavigation } from '../constants/typesNavigation';
import { useCards } from '../hooks';
import { useAppSelector } from '../hooks/useReducerHook';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const user = useAppSelector(state => state.user.user)
  
  const {loadAllCards, getFilterCards} = useCards()
  useEffect(() => {
        getFilterCards('digimon');
        loadAllCards();
  }, [])
    

  return (
    <Drawer.Navigator>
      {
        user.length !== 0 ?
          <>
            <Drawer.Screen name={TypeNavigation.game.homeGameDrawer} component={StackGameNavigation} 
              options={{
                unmountOnBlur:true, 
                drawerType:'back',
                headerTitleAlign:'center'
              }} 
            />
            <Drawer.Screen name={TypeNavigation.account.logOutDrawer} component={StackAccountNavigation} 
              options={{
                unmountOnBlur:true,
                drawerType:'back',
                headerTitleAlign:'center',
              }}
            />
          </>
          :
          <>
            <Drawer.Screen name={TypeNavigation.account.loginDrawer} component={StackLogSignNavigation}
              options={{
                drawerType:'back',
                headerTitleAlign:'center',
                unmountOnBlur:true,
              }}
            />
          </>
      }



    </Drawer.Navigator>
  )
}

export default DrawerNavigation