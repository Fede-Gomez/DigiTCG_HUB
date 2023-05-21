import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackAccountNavigation, StackGameNavigation } from './StackNavigation';
import { TypeNavigation } from '../constants/typesNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name={TypeNavigation.account.loginDrawer} component={StackAccountNavigation} />
        <Drawer.Screen name={TypeNavigation.game.homeGameDrawer} component={StackGameNavigation} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation