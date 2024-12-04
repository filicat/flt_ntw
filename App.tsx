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
import { DefaultTheme, PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // primary: 'tomato',
      // secondary: 'yellow',
    },
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootStackRoute />
      </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
