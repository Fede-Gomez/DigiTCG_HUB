import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackAccountNavigation, StackGameNavigation } from './StackNavigation';
import { TypeNavigation } from '../constants/typesNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenListeners={{}} >
        <Drawer.Screen name={TypeNavigation.game.homeGameDrawer} component={StackGameNavigation} options={{unmountOnBlur:true}}  />
        <Drawer.Screen name={TypeNavigation.account.loginDrawer} component={StackAccountNavigation} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation