import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/reducers/store';
import { app } from './src/firebase/connect';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './src/navigation/DrawerNavigation';
app
const Drawer = createDrawerNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
