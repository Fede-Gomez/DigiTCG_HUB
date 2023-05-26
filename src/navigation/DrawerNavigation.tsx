import React, {useEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackAccountNavigation, StackGameNavigation } from './StackNavigation';
import { TypeNavigation } from '../constants/typesNavigation';
import { useCards } from '../hooks';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  const {loadAllCards, getFilterCards} = useCards()
  useEffect(() => {
        getFilterCards('digimon');
        loadAllCards();
  }, [])
    

  return (
    <Drawer.Navigator screenListeners={{}} >
        <Drawer.Screen name={TypeNavigation.account.loginDrawer} component={StackAccountNavigation} />
        <Drawer.Screen name={TypeNavigation.game.homeGameDrawer} component={StackGameNavigation} options={{unmountOnBlur:true}}  />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation