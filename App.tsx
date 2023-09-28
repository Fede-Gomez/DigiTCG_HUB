import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/reducers/store';
import { StackLogSignNavigation } from './src/navigation/StackNavigation';
import { app } from './src/firebase';
app
function App() {  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackLogSignNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
