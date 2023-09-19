import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/reducers/store';
import { app } from './src/firebase/connect';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { useCards } from './src/hooks';
import { StackLogSignNavigation } from './src/navigation/StackNavigation';
app
const Drawer = createDrawerNavigator();
function App() {

  // const {loadAllCards, getFilterCards} = useCards()
  // useEffect(() => {
  //       getFilterCards('digimon');
  //       loadAllCards();
  // }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackLogSignNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
