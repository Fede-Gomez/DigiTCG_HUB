import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/reducers/store';
import { StackLogSignNavigation } from './src/navigation/StackNavigation';
import { app } from './src/firebase';
import SplashScreen from 'react-native-splash-screen'

app

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackLogSignNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
