/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { RootStackRoute } from './src/route/RootStackRoute';
import { NavigationContainer } from '@react-navigation/native';
import "./global.css"
import {persistor, store} from './src/redux/store';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackRoute />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
